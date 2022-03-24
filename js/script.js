const $input = $('input')
const $button = $('button')

$button.on("click", () => {
  const gameName = $input.val()
  $.ajax(
    `https://www.cheapshark.com/api/1.0/games?title=${gameName}&limit=20&exact=0`
  ).then((data) => {
    console.log(data);
    // let $img = $('<img id = "thumbnail">')
    // $img.attr('src',data[0].thumb)
    // $img.appendTo(".results")
    for (let i = 0; i <= data.length; i++) {
        $(".results").append(`<div class = ${i}></div>`)
        let $img = $(`<img id = "thumbnail${i}">`)
        $img.attr('src',data[i].thumb)
        $img.appendTo(`.${i}`)
        
    }


  });
});

// $.ajax(`https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0
// `).then((data) => {
//     console.log(data)
// })

