function rest(){
    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");
    const city = document.querySelector("#city");

    var answer = confirm("clear all field!");
    if (answer){
        name.value = " ";
        surname.value = " ";
        city.value = " ";

    }
}