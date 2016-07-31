
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

	//Math variables//
	
	
	//Titansteelbar variable//
	var titansteelSummary = (titansteelBar * 12) + (cobaltBolts * 40) + (arcticFur * 2) 
	+ (8000 + 3000 + 1500);
	
	var titansteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary;
	
	
	//Saronite variable//
	var saroniteSummary = (saroniteBar * 288) + (eternalFire * 12) + (eternalEarth * 12)
		+ (eternalShadow * 12) + (cobaltBolts * 40) + (arcticFur * 2) + (8000 + 3000 + 1500);
	
	var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary;
	
	
	
	//Titaniumbar variable//
	var titaniumSummary = (titaniumBar * 36) + (eternalFire * 12) + (eternalEarth * 12)
		+ (eternalShadow * 12) + (cobaltBolts * 40) + (arcticFur * 2) + (8000 + 3000 + 1500);
		
	var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary;
	
	
	
	//STATEMENTS START HERE//
 
if(titaniumBar == 0){
		if(saroniteBar == 0) {		    
			var titansteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary;
			var titansteelShopping=document.getElementById('describe').innerHTML="You should buy\
	Titansteel Bars, Handful of Cobalt Bolts and Arctic Fur!";
	console.log(titansteelSummary + "null titansteel")
	console.log(titansteelBar)
		}
		
		else if(titansteelBar == 0){
			var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary;
			var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	Saronite Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(saroniteSummary)
	console.log(titansteelBar)
        }
        else if((saroniteBar *288) + (eternalFire * 12) + (eternalEarth * 12) + (eternalShadow * 12)
	< titansteelBar * 12){		
		var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary;
		var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	Saronite Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(saroniteSummary + "null saronite")
	console.log(titansteelBar)
		}
		
		else {			
			var titansteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary;
			var titansteelShopping=document.getElementById('describe').innerHTML="You should buy\
	Titansteel Bars, Handful of Cobalt Bolts and Arctic Fur!";
	console.log(titansteelSummary + "null titansteel")
	console.log(titansteelBar)
		}
	}
	
else if(titansteelBar == 0) {
		if(saroniteBar == 0){
			var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary;
			var titaniumShopping=document.getElementById('describe').innerHTML="You should buy\
	Titanium Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(titaniumSummary)
	console.log(titansteelBar)
		}
		
		
 		else if(saroniteBar * 288 < titaniumBar * 36){			
		    var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary;
			var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	Saronite Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(saroniteSummary)
	console.log(titansteelBar)
		}
        
        else{			
			var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary;
			var titaniumShopping=document.getElementById('describe').innerHTML="You should buy\
	Titanium Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(titaniumSummary)
	console.log(titansteelBar)
		}		
	}
else if(saroniteBar == 0){					
	    if((titaniumBar * 36) + (eternalFire * 12) + (eternalEarth * 12)
		+ (eternalShadow * 12) < titansteelBar * 12){
			var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary;
			var titaniumShopping=document.getElementById('describe').innerHTML="You should buy\
	Titanium Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(titaniumSummary)
	console.log(titansteelBar)
		}
	    else{
			var titasteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary;
		    var titansteelShopping=document.getElementById('describe').innerHTML="You should buy\
	Titansteel Bars, Handful of Cobalt Bolts and Arctic Fur!";
	console.log(titansteelSummary)
	console.log(titansteelBar)
		}
}	



else{
		/*checks if titanium bars are cheaper then titansteelbars and if they are it checks if
saronite bars are cheaper then  titanium bars */


    if((titaniumBar *36) + (eternalFire * 12) + (eternalEarth * 12) + (eternalShadow * 12)
	 < titansteelBar * 12) {
		if(saroniteBar * 288 < titaniumBar *36){			
		    var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary;
			var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	Saronite Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(saroniteSummary)
	console.log(titansteelBar)
		}
	
		else {	    
		    var titaniumPost=document.getElementById('total').innerHTML="Total cost: " + titaniumSummary;;
			var titaniumShopping=document.getElementById('describe').innerHTML="You should buy\
	Titanium Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(titaniumSummary)
	console.log(titansteelBar)
	}
	}
	
	
	//checks if saronite bars are cheaper then titansteelbars //
	
	else if((saroniteBar *288) + (eternalFire * 12) + (eternalEarth * 12) + (eternalShadow * 12)
    < titansteelBar * 12){
		var saronitePost=document.getElementById('total').innerHTML="Total cost: " + saroniteSummary;
		var saroniteShopping=document.getElementById('describe').innerHTML="You should buy\
	Saronite Bars, Eternal Fire, Eternal Earth, Eternal Shadow, Handful of Cobalt Bolts\
	and Arctic Fur!";
	console.log(saroniteSummary)
	console.log(titansteelBar)
	}
	else {
		var titasteelPost=document.getElementById('total').innerHTML="Total cost: " + titansteelSummary;
		var titansteelShopping=document.getElementById('describe').innerHTML="You should buy\
	Titansteel Bars, Handful of Cobalt Bolts and Arctic Fur!";
	console.log(titansteelSummary)
	console.log(titansteelBar)
    }
}
}


