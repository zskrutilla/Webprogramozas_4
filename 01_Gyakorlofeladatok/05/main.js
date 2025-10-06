var Auto = /** @class */ (function () {
    function Auto(marka, evjarat) {
        this.marka = marka;
        this.evjarat = evjarat;
    }
    Auto.prototype.info = function () {
        return "".concat(this.marka, " (").concat(this.evjarat, ")");
    };
    return Auto;
}());
var autok = [];
document.addEventListener("DOMContentLoaded", function () {
    var marka = document.getElementById("marka");
    var evjarat = document.getElementById("evjarat");
    var add = document.getElementById("add");
    var lista = document.getElementById("lista");
    function render() {
        lista.innerHTML = autok.map(function (a) { return "<div class=\"item\">".concat(a.info(), "</div>"); }).join("");
    }
    add.addEventListener("click", function () {
        var m = (marka.value || "").trim();
        var e = Number(evjarat.value || 0);
        if (!m || !Number(evjarat.value))
            return alert("Adj meg márkát és évjáratot!");
        autok.push(new Auto(m, e));
        render();
    });
});
