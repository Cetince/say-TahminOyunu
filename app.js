let success = prompt("Enter a number for other player"),
    min = 1 , 
    max = 100 , 
    guessTime = 5;

while (success.value < min || success.value > max || success.value == isNaN){
    prompt("Enter a number between ${min}  ${max} for other player");
} 


const minSayı = document.querySelector(".min"),
    maxSayı = document.querySelector(".max"),
    tahminInput = document.querySelector("#tahminInput"),
    tahminButton = document.querySelector("#tahminButton"),
    game = document.querySelector(".oyun"),
    message = document.querySelector(".message"),
    kalanTahmin = document.querySelector(".kalanTahminSayısı");

minSayı.textContent = min;
maxSayı.textContent = max;

tahminButton.addEventListener("click", function(){
        if (tahminInput.value === ""|| tahminInput.value < min || tahminInput.value > max ) {
            warnMessage("Lütfen geçerli bir giriş yapınız...", "red");
        }   

        else if(tahminInput.value == Number(success) ){
            warnMessage("Tebrikler. doğru tahmin ettin", "green");
        }
        else if(tahminInput.value > Number(success)+20){
            warnMessage("Aşağı", "red");
        }
        else if(tahminInput.value > Number(success) ){
            warnMessage("Aşağı", "orange");
        }
        else if(tahminInput.value < Number(success)-20){
            warnMessage("Yukarı", "blue");
        }
        else if(tahminInput.value < Number(success) ){
            warnMessage("Yukarı", "purple");
        }
        else{
            warnMessage("sıkıntı ne", "red");
        }
        
});

function warnMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}

console.log(Number(success) + Number(success))

