const runButtonElement = document.getElementById('run-button');
const clearButtonElement = document.getElementById('clear-button');

const htmlCodeText = document.getElementById('html-code');
const cssCodeText = document.getElementById('css-code');
const jsCodeText = document.getElementById('js-code');

const textAreas = document.querySelectorAll('.textarea');

const iframe = document.getElementsByTagName('iframe')[0].contentWindow.document;

runButtonElement.addEventListener('click', () => {
    const htmlCode = htmlCodeText.value;
    const cssCode = cssCodeText.value;
    const jsCode = jsCodeText.value;

    const code = `${htmlCode}
        <style>${cssCode}</style>
        <script>${jsCode}</script>`;

    iframe.open();
    iframe.write(code);
    iframe.close();
});

clearButtonElement.addEventListener('click', () => textAreas.forEach(textArea => textArea.value = null));
