var nev = "Anna";
var eletkor = 25;
var aktiv = true;
function render() {
    var out = document.getElementById("out");
    out.innerHTML =
        "<div class=\"row\"><strong>N\u00E9v: </strong>".concat(nev, "</div>\n        <div class=\"row\"><strong>Kor: </strong>").concat(eletkor, "</div>\n        <div class=\"row\"><strong>Akt\u00EDv: </strong>").concat(aktiv, "</div>");
}
