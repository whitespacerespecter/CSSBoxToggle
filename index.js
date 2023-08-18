document.getElementById('injectStyleButton').addEventListener('click', function() {
    injectStyleToActiveTab();
});

function injectStyleToActiveTab() {
    const code = `
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = \`
            *{
                background: rgb(0 100 0 / 0.1) !important;
                outline: 1px solid limegreen !important;
            }
        \`;
        document.head.appendChild(style);
    `;

    chrome.tabs.executeScript({
        code: code
    });
}