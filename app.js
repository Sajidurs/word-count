let inputTextArea = document.getElementById ("input-textarea");

let characCount = document.getElementById ("charac-count");

let wordCount = document.getElementById ("word-count");


inputTextArea.addEventListener("input", () => {
    // Counts Number of Characters
    characCount.textContent = inputTextArea.value.length;
    // Removes Whitespaces From Both Sides of the String
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});