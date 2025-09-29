function osszead(a, b) {
    return a + b;
}
document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var btn = document.getElementById("calc");
    var res = document.getElementById("res");
    btn.addEventListener("click", function () {
        var av = Number(a.value || 0);
        var bv = Number(b.value || 0);
        res.textContent = "Eredm\u00E9ny: ".concat(osszead(av, bv));
    });
});
