let localurl = "http://localhost:5000"
let wordsEl = document.getElementById("words");
let wordArr = [];
for (let wordEl of wordsEl.children) {
  let word = "";
  for (let letterEl of wordEl.children) {
    word += letterEl.innerText;
  }
  wordArr.push(word);
}

fetch(`${localurl}/words`, {
  method: "POST",
  body: JSON.stringify({ words: wordArr }),
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
})

let intId;
const clearInt = () => {
  clearInterval(intId)
}

document.addEventListener("keypress", (e) => {
  if(e.key === "/"){
    fetch(`${localurl}/end`)
  }
})

intId = setInterval(() => {
  let resultEl = document.getElementById("result")
  if(!resultEl.classList.contains('hidden')){
    fetch(`${localurl}/end`)
    .then(res => {
        clearInt()
      });
  }
}, 800)
