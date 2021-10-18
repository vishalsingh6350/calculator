const input = document.querySelector('.inputLine')
const output = document.querySelector('.outputLine')
const buttons = document.querySelectorAll('button')

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        output.placeholder = ''
        if (e.currentTarget.innerText === 'C') {
            input.value = input.value.substring(0, input.value.length - 1)
        } else if (e.currentTarget.innerText === 'AC') {
            input.value = '';
            output.value = '';
            output.placeholder = ' output will be displayed here'
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

const mainContainer = document.querySelector('.mainContainer')
mainContainer.addEventListener('mousemove', (e) => {
    let XpositionRelativeToViewport = e.clientX || e.pageX;
    let YpositionRelativeToViewport = e.clientY || e.pageY;
    let boundingRect = e.currentTarget.getBoundingClientRect();
    let relativeX = Math.floor(XpositionRelativeToViewport - boundingRect.x);
    let relativeY = Math.floor(YpositionRelativeToViewport - boundingRect.y);
    // console.log(relativeX, relativeY)
    let containerHeight = boundingRect.height;
    let containerWidth = boundingRect.width;
    // console.log(Math.floor(containerHeight / 2 - relativeY))
    // console.log(Math.floor(containerWidth / 2 - relativeX) / 2)
    document.documentElement.style.setProperty('--y', `${Math.floor((containerWidth / 2 - relativeX)/10)}deg`)
    document.documentElement.style.setProperty('--x', `${Math.floor((containerWidth / 2 - relativeY)/20)}deg`)

})

mainContainer.addEventListener('mouseleave', () => {
    document.documentElement.style.setProperty('--y', `0deg`)
    document.documentElement.style.setProperty('--x', `0deg`)
})

mainContainer.addEventListener('touchend', () => {
    document.documentElement.style.setProperty('--y', `0deg`)
    document.documentElement.style.setProperty('--x', `0deg`)
})