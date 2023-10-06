let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");
let homePoints = 0;
let guestPoints = 0;
function homeIncre1() {
  homePoints += 1;
  homeScoreEl.textContent = homePoints;
}
function homeIncre2() {
  homePoints += 2;
  homeScoreEl.textContent = homePoints;
}
function homeIncre3() {
  homePoints += 3;
  homeScoreEl.textContent = homePoints;
}
function guestIncre1() {
  guestPoints += 1;
  guestScoreEl.textContent = guestPoints;
}
function guestIncre2() {
  guestPoints += 2;
  guestScoreEl.textContent = guestPoints;
}
function guestIncre3() {
  guestPoints += 3;
  guestScoreEl.textContent = guestPoints;
}
function newGame() {
  homePoints = 0;
  guestPoints = 0;
  homeScoreEl.textContent = homePoints;
  guestScoreEl.textContent = guestPoints;
}
