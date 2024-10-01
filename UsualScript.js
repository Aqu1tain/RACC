const cssKey = "customCSS";
let storedCSS = localStorage.getItem("customCSS");
function injectCSS(e) {
    var t = document.createElement("style");
    (t.innerHTML = e), document.head.appendChild(t);
}
storedCSS && injectCSS(storedCSS);
