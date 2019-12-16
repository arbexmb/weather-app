const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')
const pOne = document.getElementById('pOne')
const pTwo = document.getElementById('pTwo')
const pThree = document.getElementById('pThree')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchEl.value

    pOne.innerHTML = '<strong>Loading...</strong>'
    pTwo.innerHTML = ''
    pThree.innerHTML = ''

    fetch('http://127.0.0.1:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                pOne.innerHTML = '<strong>' + data.error + '</strong>'
            } else {
                pOne.innerHTML = 'Location: <strong>' + data.location + '</strong>'
                pTwo.innerHTML = 'Temperature: <strong>' + data.forecast.temperature + ' ºC</strong>'
                pThree.innerHTML = 'Rain probability: <strong>' + data.forecast.precipProbability.toFixed(1) + '%</strong>'
            }
        })
    })
})