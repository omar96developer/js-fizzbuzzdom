/* const row = document.querySelector ('.row')
row.innerHTML += ``

for (let i = 1; i < 101; i++){
  const cont = document.createElement("div");
}





for (let i = 1; i < 101; i++){
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } 
  else if (i % 3 == 0) {
    console.log("Fizz");
  } 
  else if (i % 5 == 0)  {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
 */

const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
  let boxColor = "";
  let boxText = i;

  if (i % 3 === 0 && i % 5 === 0) {
    boxColor = "box--fizzbuzz";
    boxText = "fizz buzz";

  } else if (i % 3 === 0) {
    boxColor = "box--fizz";
    boxText = "fizz";

  } else if (i % 5 === 0) {
    boxColor = "box--buzz";
    boxText = "buzz";
  }

  const box = document.createElement("div");
  box.classList.add("box");
  box.textContent = boxText;

  if (boxColor) {
    box.classList.add(boxColor);
  }

  container.append(box);


  //const box = `<div class="box ${boxColor}">${boxText}</div>`;

  //container.innerHTML += box;
}

/* for (let i = 1; i <= 14; i++) {
  // ciclo per 14 righe
  console.log("inizio riga", i);
  for (let j = 0; j < 7; j++) {
    // ciclo per ogni singola cella
    console.log(`stampo cella ${j} della riga ${i}`);
  }
} */