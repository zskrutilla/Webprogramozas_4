function osszead(a: number, b: number): number {
    return a + b;
}

document.addEventListener("DOMContentLoaded", ()=>
{
    const a = document.getElementById("a") as HTMLInputElement;
    const b = document.getElementById("b") as HTMLInputElement;
    const btn = document.getElementById("calc") as HTMLButtonElement;
    const res = document.getElementById("res")!;

    btn.addEventListener("click", ()=>
    {
        const av = Number(a.value || 0);
        const bv = Number(b.value || 0);
        res.textContent = `Eredmény: ${osszead(av, bv)}`;
    });
});