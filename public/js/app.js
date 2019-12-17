const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')
const pOne = document.getElementById('pOne')
const pTwo = document.getElementById('pTwo')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchEl.value

    pOne.innerHTML = '<strong>Loading...</strong>'
    pTwo.innerHTML = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                pOne.innerHTML = '<strong>' + data.error + '</strong>'
            } else {
                pOne.innerHTML = 'Now in <strong>' + data.location + '</strong>'
                pTwo.innerHTML = 'Temperature: <strong>' + data.forecast.temperature + ' ºC</strong>'
                pTwo.innerHTML += '<br>'
                pTwo.innerHTML += 'Rain probability: <strong>' + data.forecast.precipProbability.toFixed(1) + '%</strong>'
                pTwo.innerHTML += '<br>-----<br>'
                pTwo.innerHTML += 'Today maximum temperature: <strong>' + data.forecast.dailyHigh + ' ºC</strong>'
                pTwo.innerHTML += '<br>'
                pTwo.innerHTML += 'Today minimum temperature: <strong>' + data.forecast.dailyLow + ' ºC</strong>'
            }
        })
    })
})