var convertButton=document.querySelector("#convertButton");
var textToConvert=document.querySelector("#textToConvert");
var outputText=document.querySelector("#outputText");

convertButton.addEventListener('click', clickHandler)

function errorMessage(error){
    console.log(error)
    alert("There's a probable issue that might have occured, sit tight and get ready to die")
}

function clickHandler()
{
    var loadUrl="https://api.funtranslations.com/translate/minion.json"+"?"+"text="+textToConvert.value;
    fetch(loadUrl)
    .then(response => response.json())
    .then( json => {
        var translatedText=json.contents.translated;
        outputText.innerText=translatedText;
    })
    .catch(errorMessage)
};