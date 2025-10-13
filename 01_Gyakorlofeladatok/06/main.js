function elsoElem(lista) {
    return lista[0];
}
function parseNumbers(s) {
    return s.split(",").map(function (x) { return Number(x.trim() || 0); });
}
function parseString(s) {
    return s.split(",")
        .map(function (x) { return x.trim(); })
        .map(function (x) { return x.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"); })
        .filter(function (x) { return x.length > 0; });
}
function parseObjects(s) {
    var parts = s.split("},").map(function (p, i, arr) { return i < arr.length - 1 ? p + "}" : p; });
    var out = [];
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var p = parts_1[_i];
        try {
            out.push(JSON.parse(p.trim()));
        }
        catch (_a) {
            // Jelenleg nem kell
        }
    }
    return out;
}
document.addEventListener("DOMContentLoaded", function () {
    var nums = document.getElementById("nums");
    var strings = document.getElementById("strings");
    var objs = document.getElementById("objs");
    var resNum = document.getElementById("resNum");
    var resStr = document.getElementById("resStr");
    var resObj = document.getElementById("resObj");
    var updateNums = function () {
        var _a;
        var arr = parseNumbers(nums.value);
        resNum.textContent = String((_a = elsoElem(arr)) !== null && _a !== void 0 ? _a : "nincs");
    };
    var updateStr = function () {
        var _a;
        var arr = parseString(strings.value);
        resStr.textContent = String((_a = elsoElem(arr)) !== null && _a !== void 0 ? _a : "nincs");
    };
    var updateObj = function () {
        var arr = parseObjects(objs.value);
        var first = elsoElem(arr);
        resObj.textContent = first ? JSON.stringify(first) : "nincs";
    };
    [nums, strings, objs].forEach(function (el) { return el.addEventListener("input", function () {
        updateNums();
        updateStr();
        updateObj();
    }); });
    updateNums();
    updateStr();
    updateObj();
});
