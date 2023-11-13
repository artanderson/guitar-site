export const symbols = {
    flat: "♭",
    sharp: "♯"
}
export const notesConstant = [ 
    "C", 
    [`C${symbols.sharp}`, `D${symbols.flat}`], 
    "D", 
    [`D${symbols.sharp}`, `E${symbols.flat}`], 
    "E", 
    "F", 
    [`F${symbols.sharp}`, `G${symbols.flat}`], 
    "G", 
    [`G${symbols.sharp}`, `A${symbols.flat}`],
    "A", 
    [`A${symbols.sharp}`, `B${symbols.flat}`], 
    "B"
];

export const steps = {
    Major: [2,2,1,2,2,2,1],
    Minor: [2,1,2,2,1,2,2]
}

const getNoteIdx = (note) => {
    return notesConstant.findIndex((n) => (n === note || n.includes(note)))
}

const fixFlatSharp = (note, type) => {
    let sharp = type === "sharp";
    let idx = getNoteIdx(note);
    let newIdx = sharp ? (idx === 0 ? notesConstant.length : idx) - 1 : (idx === notesConstant.length - 1 ? 0 : idx + 1);
    let newNote = notesConstant[newIdx];
    if (typeof newNote === 'object') newNote = newNote[sharp ? 0 : 1];
    return newNote + symbols[type]; 
}

export const getScale = (note, scale) => {
    let notes = [...notesConstant];
    let reverse = note.charAt(1) ===  symbols.sharp;
    
    let idx = getNoteIdx(note);
    let front = notes.splice(0, idx);
    notes = [...notes, ...front];
    
    let index = 0;
    let scaleNotes = []
    for(let step of steps[scale]) {
        scaleNotes.push(notes[index]);
        index += step;
    }

    let flatten = [];
    (reverse ? scaleNotes.toReversed() : scaleNotes).map((n, idx) => {
        let obj = typeof n === "object";
        let current = n;
        
        if(obj) {
            if((idx === 0 && !reverse) || (reverse && idx === scaleNotes.length - 1)) return flatten.push(note);
            current = n[0];
        }
        
        if(reverse && idx === 0 && current.charAt(0) === note.charAt(0)) return flatten.push(fixFlatSharp(current, "sharp")); 
        
        for (let i = 0; i < idx; i++){
            if(flatten[i].charAt(0) === current.charAt(0)) {
                current = obj ? n[1] : fixFlatSharp(n, reverse ? "sharp" : "flat");
            }
        }
        return flatten.push(current);
    })

    return reverse ? flatten.toReversed() : flatten;
}

export const getChord = (root) => {
    
}