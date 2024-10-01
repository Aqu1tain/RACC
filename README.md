# RACC (RedHat Academy Custom CSS)

[CHROMIUM ONLY] (Brave, Google Chrome, Opera, Firefox etc…)

At first, on (rha.ole.redhat.com) academy courses open `F12` and choose `console` tab.

Then copy / paste the following code in the console:

```javascript
const c="customCSS";function t(e){var c=document.createElement("style");c.innerHTML=e;document.head.appendChild(c)}let e=localStorage.getItem(c);if(e){t(e)}else{fetch("https://raw.githubusercontent.com/Aqu1tain/RACC/1c3e5ea38c7ec6a8d4ceb143f0929083ddf5dc6d/redhat-custom.css").then(e=>e.text()).then(e=>{localStorage.setItem(c,e);t(e)})["catch"](e=>console.error("Erreur lors du chargement du fichier CSS :",e))}
```
(Source code is in InitialScript.js)
When you refresh the page, the injected CSS will diseapear, so make sure you add it back via the previous code, or : 
```javascript
const t="customCSS";let o=localStorage.getItem("customCSS");function c(t){var o=document.createElement("style");o.innerHTML=t,document.head.appendChild(o)}o&&c(o);
```
___
Made with ❤️ by [Akitain](http://corentinrenard.com)
