// const counter = setInterval(myTimer, 1000);
//
// console.log(counter)

function myTimer() {
  document.getElementById("counter").innerHTML ++;
}

// setInterval(myTimer, 1000);


const minus = document.getElementById('-');

function subtractCounter() {
  minus.addEventListener('click', function() {
  document.getElementById("counter").innerHTML --;
    });
  }

subtractCounter();


const plus = document.getElementById('+');

function additionCounter() {
  plus.addEventListener('click', function() {
  document.getElementById("counter").innerHTML ++;
    });
  }

additionCounter();
const heart = document.getElementById('<3');
const list = document.querySelector("likes")
let array = []

function arrayCount(num){
  return array.filter(function(x){
    return x === num;
  });
}
function likeList() {
  heart.addEventListener('click', function() {
    const number = document.getElementById("counter").innerHTML
    if (array.includes(number)){
      array.push(number)
      const listItem = document.createElement("LI");
      const textLI = document.createTextNode(`${number} has been liked ${arrayCount(number).length} times`);
      listItem.appendChild(textLI);
      document.querySelector(".likes").appendChild(listItem);
    }else{
      array.push(number)
      const listItem = document.createElement("LI");
      const textLI = document.createTextNode(`${number} has been liked 1 time`);
      listItem.appendChild(textLI);
      document.querySelector(".likes").appendChild(listItem);
    }
  });
}

likeList();


const pause = document.getElementById('pause');
let isPaused = 0

let countVariable = setInterval(myTimer, 1000)

function pauseCounter(){
  pause.addEventListener('click', function() {
    // console.log(counter)
    if (isPaused === 0){
      clearInterval(countVariable);
      isPaused ++;
      pause.innerHTML = "resume";
    } else if (isPaused === 1) {
    countVariable = setInterval(myTimer, 1000);
    isPaused --;
    pause.innerHTML = "pause";
    }
  });
}

pauseCounter();


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('comment-form')
  const commentList = document.getElementById('list');

  const submitButton = document.getElementById('submit')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    // debugger
    x = e.target.querySelector("input").value

    console.log(commentList.innerHTML += `<p>${x}</p>`)
  })
})
// const submit = document.getElementById('submit')

// function submitStuff() {
//   submit.addEventListener('submit', function(){
//     console.log(commentList.innerHTML += `<p>$hi</p>`)
//   });
// }
//
// submitStuff();
