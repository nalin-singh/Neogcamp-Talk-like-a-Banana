var convertButton=document.querySelector("#convertButton");
var textToConvert=document.querySelector("#textToConvert");
var outputText=document.querySelector("#outputText");

convertButton.addEventListener('click', clickHandler)

function clickHandler()
{
    outputText.innerText=textToConvert.value;
};

