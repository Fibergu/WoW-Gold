var tailoringObliterum = function(){
	//retrieve data//
	var silkweaveAmount = document.getElementById('silkweave_amount').value;
	
	var silkweavePrice = document.getElementById('silkweave_price').value;
	
	var chaosCrystalPrice = document.getElementById('chaos_crystal_price').value;
	
	var obliterumPrice = document.getElementById('obliterum_price').value;
	
	//Craft info//
   var craftAmount = silkweaveAmount / 16;
   
   var chaosAmount = craftAmount * 0.14;
   
   var obliterumAsh = (craftAmount - chaosAmount) * 4;
   
   //cost//
   var silkweaveCost = silkweaveAmount * silkweavePrice;
   
   //value//
   var chaosCrystalValue = chaosAmount * chaosCrystalPrice;
   
   var obliterumValue = obliterumPrice * (obliterumAsh / 100);
   
   var totalValue = chaosCrystalValue + obliterumValue;
   
   //profit//
   var profit = totalValue - silkweaveCost;
   
   var percentage = (profit / silkweaveCost) * 100;
   
   //post data//
   var postCost = document.getElementById('cost').innerHTML=Math.round(silkweaveCost) + "g";
   
   var postCraft = document.getElementById('craft_amount').innerHTML=Math.round(craftAmount);
   
   var postObliterumAsh = document.getElementById('obliterum_amount').innerHTML=Math.round(obliterumAsh);
   
   var postChaosAmount = document.getElementById('chaos_amount').innerHTML=Math.round(chaosAmount);
   
   var postValue = document.getElementById('total_value').innerHTML=Math.round(totalValue) + "g";
   
   var postProfit = document.getElementById('profit').innerHTML=Math.round(profit) + "g";
   
   var postPercentage = document.getElementById('percentage').innerHTML=Math.round(percentage) + "%";
   
	
}