
const myBtn = document.querySelector(".btn")
const myAgainBtn = document.querySelector(".again")
const myText = document.querySelector(".write")
const inputVal = document.querySelector(".youNumber")

window.addEventListener("load",()=>{
    myAgainBtn.style.display = "none";
    inputVal.focus();
    
})


const myNumber = Math.round(Math.random() * 100);
let count = 0;

myBtn.addEventListener("click", () => {
    count++;
    if (inputVal.value == myNumber && count <= 10) {
        alert("Congrats!")
    } else if (count == 10) {
        alert("Game Over!")
        myAgainBtn.style.display = "inline";
        myBtn.style.display = "none";
    } else {
        alert("Try again!")
    }
    myText.textContent = `Right: ${count}/10`;
    inputVal.value = "";
    inputVal.focus();

})

