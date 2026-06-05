
function digits(phone) {
  return phone.replace(/\D/g, "");
}

function showContact(name, phone) {
  document.getElementById("modalName").textContent = name;
  document.getElementById("modalPhone").textContent = phone;
  document.getElementById("waLink").href = "https://wa.me/" + digits(phone);
  document.getElementById("contactModal").classList.add("show");
}

function closeModal() {
  document.getElementById("contactModal").classList.remove("show");
}

function scrollToBracket() {
  document.getElementById("bracket").scrollIntoView({ behavior: "smooth" });
}

function scrollToParticipants() {
  document.getElementById("participants").scrollIntoView({ behavior: "smooth" });
}

const rounds = [
  { title: "Round 32", count: 16 },
  { title: "Round 16", count: 8 },
  { title: "Quarter Final", count: 4 },
  { title: "Semi Final", count: 2 },
  { title: "Final", count: 1 }
];

function createTeam(team) {
  const div = document.createElement("div");
  div.className = "team";
  div.onclick = () => showContact(team.name, team.phone);
  div.innerHTML = `
    <div>
      <div class="team-name">${team.name}</div>
      <div class="tag">Klik untuk kontak</div>
    </div>
    <span>📞</span>
  `;
  return div;
}

function renderBracket() {
  const grid = document.getElementById("bracketGrid");
  rounds.forEach((round, roundIndex) => {
    const column = document.createElement("div");
    column.className = "round";
    column.innerHTML = `<div class="round-title">${round.title}</div>`;

    for (let i = 0; i < round.count; i++) {
      const match = document.createElement("div");
      match.className = "match";
      match.innerHTML = `<div class="match-no">${round.title} • Match ${i + 1}</div>`;

      if (roundIndex === 0) {
        const a = participants[i * 2];
        const b = participants[i * 2 + 1];
        match.appendChild(createTeam(a));
        const vs = document.createElement("div");
        vs.className = "vs";
        vs.textContent = "VS";
        match.appendChild(vs);
        match.appendChild(createTeam(b));
        match.insertAdjacentHTML("beforeend", `<input placeholder="Pemenang Match ${i + 1}">`);
      } else {
        match.insertAdjacentHTML("beforeend", `
          <input placeholder="Nama pemenang">
          <input placeholder="Skor / Catatan">
        `);
      }

      column.appendChild(match);
    }

    grid.appendChild(column);
  });
}

function renderParticipants() {
  const grid = document.getElementById("participantGrid");
  participants.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "participant-card";
    card.onclick = () => showContact(p.name, p.phone);
    card.innerHTML = `<b>${i + 1}. ${p.name}</b><span>📞 Klik untuk nomor admin</span>`;
    grid.appendChild(card);
  });
}

document.getElementById("contactModal").addEventListener("click", (e) => {
  if (e.target.id === "contactModal") closeModal();
});

renderBracket();
renderParticipants();
