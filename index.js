const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}
function destructivelyPrependCat(Ralph) {
    cats.unshift(Ralph);
}
function destructivelyRemoveLastCat(Ralph) {
    cats.pop(Ralph);
}
function destructivelyRemoveFirstCat(Ralph) {
    cats.shift(Ralph);
}

function appendCat(Ralph){
    const newCats = [...cats.slice(0,3), Ralph]
   return newCats;
}
function prependCat(name){
    const newCats = [...cats]
    newCats.splice(0,0, name)
    return newCats;
}
function removeLastCat() {
    const newCats = [...cats]
    newCats.splice(-1,1)
    return newCats;
}
function removeFirstCat() {
    const newCats = [...cats]
    newCats.splice(0,1)
    return newCats;
}
