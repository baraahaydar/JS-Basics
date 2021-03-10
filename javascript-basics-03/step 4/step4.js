const pas = document.querySelector("#password");
const con = document.querySelector("#confirmation");

function req() {
    if (pas.value != con.value){
pas.style.color = "red";
con.style.color = "red";
}
}
