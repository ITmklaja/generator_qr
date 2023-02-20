let canvas = document.getElementById('kod-qr');
let szerokosc = 0;
if(window.innerWidth > 1024){
    szerokosc = 500;
}else{
    szerokosc = window.innerWidth * 0.4;
};
document.getElementById("main").style.width = szerokosc + "px";
let kod = new QRious({
    element: canvas, size: szerokosc, value: ""
});

let input = document.getElementById('zawartosc');
let wyslij = document.getElementById('wyslij');
let pobierz = document.getElementById('pobierz');
var newBtn = document.getElementById("new-btn");



wyslij.addEventListener('click', function() {
    if(input.value = ''){
        alert('Nie podano danych! <br> Czy na pewno chcesz kontynuować?')
    }
    let nowaWartosc = input.value;
    kod.set({
        value: nowaWartosc
    });

    if(pobierz == ''){
        pobierz.setAttribute('download', 'Pusty_kod_QR');
    }else {
        let NazwaPliku = 'Kod_QR_' + nowaWartosc + '.png';
        pobierz.setAttribute('download', NazwaPliku);
    }

    let dataURL = canvas.toDataURL('image/png');
    pobierz.setAttribute('href', dataURL);
});

newBtn.addEventListener('click', function() {

    input.value = "";
    kod.set({
        value: ""
    });

    pobierz.removeAttribute('download');
    pobierz.removeAttribute('href');
});