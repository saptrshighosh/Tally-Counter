let countEl=document.getElementById("count-el")
console.log(countEl)

let count=0
function increment(){
    count+=1
    countEl.textContent = count
}

let saveEl=document.getElementById("save-el")
console.log(saveEl)

testing=0
function save(){
  testing=count + " - "
  saveEl.textContent+=testing

  countEl.textContent = 0
  count = 0 
  
}

function reset(){
  countEl.textContent = 0
  saveEl.textContent = 0
}
