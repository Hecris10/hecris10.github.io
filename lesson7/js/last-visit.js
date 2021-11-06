const days_Milliseconds = 8640000;
let user_lastVisit
if ("user_lastVisit" in localStorage) {
    user_lastVisit = localStorage.getItem("user_lastVisit");
} else {
    user_lastVisit = Date.now();
}


let convertTime = Math.round((Date.now() - user_lastVisit) / 8640000);
localStorage.user_lastVisit = Date.now();

console.log(convertTime)
let visit_text = "There's " + convertTime + " days since your last visit";

document.querySelector(".last_visit").textContent = visit_text;