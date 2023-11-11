var nim = "101201201";
var duadigitakhir = parseInt(nim.slice(-2));
var bilanganGanjil = duadigitakhir % 2 !== 0;
if (bilanganGanjil) {
    var i = 0;
    while (i <= 20) {
        console.log(duadigitakhir++);
        i++;
    }
}
else {
    var i = 0;
    do {
        console.log(duadigitakhir++);
        i++;
    } while (i <= 20);
}
