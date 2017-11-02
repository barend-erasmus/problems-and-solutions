const fs = require('fs');

const questionHTML = fs.readFileSync("question.html", "utf8");
const answerHTML = fs.readFileSync("answer.html", "utf8");

const uniformFont = 'Arial';

let processHTML = questionHTML.replace(/style="([^\"]*)"/g, function (all, g1) {

    var styleContent = g1;

    var styleElements = styleContent.split(';');

    var newStyleElements = [];

    for (var element of styleElements) {
        var splittedElement = element.split(':');
        if (splittedElement[0].trim() === 'font-family') {
            newStyleElements.push(`font-family: ${uniformFont}`);
        } else {
            newStyleElements.push(element);
        }
    }

    var newStyleContent = `style="${newStyleElements.join(';')}"`;
    return newStyleContent;
});

processHTML = processHTML.replace(/face="([^\"]*)"/g, function (all, g1) {
    return `face="${uniformFont}"`;
});

console.log(processHTML === answerHTML);
