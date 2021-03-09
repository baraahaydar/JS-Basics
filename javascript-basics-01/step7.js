function msg() {
    var ss = document.getElementById('shoes_size').value;
    var ye = document.getElementById('year').value;
    var fmsg = (((( ss * 2) + 5) * 50) - ye) + 1766 ;
    alert(f"result =" + fmsg);
}