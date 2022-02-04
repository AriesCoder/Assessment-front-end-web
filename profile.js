const colorBtn = document.querySelector('#color')
const favorColor = () => {
    alert('my favorite color is Blue')
}
colorBtn.addEventListener('click', favorColor)

const placeBtn = document.querySelector('#place')
const favorPlace = () => {
    alert('my favorite place is Paris')
}
placeBtn.addEventListener('click', favorPlace)

const ritBtn = document.querySelector('#ritual')
const favorRit = () => {
    alert('my favorite ritual is giving lucky money and greetings in Lunar New Year')
}
ritBtn.addEventListener('click', favorRit)