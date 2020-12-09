var btnTranslate = document.querySelector("#convert-button");
var txtInput = document.querySelector("#input");
var outputDiv = document.querySelector("#converted-output");

var serverURL = "https://api.funtranslations.com/translate/circled-text.json"

function ConversionURL(input) {
    return serverURL + "?" + "text=" + input
}

function erroroccured(error){

    console.log(error);
    alert("Server is down")
}

function clickHandler() {
    var inputText = txtInput.value; 

  
    fetch(ConversionURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
           .catch(erroroccured)
};

btnTranslate.addEventListener("click", clickHandler)