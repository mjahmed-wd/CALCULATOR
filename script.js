let input = document.querySelector('input')

var button = document.getElementsByTagName('button')
for (let i = 0; i < button.length; i++) {
    const element = button[i];
    element.addEventListener('click', function(event) {
        if (event.target.innerText == "=") {
            input.value = eval(input.value).toFixed(3)
        } else if (event.target.innerText == "X") {
            input.value += "*"
        } else if (event.target.innerText == "C") {
            input.value = ""
        } else {
            input.value += (event.target.innerText)
        }
    })
}


//method 2
// var buttons = document.getElementById('buttonId')
// buttons.addEventListener('click', function(event) {

//     if (event.target.innerText == "=") {
//         input.value = eval(input.value)
//     } else if (event.target.innerText == "X") {
//         input.value += "*"
//     } else if (event.target.innerText == "C") {
//         input.value = ""
//     } else {
//         input.value += (event.target.innerText)
//     }
// })