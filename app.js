const htmlCode = document.querySelector("#htmlCode")
const cssCode = document.querySelector("#cssCode")
const jsCode = document.querySelector("#jsCode")

const runBtn = document.querySelector("#runBtn")

const output = document.querySelector("#output")

function runCode() {
    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;

    let result = `
        ${html}
        <style>${css}</style>
        <script>${js}</script>
    `
    output.srcdoc = result
}

runBtn.addEventListener("click", runCode)

runCode()