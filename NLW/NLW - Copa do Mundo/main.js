function createGame(link1, player1, hour, link2, player2) {
  return `
  <li>
    <a href="${link1}" target="_blank" rel="noopener noreferrer">
      <img src="./assets/bandeiras/${player1}.svg" alt="${player1}" />
    </a>
    <strong>${hour}</strong>
    <a href="${link2}" target="_blank" rel="noopener noreferrer">
      <img src="./assets/bandeiras/${player2}.svg" alt="${player2}" />
    </a>
  </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2> ${date} <span> ${day} </span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = createCard(createGame())
