const LANGUAGE_SERVER_URL = "https://monkey-language-service.onrender.com/eval";

const button = document.getElementById("code-submission");
button.addEventListener("click", async () => {
  const codeEditor = document.getElementById("code-editor");
  const evalOutput = document.getElementById("eval-output");
  const response = await fetch(LANGUAGE_SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: codeEditor.value,
    }),
  });
  const json = await response.json();
  console.log(json);
  const output = json.result;
  evalOutput.innerText = output;
  evalOutput.className = json.isError ? "red" : "yellow";
});

const exampleCode = `let capitalized = fn(word) {
  let chars = split(word, "");
  let firstChar = toUpperCase(first(chars));
  let restChars = toLowerCase(join(rest(chars), ""));
  return firstChar + restChars;
}

let words = split("welcome TO THE " + -"yeknOm" + " Programming Language", " ");
let output = []
let i = 0;
while (i < len(words)) {
  let output = push(output, capitalized(words[i]));
  let i = i + 1;
};
join(output, " ") + "!"
`;

const codeEditor = document.getElementById("code-editor");
codeEditor.value = exampleCode;
