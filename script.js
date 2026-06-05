
function digits(phone){return phone.replace(/\D/g,"")}
function getPhone(name){return tournamentData.contacts[name]||"-"}
function showContact(name){const phone=getPhone(name);document.getElementById("modalName").textContent=name;document.getElementById("modalPhone").textContent=phone;document.getElementById("waLink").href="https://wa.me/"+digits(phone);document.getElementById("contactModal").classList.add("show")}
function closeModal(){document.getElementById("contactModal").classList.remove("show")}
function scrollToRound16(){document.getElementById("round16").scrollIntoView({behavior:"smooth"})}
function scrollToRound32(){document.getElementById("round32").scrollIntoView({behavior:"smooth"})}
function teamBlock(name){const div=document.createElement("div");div.className="team";div.onclick=()=>showContact(name);div.innerHTML=`<div><div class="team-name">${name}</div><div class="tag">Klik untuk kontak</div></div><span>📞</span>`;return div}
function renderRound16(){const grid=document.getElementById("round16Grid");tournamentData.round16.forEach(m=>{const card=document.createElement("div");card.className="match-card";card.innerHTML=`<div class="match-title">Round 16 • Match ${m.match}</div>`;card.appendChild(teamBlock(m.a));const vs=document.createElement("div");vs.className="vs";vs.textContent="VS";card.appendChild(vs);card.appendChild(teamBlock(m.b));grid.appendChild(card)})}
function renderRound32(){const grid=document.getElementById("round32Grid");tournamentData.round32.forEach(m=>{const card=document.createElement("div");card.className="match-card";card.innerHTML=`<div class="match-title">POT ${m.pot}</div>`;card.appendChild(teamBlock(m.a));const vs=document.createElement("div");vs.className="vs";vs.textContent="VS";card.appendChild(vs);card.appendChild(teamBlock(m.b));const winner=document.createElement("div");winner.className="winner";winner.textContent="WIN: "+m.winner;card.appendChild(winner);grid.appendChild(card)})}
document.getElementById("contactModal").addEventListener("click",e=>{if(e.target.id==="contactModal")closeModal()});renderRound16();renderRound32();
