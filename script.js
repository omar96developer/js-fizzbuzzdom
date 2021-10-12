/*
  <div class="row g-0">
    <div class="col">
      <div class="ratio ratio-1x1 border ${bgColor}">
        <div></div>
      </div>
    </div>
  </div>
*/

const containerScacchiera = document.getElementById("container_scacchiera");

for (let i = 0; i < 14; i++) {
  
  const row = document.createElement("div");
  row.classList.add("row", "g-0");
  //row.textContent = 'riga numero' + 1;
  for (let x = 0; x < 7; x++) {
      row.innerHTML += `<div class="col">
                            <div class="ratio ratio-1x1 border">
                                <div></div>
                            </div>
                        </div>`
  }

  containerScacchiera.append(row);
}