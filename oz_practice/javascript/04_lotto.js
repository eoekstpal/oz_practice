const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

let lottoNumbers = []

const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let data = today.getDate()
//todaySpan.textContent = `${year}년 ${month}월 ${date}일`


function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    eachNumDiv.classList.add("eachNum")
    eachNumDiv.textContent = number
    numbersDiv.append(eachNumDiv)
}

//클릭하면 랜덤 숫자가 배열에 추가됨
drawButton.addEventListener("click", function(){
    numbersDiv.innerHTML = ""
    if(lottoNumbers.length > 0){
        lottoNumbers.splice(0, 6)
        numbersDiv.innerHTML = ""
    }
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45) + 1
        //index에 rn이 없으면 -1을 반환함
        if(lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn)
            paintNumber(rn)
        }
        
    }
})

resetButton.addEventListener("click", function(){
    lottoNumbers.splice(0, 6)
    console.log(lottoNumbers)
    numbersDiv.innerHTML = ""
})