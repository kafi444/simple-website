const title = `kaffi.xyz | PORTFOLIO`
const blurMsg = "Opuszczasz mnie???"

window.addEventListener("blur", () => {
    document.title = blurMsg
})

window.addEventListener("focus", () => {
    document.title = title
})