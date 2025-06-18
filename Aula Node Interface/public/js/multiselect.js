
document.addEventListener('DOMContentLoaded', function () {
    const multiSelect = document.querySelector('.multi-select');

    multiSelect.addEventListener('mousedown', function (e) {
        if (e.target.tagName === 'OPTION') {
            e.preventDefault();

            const option = e.target;
            option.selected = !option.selected;
            updateOptionStyles(multiSelect);
        }
    });

    multiSelect.addEventListener('change', function () {
        updateOptionStyles(multiSelect);
    });

    function updateOptionStyles(selectElement) {
        Array.from(selectElement.options).forEach(option => {
            if (option.selected) {
                option.classList.add('selected-icon');
            } else {
                option.classList.remove('selected-icon');
            }
            option.style.backgroundColor = '';
            option.style.color = '';
        });
    }
    updateOptionStyles(multiSelect);
});
