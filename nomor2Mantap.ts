let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan NIM Anda (maksimal 9 digit): ', function(nim) {
    if (nim.length > 9) {
        console.log("NIM tidak boleh lebih dari 9 digit");
        rl.close();
        return;
    }

    let lastTwoDigits = parseInt(nim.slice(-2));
    let isOdd = lastTwoDigits % 2 !== 0;

    if (isOdd) {
        // Jika angka terakhir NIM adalah ganjil, gunakan while loop
        let i = 0;
        while (i <= 20) {
            console.log(lastTwoDigits++);
            i++
        }
    } else {
        // Jika angka terakhir NIM adalah genap, gunakan do..while loop
        let i = 0;
        do {
            console.log(lastTwoDigits++);
            i++;
        } while (i <= 20);
    }

    rl.close();
});
