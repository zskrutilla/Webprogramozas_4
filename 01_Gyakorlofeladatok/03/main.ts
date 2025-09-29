function osszeg(lista: number[]): number {
    let sum = 0;
    for (const szam of lista) sum += szam;
    return sum;
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("nums") as HTMLInputElement;
    const res = document.getElementById("res")!;

    const calc = () => {
        const parts = input.value.split(",").map(s => Number(s.trim() || 0))
        res.textContent = `Összeg: ${osszeg(parts)}`;
    };

    input.addEventListener("input", calc);
});