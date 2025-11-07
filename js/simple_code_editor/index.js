document.addEventListener('DOMContentLoaded', () => {
    const htmlCodeElement = document.getElementById('html-code');
    const cssCodeElement = document.getElementById('css-code');
    const jsCodeElement = document.getElementById('js-code');
    
    const runButtonElement = document.getElementById('run-button');

    function updateDisplay() {
        const html = htmlCodeElement.value;
        const css = cssCodeElement.value;
        const js = jsCodeElement.value;
        
        const outputFrame = document.getElementById('output');

        const outputDocument = outputFrame.contentWindow.document;

        outputDocument.open();

        outputDocument.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
            </html>
        `);
        
        outputDocument.close();
    }

    runButtonElement.addEventListener('click', updateDisplay);

    updateDisplay();
});
