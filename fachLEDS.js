const ipFach = "192.168.1.26";

function sendeBefehlFach(befehl) {
    const url = `http://${ipFach}/cm?cmnd=${befehl}`;
    new Image().src = url;
}

function steuereFach(farbe, dimmer) {
    sendeBefehlFach(`Color ${farbe}`);
    sendeBefehlFach(`Dimmer ${dimmer}`);
}

function aktualisiereDimmerFach() {
    const dimmerValue = document.getElementById("slider-dimmer-fach").value;
    document.getElementById("dimmer-value-fach").innerText = `${dimmerValue}%`;
    const colorHex = document.getElementById("color-picker-fach").value.replace("#", "");
    steuereFach(colorHex, dimmerValue);
}

function updateColorFach() {
    const colorHex = document.getElementById("color-picker-fach").value.replace("#", "");
    const dimmerValue = document.getElementById("slider-dimmer-fach").value;
    steuereFach(colorHex, dimmerValue);
}

function schalteAusFach() {
    sendeBefehlFach(`Color 000000`);
    sendeBefehlFach(`Dimmer 0`);

    document.getElementById("slider-dimmer-fach").value = 0;
    document.getElementById("dimmer-value-fach").innerText = `0%`;
}

function schalteAnFach() {
    const colorHex = document.getElementById("color-picker-fach").value.replace("#", "");
    const dimmerValue = 100;
    steuereFach(colorHex, dimmerValue);
    document.getElementById("slider-dimmer-fach").value = dimmerValue;
    document.getElementById("dimmer-value-fach").innerText = `${dimmerValue}%`;
}
