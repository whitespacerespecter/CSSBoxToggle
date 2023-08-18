
let injectHTML = document.createElement("style")
let body = document.getElementsByClassName("html")

injectHTML.innerHTML = `
    <style>
    *{
        background: rgb(0 100 0 / 0.1) !important;
        outline: 1px solid limegreen !important
    }
    </style>
`

body.app