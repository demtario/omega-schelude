const getContent = (string, sep) => {

    let contents = [];

    let rest = string;
    let tag;
    let content;
    do {
        if (rest) 
            tag = rest.match(new RegExp(`<${sep}([^>]+)?>`));
        else 
            tag = false;

        if (tag) {
            tag = tag[0];

            content = rest.split(new RegExp(`${tag}(.+)`, 's'))[1];

            if (content) {

                let help = content.split(new RegExp(`<\/${sep}>(.+)?`, 's'));

                let opensInHelp = help[0].match(new RegExp(`<${sep}([^>]+)?>`, 'g'));
                let count = 0;
                if (opensInHelp)
                    count = opensInHelp.length;

                for (let i = 0; i < count; i++) {
                    let help2 = help[1].split(new RegExp(`<\/${sep}>(.+)?`, 's'));
                    let opensInHelp2 = help2[0].match(new RegExp(`<${sep}([^>]+)?>`, 'g'));
                    if (opensInHelp2)
                        count += opensInHelp2.length;

                    help[0] += `</${sep}>` + help2[0];
                    help[1] = help2[1];
                }

                contents.push(help[0]);
                rest = help[1];
            }
        }
    } while (tag && rest && content);

    return contents;
}

exports.getContent = getContent