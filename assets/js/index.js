'use strict';
/*

const [widthElem, heightElem] = document.getElementsByTagName('h1');

function refreshSizeValues(){
    widthElem.innerText = `Inner width = ${window.innerWidth}px`;
    heightElem.innerText = `Inner height = ${window.innerHeight}px`;
}

window.addEventListener("load", refreshSizeValues);
window.addEventListener("resize", refreshSizeValues);


window.onresize = refreshSizeValues();
window.onload = refreshSizeValues();
*/


const DOCUMENT_BG_COlOR = 'documentBGColor';

const inputs = document.querySelectorAll('.inputWrapper input[type="range"]');
const doc = document.querySelector(":root");

let documentBGColor = null;


function refreshDocumentBGColor() {
    let index = 0;
    for (const prop in documentBGColor) {
        documentBGColor[prop] = inputs[index].value;
        index++;
    }

    doc.style.backgroundColor = `rgba(${
        documentBGColor.red
    }, ${
        documentBGColor.green
    }, ${
        documentBGColor.blue
    }, ${
        documentBGColor.alpha
    })`

    localStorage.setItem(DOCUMENT_BG_COlOR, JSON.stringify(documentBGColor));
}

for (const input of inputs) {
    input.addEventListener('input', refreshDocumentBGColor);
}

window.onload = loadSavedColor;

function loadSavedColor() {
    //const bgColorValue = localStorage.getItem(DOCUMENT_BG_COlOR);
    documentBGColor = localStorage.getItem(DOCUMENT_BG_COlOR);

    if (documentBGColor) {
        documentBGColor = JSON.parse(documentBGColor);

        let index = 0;
        for (const prop in documentBGColor) {
            inputs[index].value = documentBGColor[prop];
            index++;
        }
    } else {
        documentBGColor = {
            red: inputs[0],
            green: inputs[1],
            blue: inputs[2],
            alpha: inputs[3],
        }

    }
    refreshDocumentBGColor();
}



