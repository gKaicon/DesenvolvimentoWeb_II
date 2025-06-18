
document.addEventListener('DOMContentLoaded', function () {
    const multiSelect = document.querySelector('.multi-select');

  // ADICIONE ESTE LOOP PARA DEPURAR
    console.log('Estado inicial das opções antes de updateOptionStyles:');
    Array.from(multiSelect.options).forEach(option => {
        console.log(`Opção: "${option.textContent}" (ID: ${option.value}), Selected: ${option.selected}, ClassList: ${option.classList}`);
    });
    // FIM DA DEPURACAO

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
