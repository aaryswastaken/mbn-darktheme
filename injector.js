/*const backgroundColor = "#1E1E1E";
const fontColor = "#e3e9ec";

document.documentElement.style.backgroundColor = backgroundColor;
document.body.style.color = fontColor;

Array.from(document.getElementsByClassName("app-layout-1"))
    .forEach(e => Array.from(e.children)
        .forEach(e2 => e2.style.backgroundColor = backgroundColor));
*/

      /* "js": [ "injector.js" ] */


function addCss(fileName) {

    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;

    head.appendChild(link);
}

addCss()