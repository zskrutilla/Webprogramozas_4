function elsoElem<T>(lista: T[]): T | undefined {
    return lista[0];
}

function parseNumbers(s: string): number[] {
    return s.split(",").map(x => Number(x.trim() || 0));
}

function parseString(s: string): string[] {
    return s.split(",")
        .map(x => x.trim())
        .map(x => x.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"))
        .filter(x => x.length > 0);
}

function parseObjects(s: string): Array<Record<string, unknown>> {
    const parts = s.split("},").map((p, i, arr) => i < arr.length - 1 ? p + "}" : p);
    const out: Record<string, unknown>[] = [];

    for (const p of parts) {
        try {
            out.push(JSON.parse(p.trim()));
        }
        catch {
            // Jelenleg nem kell
        }
    }
    return out;
}

document.addEventListener("DOMContentLoaded", () => {
    const nums = document.getElementById("nums") as HTMLTextAreaElement;
    const strings = document.getElementById("strings") as HTMLTextAreaElement;
    const objs = document.getElementById("objs") as HTMLTextAreaElement;

    const resNum = document.getElementById("resNum")!;
    const resStr = document.getElementById("resStr")!;
    const resObj = document.getElementById("resObj")!;

    const updateNums = () => {
        const arr = parseNumbers(nums.value);
        resNum.textContent = String(elsoElem<number>(arr) ?? "nincs");
    };
    const updateStr = () => {
        const arr = parseString(strings.value);
        resStr.textContent = String(elsoElem<string>(arr) ?? "nincs");
    };
    const updateObj = () => {
        const arr = parseObjects(objs.value);
        const first = elsoElem(arr);
        resObj.textContent = first ? JSON.stringify(first) : "nincs";
    };

    [nums, strings, objs].forEach(el => el.addEventListener("input", () => {
        updateNums(); updateStr(); updateObj();
    }));
    updateNums(); updateStr(); updateObj();
})