const cssKey = "customCSS";
function injectCSS(css) {
    var style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
}
let storedCSS = localStorage.getItem(cssKey);
if (storedCSS) {
    injectCSS(storedCSS);
} else {
    fetch(
        "https://raw.githubusercontent.com/Aqu1tain/RACC/master/redhat-custom.css"
    )
        .then((response) => response.text())
        .then((css) => {
            localStorage.setItem(cssKey, css);
            injectCSS(css);
        })
        ["catch"]((error) =>
            console.error("Erreur lors du chargement du fichier CSS :", error)
        );
}
