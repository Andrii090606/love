function showLove() {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("loveMessage").classList.remove("hidden");
}

function moveNo() {
    let noButton = document.querySelector(".no");
    let randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    let randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}