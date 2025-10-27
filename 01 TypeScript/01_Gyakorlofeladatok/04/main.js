function atlag(d) {
    var sum = d.jegyek.reduce(function (a, b) { return a + b; }, 0);
    return d.jegyek.length ? sum / d.jegyek.length : 0;
}
document.addEventListener("DOMContentLoaded", function () {
    var nev = document.getElementById("nev");
    var eletkor = document.getElementById("kor");
    var jegyek = document.getElementById("jegyek");
    var res = document.getElementById("res");
    var calc = function () {
        var d = {
            nev: nev.value || "Ismeretlen",
            eletkor: Number(eletkor.value || 0),
            jegyek: (jegyek.value)
                .split(",")
                .map(function (s) { return Number(s.trim()) || 0; })
        };
        res.textContent = "".concat(d.nev, " \u00E1tlaga: ").concat(atlag(d).toFixed(2));
    };
    [nev, eletkor, jegyek].forEach(function (inp) { return inp.addEventListener("input", calc); });
});
