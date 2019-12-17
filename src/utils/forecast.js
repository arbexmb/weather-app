const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const tokenDarksky = '469104c8830619f351703f067391c96c'
    const url = 'https://api.darksky.net/forecast/' + tokenDarksky + '/' + latitude + ',' + longitude + '?exclude=minutely&units=si'

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            console.log()
            const data = {
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability * 100,
                dailyHigh: body.daily.data[0].temperatureHigh,
                dailyLow: body.daily.data[0].temperatureLow
            }
            callback(undefined, data)
        }
    })
}

module.exports = forecast