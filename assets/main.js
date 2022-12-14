const inputText = document.getElementById('text');
const result = document.getElementById('result');
const codeExplanation = document.getElementById('explanation');

let morseAlphabet = [
    { letter: '1', morseCode: '.----' },
    { letter: '2', morseCode: '..---' },
    { letter: '3', morseCode: '...--' },
    { letter: '4', morseCode: '....-' },
    { letter: '5', morseCode: '.....' },
    { letter: '6', morseCode: '-....' },
    { letter: '7', morseCode: '--...' },
    { letter: '8', morseCode: '---..' },
    { letter: '9', morseCode: '----.' },
    { letter: '0', morseCode: '-----' },
    { letter: ' ', morseCode: '    ' },
    { letter: 'A', morseCode: '.-' },
    { letter: 'B', morseCode: '-...' },
    { letter: 'C', morseCode: '-.-.' },
    { letter: 'D', morseCode: '-..' },
    { letter: 'E', morseCode: '.' },
    { letter: 'F', morseCode: '..-.' },
    { letter: 'G', morseCode: '--.' },
    { letter: 'H', morseCode: '....' },
    { letter: 'I', morseCode: '..' },
    { letter: 'J', morseCode: '.---' },
    { letter: 'K', morseCode: '-.-' },
    { letter: 'L', morseCode: '.-..' },
    { letter: 'M', morseCode: '--' },
    { letter: 'N', morseCode: '-.' },
    { letter: 'O', morseCode: '---' },
    { letter: 'P', morseCode: '.--.' },
    { letter: 'Q', morseCode: '--.-' },
    { letter: 'R', morseCode: '.-.' },
    { letter: 'S', morseCode: '...' },
    { letter: 'T', morseCode: '-' },
    { letter: 'U', morseCode: '..-' },
    { letter: 'V', morseCode: '...-' },
    { letter: 'W', morseCode: '.--' },
    { letter: 'X', morseCode: '-..-' },
    { letter: 'Y', morseCode: '-.--' },
    { letter: 'Z', morseCode: '--..' },
];

const encrypt = () => {
    let codedArray;
    let enteredWordsArray = inputText.value.toUpperCase().split('');
    codedArray = enteredWordsArray.map((element) => {
        return morseAlphabet.find((ele) => ele.letter === element);
    });
    result.innerHTML = codedArray
        .map((element) => {
            return element.morseCode;
        })
        .join('');
    codeExplanation.innerHTML = codedArray
        .map((element) => {
            if (element.letter === ' ') {
                return '<br />';
            } else {
                return ` <p>${
                    element.letter + '  =  ' + element.morseCode
                }</p>`;
            }
        })
        .join('');
};
