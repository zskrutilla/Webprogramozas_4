function osszeg(lista) {
    var sum = 0;
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var szam = lista_1[_i];
        sum += szam;
    }
    return sum;
}
document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("nums");
    var res = document.getElementById("res");
    var calc = function () {
        var parts = input.value.split(",").map(function (s) { return Number(s.trim() || 0); });
        res.textContent = "\u00D6sszeg: ".concat(osszeg(parts));
    };
    input.addEventListener("input", calc);
});
