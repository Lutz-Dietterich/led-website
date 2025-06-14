const ips = ["192.168.155.211", "192.168.155.212", "192.168.155.213"];

function sendeBefehl(ip, befehl) {
    const url = `http://${ip}/cm?cmnd=${befehl}`;
    new Image().src = url;
}

function steuereAlle(farbe, dimmer) {
    ips.forEach((ip) => {
        sendeBefehl(ip, `Color ${farbe}`);
        sendeBefehl(ip, `Dimmer ${dimmer}`);
    });
}

function aktualisiereDimmer() {
    const dimmerValue = document.getElementById("slider-dimmer").value;
    document.getElementById("dimmer-value").innerText = `${dimmerValue}%`;
    const colorHex = document.getElementById("color-picker").value.replace("#", "");
    steuereAlle(colorHex, dimmerValue);
}

function updateColor() {
    const colorHex = document.getElementById("color-picker").value.replace("#", "");
    const dimmerValue = document.getElementById("slider-dimmer").value;
    steuereAlle(colorHex, dimmerValue);
}

function schalteAus() {
    ips.forEach((ip) => {
        sendeBefehl(ip, `Color 000000`);
        sendeBefehl(ip, `Dimmer 0`);
    });
    document.getElementById("slider-dimmer").value = 0;
    document.getElementById("dimmer-value").innerText = `0%`;
}

function schalteAn() {
    const colorHex = document.getElementById("color-picker").value.replace("#", "");
    const dimmerValue = 100;
    steuereAlle(colorHex, dimmerValue);
    document.getElementById("slider-dimmer").value = dimmerValue;
    document.getElementById("dimmer-value").innerText = `${dimmerValue}%`;
}
