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
        const $div = $("<div></div>")
        $div.attr('class', 'item')
        let $gameName = data[i].external;
        $div.html(`${data[i].external}`);
        let $img = $(`<img id = "thumbnail${i}">`)
        $img.attr('src',data[i].thumb)
        $img.appendTo($div)
        // $(".results").append(`<div class = "item"></div>`);
        $(".results").append($div)
        
    }


  });
});

// $.ajax(`https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0
// `).then((data) => {
//     console.log(data)
// })

