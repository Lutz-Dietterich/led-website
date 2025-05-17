const ip = "192.168.1.26";

function sendeBefehl(ip, befehl) {
    const url = `http://${ip}/cm?cmnd=${befehl}`;
    new Image().src = url;
}

function steuereAlle(farbe, dimmer) {
    sendeBefehl(ip, `Color ${farbe}`);
    sendeBefehl(ip, `Dimmer ${dimmer}`);
}

function aktualisiereDimmer() {
    const dimmerValue = document.getElementById("slider-dimmer-fach").value;
    document.getElementById("dimmer-value-fach").innerText = `${dimmerValue}%`;
    const colorHex = document.getElementById("color-picker-fach").value.replace("#", "");
    steuereAlle(colorHex, dimmerValue);
}

function updateColor() {
    const colorHex = document.getElementById("color-picker-fach").value.replace("#", "");
    const dimmerValue = document.getElementById("slider-dimmer-fach").value;
    steuereAlle(colorHex, dimmerValue);
}

function schalteAusFach() {
    sendeBefehl(ip, `Color 000000`);
    sendeBefehl(ip, `Dimmer 0`);

    document.getElementById("slider-dimmer-fach").value = 0;
    document.getElementById("dimmer-value-fach").innerText = `0%`;
}

function schalteAnFach() {
    const colorHex = document.getElementById("color-picker-fach").value.replace("#", "");
    const dimmerValue = 100;
    steuereAlle(colorHex, dimmerValue);
    document.getElementById("slider-dimmer-fach").value = dimmerValue;
    document.getElementById("dimmer-value-fach").innerText = `${dimmerValue}%`;
}
