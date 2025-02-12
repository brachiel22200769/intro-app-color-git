document.addEventListener("DOMContentLoaded", function() {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    const redValue = document.getElementById("red-value");
    const greenValue = document.getElementById("green-value");
    const blueValue = document.getElementById("blue-value");

    const colorBox = document.getElementById("color-box");
    const colorCode = document.getElementById("color-code");
    const colorPicker = document.getElementById("color-picker");

    function updateColor() {
        let r = red.value;
        let g = green.value;
        let b = blue.value;

        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;

        let hexColor = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = hexColor;
        colorCode.textContent = hexColor.toUpperCase();
        colorPicker.value = hexColor;
    }

    function syncInputs(event) {
        let input = event.target;
        let id = input.id.replace("-value", "");
        document.getElementById(id).value = input.value;
        updateColor();
    }

    function syncFromPicker() {
        let hex = colorPicker.value;
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        red.value = r;
        green.value = g;
        blue.value = b;

        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;

        colorBox.style.backgroundColor = hex;
        colorCode.textContent = hex.toUpperCase();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    redValue.addEventListener("input", syncInputs);
    greenValue.addEventListener("input", syncInputs);
    blueValue.addEventListener("input", syncInputs);

    colorPicker.addEventListener("input", syncFromPicker);
});