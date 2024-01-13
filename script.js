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
