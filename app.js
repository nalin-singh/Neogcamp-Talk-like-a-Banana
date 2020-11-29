var convertButton=document.querySelector("#convertButton");
var textToConvert=document.querySelector("#textToConvert");
var outputText=document.querySelector("#outputText");

convertButton.addEventListener('click', clickHandler)

function errorMessage(error){
    console.log(error)
    alert("Something ain't working right!")
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