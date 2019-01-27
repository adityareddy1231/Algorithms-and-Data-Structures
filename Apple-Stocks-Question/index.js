var prices = [7, 1, 5, 3, 6, 4, 20, 11, 2, 6, 7, 19, 21];

function highestProfit(prices){
  var minPrice = 99999999999;
  var maxProfit = 0;
  for ( var i = 0; i < prices.length; i++){
    if(prices[i] < minPrice){
      minPrice = prices[i];
    }
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  console.log(maxProfit);
}

highestProfit(prices);
