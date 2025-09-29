let nev: string = "Anna";
let eletkor: number = 25;
let aktiv: boolean = true;

function render() {
    const out = document.getElementById("out")!;
    out.innerHTML = `
        <div class="row"><strong>Név: </strong>${nev}</div>
        <div class="row"><strong>Kor: </strong>${eletkor}</div>
        <div class="row"><strong>Aktív: </strong>${aktiv}</div>
        `;
}