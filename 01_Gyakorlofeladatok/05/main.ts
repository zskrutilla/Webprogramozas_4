class Auto {
    constructor(public marka: string, public evjarat: number) { }
    info(): string {
        return `${this.marka} (${this.evjarat})`;
    }
}

const autok: Auto[] = [];

document.addEventListener("DOMContentLoaded", () => {
    const marka = document.getElementById("marka") as HTMLInputElement;
    const evjarat = document.getElementById("evjarat") as HTMLInputElement;
    const add = document.getElementById("add") as HTMLButtonElement;
    const lista = document.getElementById("lista")!;

    function render() {
        lista.innerHTML = autok.map(a => `<div class="item">${a.info()}</div>`).join("");
    }

    add.addEventListener("click", () => {
        const m = (marka.value || "").trim();
        const e = Number(evjarat.value || 0);
        if(!m || !Number(evjarat.value)) return alert("Adj meg márkát és évjáratot!");
        autok.push(new Auto(m, e));
        render();
    });
});