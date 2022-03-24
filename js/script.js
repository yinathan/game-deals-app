const $input = $('input')
const $button = $('button')


$.ajax(`https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0
`).then((data) => {
    console.log(data)
})