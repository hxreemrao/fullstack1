let isWhite = true;
function changeBackground() {
if (isWhite) {
document.body.style.backgroundColor = "lightblue";
 isWhite=false;
} else {
document.body.style.backgroundColor = "white";
isWhite = true;
}
}
