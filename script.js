
const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
  let boxColor = "";
  let boxText = i;

  if (i % 3 === 0 && i % 5 === 0) {
    boxColor = "boxfizzbuzz";
    boxText = "fizz buzz";

  } else if (i % 3 === 0) {
    boxColor = "boxfizz";
    boxText = "fizz";

  } else if (i % 5 === 0) {
    boxColor = "boxbuzz";
    boxText = "buzz";
  }

  const box =`<div class="box ${boxColor}">${boxText}</div>` 

  container.innerHTML += box;
}

