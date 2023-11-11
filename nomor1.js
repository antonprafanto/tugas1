function cetakAngka(start, end, isEven) {
    for (var i = start; i < end; i++) {
        if ((i % 2 === 0 && isEven) || (i % 2 === 1 && !isEven)) {
            console.log(i);
        }
    }
}
function jumlahkan(start, end, isEven) {
    var sum = 0;
    for (var i = start; i < end; i++) {
        if ((i % 2 === 0 && isEven) || (i % 2 === 1 && !isEven)) {
            sum += i;
        }
    }
    return sum;
}
function main() {
    var totalLoops = 10;
    var range = totalLoops * 10;
    var sum = 0;
    for (var i = 0; i < totalLoops; i++) {
        var start = (i - 1) * 10 + 1;
        var end = i * 10;
        console.log("Perulangan 10 ke-".concat(i, ":"));
        cetakAngka(start, end, i % 2 === 0);
        console.log('');
        var loopSum = jumlahkan(start, end, i % 2 === 0);
        console.log("Jumlah: ".concat(loopSum));
        console.log('');
        sum += loopSum;
    }
    console.log("Total Jumlah: ".concat(sum));
}
main();
