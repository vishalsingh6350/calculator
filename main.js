const input = document.querySelector('.inputLine')
const output = document.querySelector('.outputLine')
const buttons = document.querySelectorAll('button')

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.currentTarget.innerText === 'C') {
            input.value = input.value.substring(0, input.value.length - 1)
        } else if (e.currentTarget.innerText === 'AC') {
            input.value = '';
            output.value = '';
        } else if (e.currentTarget.innerText === '=') {
            output.value = "wrong input format..."
            output.value = eval(input.value);
        } else {
            if (output.value === '') {
                input.value += e.currentTarget.innerText
            } else if (output.value === 'wrong input format...') {
                output.value = ' '
                input.value = ' '
                input.value += e.currentTarget.innerText
            } else {
                input.value = output.value;
                output.value = ''
                input.value += e.currentTarget.innerText
            }
        }
    })
})