function darkmode() {
    var containers = ['.container', '.containerWeather', '.container2', '.arrow-down'];
    var toggler = document.getElementById("toggler");
    var togglerSrc = toggler.getAttribute("src");
    toggler.classList.toggle('toggler-dark-mode');
    if (togglerSrc.includes("moonicon.svg")) {
        toggler.src = "assets/sunicon.svg";
    } else {
        toggler.src = "assets/moonicon.svg";
    }
    containers.forEach(function(container) {
        var elements = document.querySelectorAll(container);
        elements.forEach(function(element) {
            element.classList.toggle('dark-mode');
        });
    });
}