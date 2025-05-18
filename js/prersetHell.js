function hell() {
    // Fach: Rot, 50%
    const fachFarbe = "ffffff";
    const fachDimmer = 100;
    sendeBefehlFach(`Color ${fachFarbe}`);
    sendeBefehlFach(`Dimmer ${fachDimmer}`);
    document.getElementById("color-picker-fach").value = "#FF0000";
    document.getElementById("slider-dimmer-fach").value = fachDimmer;
    document.getElementById("dimmer-value-fach").innerText = `${fachDimmer}%`;

    // Alfred: Blau, 70%
    const alfredFarbe = "ffffff";
    const alfredDimmer = 100;
    sendeBefehlAlfred(`Color ${alfredFarbe}`);
    sendeBefehlAlfred(`Dimmer ${alfredDimmer}`);
    document.getElementById("color-picker-alfred").value = "#0000FF";
    document.getElementById("slider-dimmer-alfred").value = alfredDimmer;
    document.getElementById("dimmer-value-alfred").innerText = `${alfredDimmer}%`;
}
