interface Diak {
    nev: string;
    eletkor: number;
    jegyek: number[];
}

function atlag(d: Diak): number {
    const sum = d.jegyek.reduce((a, b) => a + b, 0);
    return d.jegyek.length ? sum / d.jegyek.length : 0;
}

document.addEventListener("DOMContentLoaded", () => {
    const nev = document.getElementById("nev") as HTMLInputElement;
    const eletkor = document.getElementById("kor") as HTMLInputElement;
    const jegyek = document.getElementById("jegyek") as HTMLInputElement;
    const res = document.getElementById("res")!;

    const calc = () => {
        const d: Diak = {
            nev: nev.value || "Ismeretlen",
            eletkor: Number(eletkor.value || 0),
            jegyek: (jegyek.value)
                .split(",")
                .map(s => Number(s.trim()) || 0)
                //.filter(n => !Number.isNaN(n)) Amúgy ez a jó megoldás...
        };
        res.textContent = `${d.nev} átlaga: ${atlag(d).toFixed(2)}`;
    }
    [nev, eletkor, jegyek].forEach(inp => inp.addEventListener("input", calc))
});