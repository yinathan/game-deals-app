const $input = $('input')
const $button = $('button')

$button.on("click", () => {
  const gameName = $input.val()
  $.ajax(
    `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${gameName}`
    // `https://www.cheapshark.com/api/1.0/games?title=${gameName}&limit=20&exact=0`
  ).then((data) => {
    $(".results").empty()
    console.log(data);
    // let $img = $('<img id = "thumbnail">')
    // $img.attr('src',data[0].thumb)
    // $img.appendTo(".results")
    for (let i = 0; i < data.length; i++) {
      const $div = $("<div class = 'item flip-card'></div>");
      $(".results").append($div);
      const $divInner = $('<div class = "flip-card-inner"></div>');
      $div.append($divInner);
      // front side of card
      const $divFront = $("<div class = 'flip-card-front'></div>");
      $divFront.appendTo($divInner);
      let $gameName = data[i].title;
      // console.log($gameName)
      let $gameTitle = $(`<h2>${$gameName}</h2>`);
      $divFront.append($gameTitle);
      let $img = $(`<img id = "thumbnail">`);
      $img.attr("src", data[i].thumb);
      $divFront.append($img);
      // $(".results").append(`<div class = "item"></div>`);
const $divBack = $('<div class = "flip-card-back"></div>');
$divBack.appendTo($divInner);
      let $price = data[i].normalPrice;
      $divFront.append(
        `<h4><i class="fa-solid fa-dollar-sign"></i> Retail Price: ${$price}</h4>`
      );
      let $review = data[i].steamRatingText;
      $divFront.append(
        `<p></i> Steam Rating: ${$review}</p>`
      );
      //back side of card
      

      let $cheapestUrl = data[i].dealID
      $.ajax(
        `https://www.cheapshark.com/api/1.0/deals?id=${$cheapestUrl}`
      ).then((newData) => {
        $cheapStore = newData.cheaperStores[0]
        console.log($cheapStore)
        console.log(newData)
        let $salePrice = $cheapStore.salePrice
        let $storeID = $cheapStore.storeID
        $divBack.append(
          `<h4>Sale Price: ${$salePrice}</h4>`
        )
        $.ajax(`https://www.cheapshark.com/api/1.0/stores`
        ).then((storeData) => {
          for (let element of storeData) {
            console.log($storeID)
            if (element.storeID === $storeID) {
              let $storeName = element.storeName
              $divBack.prepend(`<h3>Store Name: ${$storeName}</h3>`)
              let $storeThumb = element.images.logo
              $divBack.append(
                `<img src = https://www.cheapshark.com/${element.images.logo}>`
              );
            } 
        
        }
          
        });




        //for(element of data) {
        //   if (data.storeID = storeID) then {
        //     data.store name
        //   }
        // }


      });
    }


  });


// $.ajax(`https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0
// `).then((data) => {
//     console.log(data)
// 
})