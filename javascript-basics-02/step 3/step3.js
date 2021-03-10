function dia(){
const name = document.querySelector("#name")
const text = document.querySelector("#text")

var hh = name.value;
text.innerhtml = hh;
name.value= " "
}