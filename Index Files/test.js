const counter = document.querySelector(".counter-number");
async function updateCounter() {
     let response = await fetch("https://27tmm5ovwbbhdp3a5niqojvwk40rckhs.lambda-url.us-east-1.on.aws/");
     let data = await response.json();
     counter.innerHTML = ` Views: ${data}`;

updateCounter();