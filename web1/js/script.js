const efek = ['Front End Developer', 'Data Science'];
let count = 0;
let txtIndex =0;
let currentTxt = '';
let words = '';

(function ngetik(){

    if (count == efek.length) {
        count = 0;
    }
    currentTxt = efek[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);
})();