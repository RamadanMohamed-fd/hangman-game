const letters = 'qwertyuioplkjhgfdsamnbvcxz';
let letterarray = Array.from(letters);
let lettersContainer = document.querySelector(".letter");
letterarray.forEach(letter => {
    let span = document.createElement('span');
    let theleter = document.createTextNode(letter);
    span.appendChild(theleter);
    span.classList = 'letter-box';
    lettersContainer.appendChild(span);
});
let myrequest = new XMLHttpRequest();
myrequest.open("GET", "mainx.json");
myrequest.send();
const word = {};
myrequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const word = JSON.parse(this.responseText);

    }
};
console.log(word);
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "R", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};
let allkay = Object.keys(words);
let randimkay = Math.floor(Math.random() * allkay.length);
let randomPropName = allkay[randimkay];
let spans = document.querySelector('.catagory span');
spans.innerHTML = allkay[randimkay];
let randomvalue = Math.floor(Math.random() * words[randomPropName].length);
let randomValueValue = words[randomPropName][randomvalue];
////////////////////////////////////////////////////////
let coo = 0;
let letterGuessC = document.querySelector('.letter-guse');
let wordArray = Array.from(randomValueValue);
wordArray.forEach(letter => {
    let lspan = document.createElement('span');
    if (letter === ' ') {
        lspan.classList = 'with-space';
        coo++;
    }
    letterGuessC.appendChild(lspan);
});
////////////////////////////////////////////////////////////////////////
let co = 0;

document.addEventListener('click', (e) => {
    let state = false;

    if (e.target.className === 'letter-box') {
        e.target.classList.add('clicked');
    }
    let theClikedleeter = e.target.innerHTML.toLowerCase();
    wordArray.forEach((wordletter, index) => {
        if (theClikedleeter.toLowerCase() == wordletter.toLowerCase()) {
            let x = document.querySelector(`.letter-guse span:nth-of-type(${index + 1})`);
            x.innerHTML = theClikedleeter;
            state = true;
            coo++;
        }
    });
    let r = document.querySelectorAll('.hangman-drow div');
    if (state === false && co < 9) {
        r[co].style.display = 'block';
        co++;
    }
    if (co === 9) {
        let f = document.querySelector('.thEnd');
        document.querySelector('.r').innerHTML = "You Are Lose";
        document.querySelector('.rvalue').innerHTML = `The Word Was ${wordArray.join('')}`;
        f.style.display = 'block';
    }
    let lb = document.querySelectorAll('.letter');
    console.log(lb);
    if (coo >= wordArray.length) {
        let f = document.querySelector('.thEnd');
        document.querySelector('.r').innerHTML = "Congratulation";
        document.querySelector('.rvalue').innerHTML = `Number of Wrong : ${co}`;
        f.style.display = 'block';
    }
});


