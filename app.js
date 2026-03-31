function openPage(url) {
    document.getElementById("home").style.display = "none";
    document.getElementById("viewer").style.display = "block";
    document.getElementById("frame").src = url;
}

function goBack() {
    document.getElementById("viewer").style.display = "none";
    document.getElementById("home").style.display = "block";
}

/* TELEGRAM */
function openTelegram() {
    window.open("https://t.me/YOUR_LINK", "_blank");
}

/* WHATSAPP */
function openWhatsApp() {
    window.open("https://wa.me/YOUR_NUMBER", "_blank");
}
