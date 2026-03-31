let deferredPrompt;

/* INSTALL HANDLER */
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById("installBanner").style.display = "block";
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
    } else {
        alert("On iPhone: Tap Share → Add to Home Screen");
    }
}

/* MENU */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

/* NAVIGATION */
function openPage(url) {
    window.location.href = url;
}

/* LINKS */
function openTelegram() {
    window.open("https://t.me/YOUR_LINK", "_blank");
}

function openWhatsApp() {
    window.open("https://wa.me/YOUR_NUMBER", "_blank");
}

/* ONESIGNAL */
window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "YOUR_ONESIGNAL_APP_ID"
    });
});

/* SUBSCRIBE BUTTON */
function subscribeUser() {
    OneSignal.push(function() {
        OneSignal.showSlidedownPrompt();
    });
}

/* SERVICE WORKER */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
