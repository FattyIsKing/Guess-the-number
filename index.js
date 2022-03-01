const resultSpan = document.getElementById("resultSpan");
const difficult100 = document.getElementById("difficult100");
const difficult1000 = document.getElementById("difficult1000");
const title = document.getElementById("title");
const box__main = document.querySelector(".box__main");
const difficult = document.getElementById("difficult");

const guess100 =()=>{
    const guess = document.createElement("input");
    guess.maxLength = "3";
    guess.type = "tel";
    guess.id = "guess";
    const result = document.createElement("button");
    result.id = "result";
    result.innerHTML = "Zdagnij";
    box__main.appendChild(guess);
    box__main.appendChild(result);
    difficult.removeChild(difficult100);
    difficult.removeChild(difficult1000);
    box__main.removeChild(title);
    let x = Math.random();
    x *= 100;
    let x2 = parseInt(x);
    const handleGuess =()=>{
        if(guess.value == ""){
            resultSpan.innerHTML = "Pole jest puste!";
        }
        else if(guess.value > x2){
            resultSpan.innerHTML = "Twoja liczba jest za duża!";
            guess.value = "";
        }
        else if(guess.value < x2){
            resultSpan.innerHTML = "Twoja liczba jest za mała!";
            guess.value = "";
        }
        else if(guess.value == x2){
            resultSpan.innerHTML = "Brawo! Zgadłeś!";
            guess.value = "";
        }
}
result.addEventListener("click", handleGuess);
}

const guess1000 =()=>{
    const guess = document.createElement("input");
    guess.type = "tel";
    guess.maxLength = "4";
    guess.id = "guess";
    const result = document.createElement("button");
    result.id = "result";
    result.innerHTML = "Zdagnij";
    box__main.appendChild(guess);
    box__main.appendChild(result);
    difficult.removeChild(difficult100);
    difficult.removeChild(difficult1000);
    box__main.removeChild(title);
    let x = Math.random();
    x *= 1000;
    let x2 = parseInt(x);
    const handleGuess =()=>{
        if(guess.value == ""){
            resultSpan.innerHTML = "Pole jest puste!";
        }
        else if(guess.value > x2){
            resultSpan.innerHTML = "Twoja liczba jest za duża!";
            guess.value = "";
        }
        else if(guess.value < x2){
            resultSpan.innerHTML = "Twoja liczba jest za mała!";
            guess.value = "";
        }
        else if(guess.value == x2){
            resultSpan.innerHTML = "Brawo! Zgadłeś!";
            guess.value = "";
        }
}
result.addEventListener("click", handleGuess);
}

difficult100.addEventListener("click", guess100);
difficult1000.addEventListener("click", guess1000);
