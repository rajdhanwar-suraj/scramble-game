const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWord = '';
let scrambleWord = '';

const programWords = ["python",
    "java",
    "javascript",
    "react",
    "angular",
    "c++",
    "ruby",
    "swift",
    "kotlin",
    "php",
    "rust",
    "go",
    "typescript",
    "dart",];

const creatNewWord = () => {
    let ranNum = Math.floor(Math.random()*programWords.length);
    let ranWord = programWords[ranNum]
    return ranWord;
}

const createScrambleWord = (arr)=>{
    for (let i = arr.length; i > 0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.join("");
}

btn.addEventListener('click', () => {
    if (!play) {
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');

        newWord = creatNewWord();
        scrambleWord = createScrambleWord(newWord.split(""));
        msg.innerHTML = `Guess the Word : <span >${scrambleWord}</span>`;
        msg.querySelector('span').style.color = 'blue';
        // console.log(scrambleWord);
    }else{
        let userWord = guess.value;
        if(userWord === newWord){
            play = false;
            msg.innerHTML = `💥 💥 Correct Match💥 💥 <br> Word : <span>${newWord}</span>`;
            msg.querySelector('span').style.color = 'Yellow';

            btn.innerHTML = "Start Again"
            guess.classList.toggle('hidden');
            guess.value = '';
        }else{
            msg.innerHTML = `Wrong Match 👎👎 <br> Try again : <span>${scrambleWord}</span>`;
            msg.querySelector('span').style.color = 'red';
            guess.value = '';
            console.log('Incorrect');
        }
    }
})