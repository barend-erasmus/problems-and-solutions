const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo pellentesque nunc at tempor. Integer gravida, dolor in varius maximus, nibh lacus pharetra purus, in imperdiet dui nunc eget urna.';

const lineWidth = 25;

const splittedText = text.split(' ');

const lines = [];

let currentLine = [];

for (let text of splittedText) {

    if (getLineWidth(currentLine) + text.length < lineWidth) {
        currentLine.push(text);
    } else {
        let requiredWhiteSpaces = lineWidth - getLineWidth(currentLine);
        let index = currentLine.length - 1;

        while (requiredWhiteSpaces > 0) {
            currentLine[index] = ` ${currentLine[index]}`;

            index--;
            requiredWhiteSpaces--;

            if (index < 1) {
                index = currentLine.length - 1;
            }
        }

        lines.push(currentLine.join(' '));

        currentLine = [text];
    }

}

if (currentLine.length > 0) {
    lines.push(currentLine.join(' '));
}

for (const line of lines) {
    console.log(line);
}

function getLineWidth(line) {
    return line.length === 0 ? 0 : line.map((x) => x.length).reduce((a, b) => a + b) + line.length - 1;
}