document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');
    let lastButtonClicked = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.value;

            if (display.value === 'Error') {
                display.value = '';
            }

            if (value === 'AC') {
                display.value = '';
                lastButtonClicked = '';
            } else if (value === 'DE') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                if (lastButtonClicked === '=') {
                    display.value = value;
                } else {
                    display.value += value;
                }
            }

            lastButtonClicked = value;

        });
    });
});  