const ipRaum = "192.168.155.212";

function sendeBefehlRaum(befehl) {
    const url = `http://${ipRaum}/cm?cmnd=${befehl}`;
    new Image().src = url;
}

function steuereRaum(farbe, dimmer) {
    sendeBefehlRaum(`Color ${farbe}`);
    sendeBefehlRaum(`Dimmer ${dimmer}`);
}

function aktualisiereDimmerRaum() {
    const dimmerValue = document.getElementById("slider-dimmer-raum").value;
    document.getElementById("dimmer-value-raum").innerText = `${dimmerValue}%`;
    const colorHex = document.getElementById("color-picker-raum").value.replace("#", "");
    steuereRaum(colorHex, dimmerValue);
}

function updateColorRaum() {
    const colorHex = document.getElementById("color-picker-raum").value.replace("#", "");
    const dimmerValue = document.getElementById("slider-dimmer-raum").value;
    steuereRaum(colorHex, dimmerValue);
}

function schalteAusRaum() {
    sendeBefehlRaum(`Color 000000`);
    sendeBefehlRaum(`Dimmer 0`);

    document.getElementById("slider-dimmer-raum").value = 0;
    document.getElementById("dimmer-value-raum").innerText = `0%`;
}

function schalteAnRaum() {
    const colorHex = document.getElementById("color-picker-raum").value.replace("#", "");
    const dimmerValue = 100;
    steuereRaum(colorHex, dimmerValue);
    document.getElementById("slider-dimmer-raum").value = dimmerValue;
    document.getElementById("dimmer-value-raum").innerText = `${dimmerValue}%`;
}
