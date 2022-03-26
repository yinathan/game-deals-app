const $input = $('input')
const $button = $('button')

$button.on("click", () => {
  const gameName = $input.val()
  $.ajax(
    `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${gameName}`
    // `https://www.cheapshark.com/api/1.0/games?title=${gameName}&limit=20&exact=0`
  ).then((data) => {
    console.log(data);
    // let $img = $('<img id = "thumbnail">')
    // $img.attr('src',data[0].thumb)
    // $img.appendTo(".results")
    for (let i = 0; i < data.length; i++) {
        const $div = $("<div class = 'item flip-card'></div>")
        $(".results").append($div)
        const $divInner = $('<div class = "flip-card-inner"></div>')
        $div.append($divInner)
        // front side of card
        const $divFront = $("<div class = 'flip-card-front'></div>")
        $divFront.appendTo($divInner)
        let $gameName = data[i].title;
        // console.log($gameName)
        let $gameTitle = $(`<h2>${$gameName}</h2>`)
        $divFront.append($gameTitle)
        let $img = $(`<img id = "thumbnail">`)
        $img.attr('src',data[i].thumb)
        $divFront.append($img)
        // $(".results").append(`<div class = "item"></div>`);
        //back side of card
        const $divBack = $('<div class = "flip-card-back"></div>') 
        $divBack.appendTo($divInner)
        let $price = data[i].normalPrice
        $divBack.append(
          `<h4><i class="fa-solid fa-dollar-sign"></i> Retail Price: ${$price}</h4>`
        );
        let $review = data[i].steamRatingText
        $divBack.append(
          `<p><i class="fa-solid fa-star-sharp"></i> Steam Rating: ${$review}</p>`
        );
        
    }


  });
});

// $.ajax(`https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0
// `).then((data) => {
//     console.log(data)
// })

