const express = require('express')
const axios = require('axios')
const {parse} = require('himalaya')

const database = require('./database')
const {getContent} = require('./getHtmlContent')

let app = express()
let port = process.env.PORT || 3000

let db = database.open('db.json')

app.listen(port)

console.log('omega-schedule api started on port '+port)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    next();
});

app.get('/schools', (req, res) => {
    res.send(db.schools)
})

app.get('/classes/:school', (req, res) => {
    let link = db.schools.find((el) => el.id == req.params.school).link

    let classes = {school: req.params.school, classes:[]}

    let i = 1
    while(i<50) {
        let id = i;
        axios.get(`${link}/plany/o${i}.html`)
        .then(function (response) {
            let jsonData = parse(response.data)

            let classname = jsonData[0].children[2].children[1].children[1].children[1].children[3].children[0].content
            // console.log(classname)
            classes.classes.push({id: id, name: classname})
        })
        .catch(function (error) {
            // console.log(error);
        });
        i++;
    }

    setTimeout(() => {
        classes.classes.sort((a, b) => a.id - b.id)
        res.send(classes)
    }, 1000)
})

app.get('/schelude/:school/:class', (req, res) => {
    let link = db.schools.find((el) => el.id == req.params.school).link

    axios.get(`${link}/plany/o${req.params.class}.html`)
        .then(function (response) {

            let apiResponse = {school: req.params.school, class: req.params.class, days: [[],[],[],[],[]], hours:[]}

            let jsonData = parse(response.data)
            let table = jsonData[0].children[2].children[3].children[1].children[1].children[0].children[1].children
            table = table.filter((el) => el.content != "\r\n")
            table.splice(0,1)

            table.forEach((tr, nr) => {
                tr.children = tr.children.filter((el) => el.content != "\r\n")

                // Godziny
                apiResponse.hours.push(tr.children[1].children[0].content)

                // Wywalanie godzin i numeru lekcji dla ułatwienia
                tr.children.splice(0,2)

                tr.children.forEach((td, i) => {
                    if(td.children[0].content != '&nbsp;' && typeof td != 'undefined') {
                        let lesson = {no: nr, groups: []}
                        td.children = td.children.filter((el) => el.content != " ")

                        if(typeof td.children.find((el) => el.tagName == 'br') == 'undefined' && td.children.length > 1) {
                            // Jedna grupa
                            console.log('1 grupa')
                            console.log(' ')
                            console.log(td.children)

                            let group = {name: '', teacher: '', room: ''}


                            group.name = td.children[0].children[0].content
                            group.teacher = td.children[1].children[0].content
                            group.room = td.children[2].children[0].content

                            lesson.groups.push(group)

                        } else if(td.children.length == 3) {
                            // Dwie grupy
                            console.log('2 grupy')
                            console.log(' ')

                            td.children = td.children.filter((el) => el.tagName != "br")
                            td.children.forEach((span) => {
                                span.children = span.children.filter((el) => el.type != 'text')
                                console.log(span.children)

                                let group = {name: '', teacher: '', room: ''}

                                group.name = span.children[0].children[0].content
                                group.teacher = span.children[1].children[0].content
                                group.room = span.children[2].children[0].content
                                
                                lesson.groups.push(group)
                            })
                        } else {
                            // WF-y
                            console.log('wfy')
                            
                            lesson.groups.push({name: 'WF', teacher: 'WF', room: 'WF1'})
                        }

                        console.log('  ')
                        console.log('=====')
                        console.log('  ')

                        apiResponse.days[i].push(lesson)
                    }
                })

            })
            
            // console.log(apiResponse)
            res.send(apiResponse)
        })
        .catch(function (error) {
            console.log(error)
            res.send({error: "Incorrect class or school!"})
        });
})

app.get('/replacements/:school/:class', (req, res) => {
    let link = db.schools.find((el) => el.id == req.params.school).repLink
    
    if(link === null) res.send({error: 'No replacements link!'})
    else axios.get(link, {}, { charset: 'iso-8859-2' })
        .then((respond) => {
            let table = getContent(respond.data, 'TR')
            table = table.map((el) => el.replace(/(\r\n\t|\n|\r\t|\r)/gm,""))
            table = table.map((el) => el = getContent(el, "TD"))
            table.splice(0,1)

            let replacements = [];
            let teacher = '';
            let doNew = true;
            
            table.forEach((el, i) => {
                if(doNew) {
                    teacher = el[0]
                    doNew = false;
                } else if(el[0] == "lekcja") {
                    
                } else if(el[0] == "&nbsp;") {
                    doNew = true;
                } else {
                    let classname = el[1].split(' ')[0]+el[1].split(' ')[1]
                    replacements.push({
                        lesson: parseInt(el[0]),
                        description: el[1],
                        teacher: el[2],
                        meta: el[3],
                        originally: teacher,
                        class: classname,
                        hours: "10:50-11:35"
                    })
                }
            })

            res.send(replacements)
        })
        .catch((error) => {
            console.log(error)
            res.send({error: "Critical error"})
        })
})
