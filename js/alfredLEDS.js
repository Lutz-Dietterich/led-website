const ipAlfred = "192.168.1.51";

function sendeBefehlAlfred(befehl) {
    const url = `http://${ipAlfred}/cm?cmnd=${befehl}`;
    new Image().src = url;
}

function steuereAlfred(farbe, dimmer) {
    sendeBefehlAlfred(`Color ${farbe}`);
    sendeBefehlAlfred(`Dimmer ${dimmer}`);
}

function aktualisiereDimmerAlfred() {
    const dimmerValue = document.getElementById("slider-dimmer-alfred").value;
    document.getElementById("dimmer-value-alfred").innerText = `${dimmerValue}%`;
    const colorHex = document.getElementById("color-picker-alfred").value.replace("#", "");
    steuereAlfred(colorHex, dimmerValue);
}

function updateColorAlfred() {
    const colorHex = document.getElementById("color-picker-alfred").value.replace("#", "");
    const dimmerValue = document.getElementById("slider-dimmer-alfred").value;
    steuereAlfred(colorHex, dimmerValue);
}

function schalteAusAlfred() {
    sendeBefehlAlfred(`Color 000000`);
    sendeBefehlAlfred(`Dimmer 0`);

    document.getElementById("slider-dimmer-alfred").value = 0;
    document.getElementById("dimmer-value-alfred").innerText = `0%`;
}

function schalteAnAlfred() {
    const colorHex = document.getElementById("color-picker-alfred").value.replace("#", "");
    const dimmerValue = 100;
    steuereAlfred(colorHex, dimmerValue);
    document.getElementById("slider-dimmer-alfred").value = dimmerValue;
    document.getElementById("dimmer-value-alfred").innerText = `${dimmerValue}%`;
}
