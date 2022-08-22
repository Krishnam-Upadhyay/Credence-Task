function onClickEvent() {
    let mycount = 1;
    alert("You completed" + mycount + "exercises");
    mycount = nestedcall(mycount);
    alert("You completed" + mycount + "exerceses");
}
function nestedcall(count) {
    console.log("reaached Nestedcall");
    return count + 6
}
