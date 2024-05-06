function makeTextBigger() {
    document.getElementById("inputText").style.fontSize = "24pt";
}

function applyStyles() {
    var inputTextArea = document.getElementById("inputText");
    var fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        inputTextArea.style.fontWeight = "bold";
        inputTextArea.style.color = "blue";
        inputTextArea.style.textDecoration = "underline";
    } else {
        inputTextArea.style.fontWeight = "normal";
        inputTextArea.style.color = "black"; // Reset color to default
        inputTextArea.style.textDecoration = "none"; // Reset text decoration
    }
}

function mooText() {
    var inputTextArea = document.getElementById("inputText");
    var text = inputTextArea.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Add suffix "-Moo" to the last word of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        var lastWordIndex = words.length - 1;
        words[lastWordIndex] += "-Moo";
        sentences[i] = words.join(" ");
    }
    text = sentences.join(".");

    inputTextArea.value = text;
}
