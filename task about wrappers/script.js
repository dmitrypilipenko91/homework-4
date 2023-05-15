let wrapH1 = function buildH1Wrapper(str) {
    let prefix = "<h1>";
    let postfix = "</h1>";
    str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    let result = prefix + str + postfix;
    return result
}
let wrapP = function buildPWrapper(str) {
    let prefix = "<p>";
    let postfix = "</p>";
    str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    let result = prefix + str + postfix;
    return result
}