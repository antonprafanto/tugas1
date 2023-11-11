let nim = "101201201";
let duadigitakhir = parseInt(nim.slice(-2));
let bilanganGanjil = duadigitakhir % 2 !== 0;

if(bilanganGanjil){
    let i = 0;
    while (i <= 20){
        console.log(duadigitakhir++);
        i++;
    }
}else{
    let i = 0;
    do {
        console.log(duadigitakhir++);
        i++;
    } while (i <= 20);
}