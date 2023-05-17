function buildWrapper (tag) {
    return function (str) {
        return `<${tag}>${replaceSymbols(str)}</${tag}>`
    }
}
function replaceSymbols(str) {
    return str.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/'/g, "&apos;")
               .replace(/"/g, "&quot;");
}
let wrapH1 = buildWrapper("H1");
let wrapP = buildWrapper("P");

console.log( wrapH1("СТИХИ") );
console.log( wrapP("Однажды в студёную зимнюю пору") );
console.log( wrapP("Вкусные M&M's") );

