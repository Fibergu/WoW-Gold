
//Function that determines the cost of a chopper and what materials are the cheapest.//

var totalPrice = function() {
	
	//gets values from userinput//
	
	var titansteelBar=document.getElementById('titansteel').value;
	
	var titaniumBar=document.getElementById('titanium').value;
   
        var saroniteBar=document.getElementById('saronite').value;

	var eternalFire=document.getElementById('fire').value;

        var eternalEarth=document.getElementById('earth').value;

        var eternalShadow=document.getElementById('shadow').value;

        var cobaltBolts=document.getElementById('bolts').value;

	var arcticFur=document.getElementById('arctic').value;
    
	//Transmute//
	
	var transmute = document.getElementById('transmute');
	
	//Math variables//
	
	
	//Titansteelbar variable//
	var titansteelSummary = (titansteelBar * 12) + (cobaltBolts * 40) + (arcticFur * 2) 
	+ (8000 + 3000 + 1500);
	
	var titansteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary + "g";
	
	
	//Saronite variable//
	var saroniteSummary = (saroniteBar * 288) + (eternalFire * 12) + (eternalEarth * 12)
		+ (eternalShadow * 12) + (cobaltBolts * 40) + (arcticFur * 2) + (8000 + 3000 + 1500);
	
	var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary + "g";
	
	
	
	//Titaniumbar variable//
	var titaniumSummary = (titaniumBar * 36) + (eternalFire * 12) + (eternalEarth * 12)
		+ (eternalShadow * 12) + (cobaltBolts * 40) + (arcticFur * 2) + (8000 + 3000 + 1500);
		
	var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary + "g";
	
	
	
	//STATEMENTS START HERE//
 

if(transmute.checked) {
	saroniteSummary = (saroniteBar * 230.4) + (eternalFire * 12) + (eternalEarth * 12)
		+ (eternalShadow * 12) + (cobaltBolts * 40) + (arcticFur * 2) + (8000 + 3000 + 1500);
		console.log(saroniteSummary  + "CHECKED")
	var saroniteAmount = 230;	
}
 
 else {
	 saroniteSummary = (saroniteBar * 288) + (eternalFire * 12) + (eternalEarth * 12)
		+ (eternalShadow * 12) + (cobaltBolts * 40) + (arcticFur * 2) + (8000 + 3000 + 1500);
		console.log(saroniteSummary + "NOT CHECKED")
    var saroniteAmount = 288;
 }
 
 if(saroniteBar + titaniumBar + titansteelBar == 0) {
	 var hidePost=document.getElementById('describe').style.visibility = "hidden";
	 var hideTotal=document.getElementById('total').style.visibility = "hidden";
 }
 
 else{
 var hidePost=document.getElementById('describe').style.visibility = "visible";
 var hideTotal=document.getElementById('total').style.visibility = "visible";
 
 
 }
 
if(titaniumBar == 0){
		if(saroniteBar == 0) {		    
			var titansteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary + "g";
			var titansteelShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>12 Titansteel Bars</b>, <b>40 Handful of Cobalt Bolts</b> and <b>2 Arctic Fur!</b>";
	console.log(titansteelSummary + "null titansteel")
	console.log(titansteelBar)
		}
		
		else if(titansteelBar == 0){
			var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary + "g";
			var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>" + saroniteAmount + " " + "Saronite Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b>12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts\
	and <b>2 Arctic Fur!</b>";
	console.log(saroniteSummary)
	console.log(titansteelBar)
        }
        else if(saroniteSummary	< titansteelSummary){		
		var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary + "g";
		var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>" + saroniteAmount + " " + "Saronite Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b>12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts</b>\
	and <b>2 Arctic Fur</b>!";
	console.log(saroniteSummary + "null saronite")
	console.log(titansteelBar)
		}
		
		else {			
			var titansteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary + "g";
			var titansteelShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>12 Titansteel Bars</b>, <b>40 Handful of Cobalt Bolts</b> and <b>2 Arctic Fur!</b>";
	console.log(titansteelSummary + "null titansteel")
	console.log(titansteelBar)
		}
	}
	
else if(titansteelBar == 0) {
		if(saroniteBar == 0){
			var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary + "g";
			var titaniumShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>36 Titanium Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b>12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts</b>\
	and <b>2 Arctic Fur!</b>";
	console.log(titaniumSummary)
	console.log(titansteelBar)
		}
		
		
 		else if(saroniteSummary < titaniumSummary){			
		    var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary + "g";
			var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>" + saroniteAmount + " " + "Saronite Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b>12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts</b>\
	and <b>2 Arctic Fur!</b>";
	console.log(saroniteSummary)
	console.log(titansteelBar)
		}
        
        else{			
			var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary + "g";
			var titaniumShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>36 Titanium Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b>12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts</b>\
	and <b>2 Arctic Fur!</b>";
	console.log(titaniumSummary)
	console.log(titansteelBar)
		}		
	}
else if(saroniteBar == 0){					
	    if(titaniumSummary < titansteelSummary){
			var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary + "g";
			var titaniumShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>36 Titanium Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b>12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts</b>\
	and <b>2 Arctic Fur!</b>";
	console.log(titaniumSummary)
	console.log(titansteelBar)
		}
	    else{
			var titasteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary + "g";
		    var titansteelShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>12 Titansteel Bars</b>, <b>40 Handful of Cobalt Bolts</b> and <b>2 Arctic Fur!</b>";
	console.log(titansteelSummary)
	console.log(titansteelBar)
		}
}	



else{
		/*checks if titanium bars are cheaper then titansteelbars and if they are it checks if
saronite bars are cheaper then  titanium bars */


    if(titaniumSummary < titansteelSummary) {
		if(saroniteSummary < titaniumSummary){			
		    var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary + "g";
			var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>" + saroniteAmount + " " + "Saronite Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b>12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts</b>\
	and <b>2 Arctic Fur!</b>";
	console.log(saroniteSummary)
	console.log(titansteelBar)
		}
	
		else {	    
		    var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary + "g";
			var titaniumShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>36 Titanium Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b>12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts</b>\
	and <b>2 Arctic Fur!</b>";
	console.log(titaniumSummary)
	console.log(titansteelBar)
	}
	}
	
	
	//checks if saronite bars are cheaper then titansteelbars //
	
	else if(saroniteSummary < titansteelSummary){
		var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary + "g";
		var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>" + saroniteAmount + " " + "Saronite Bars</b>, <b>12 Eternal Fire</b>, <b>12 Eternal Earth</b>, <b> 12 Eternal Shadow</b>, <b>40 Handful of Cobalt Bolts</b>\
	and <b>2 Arctic Fur!</b>";
	console.log(saroniteSummary)
	console.log(titansteelBar)
	}
	else {
		var titasteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary + "g";
		var titansteelShopping=document.getElementById('describe').innerHTML="You should buy\
	<b>12 Titansteel Bars</b>, <b>40 Handful of Cobalt Bolts</b> and <b>2 Arctic Fur!</b>";
	console.log(titansteelSummary)
	console.log(titansteelBar)
    }
}
}



