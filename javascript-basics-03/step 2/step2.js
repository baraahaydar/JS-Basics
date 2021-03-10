const s = document.querySelector('#show');
const h = document.querySelector('#hide');
const t = document.querySelector('#texte');

const showhide = (i) => {
    if (i == "sh") {
        t.style.visibility = 'visibile';
    }
    else if (i == "hi"){
        t.style.visibility = "hidden";
        }
}
s.addEventListener("click", () => { showhide("sh") });
h.addEventListener("click", () => { showhide("hi") });
