//TABS AND TAB CONTENT//


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}




//HEXWEAVE BAG FUNCTION//

                        //Hexweave bag total cost function//

var totalHexweavePrice = function() {
	
	//gets value from userinput//
	var fur=document.getElementById('fur').value;
	
	var material=document.getElementById('material').value;
	
	
	//calculating total price for bag//
	
	var spirit = material*5;
	
	var hexweave = (fur*10+spirit)/2;
	
	var hexweaveTotal = hexweave*100;
	
    //posts result//
	
	var hexweavePost=document.getElementById('total_hexcost').innerHTML="Total cost: " + hexweaveTotal +"g";
}

                         //how many bags x amount of mats equals//
				
var totalHexweaveAmount = function() {
	
	//gets value from userinput//
	var furAmount=document.getElementById('fur_amount').value;
	
	var materialAmount=document.getElementById('material_amount').value;
	
	
	
	//and if statement to make ratios correct//
	
	if(furAmount > materialAmount*2){
		furAmount = materialAmount*2;
	}
	
	else{
		materialAmount = furAmount/2;
	}

    //calculations//	
	var spiritAmount = materialAmount/5;
	
	var hexFur = furAmount/10;
	
	var hexweaveAmount = (hexFur + spiritAmount);
	
	var hexweaveBags = hexweaveAmount/100;
	
	//post result//
	var hexweaveAmountPost=document.getElementById('total_amount').innerHTML="You can craft " + hexweaveBags + " bags.";

	}

	
//CHOPPER FUNCTION//

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


//SKYGOLEM FUNCTION//

var skyGolem = function() {
	//user input values//
	
	var ghostIronBar = document.getElementById('ghost').value;
	
	var livingSteel = document.getElementById('livingsteel').value;
	
	var trilliumBar = document.getElementById('trillium').value;
	
	var spiritofHarmony = document.getElementById('spirit').value;
	
	//math variables//
	
	var livingSummary = (livingSteel * 30) + (ghostIronBar * 300);
	
	var trilliumSummary = (trilliumBar * 180) + (ghostIronBar * 300);
	
	var spiritSummary = (spiritofHarmony * 90) + (trilliumBar * 90) + (ghostIronBar * 300);
	
	var ghostSummary = (ghostIronBar * 1800) + (ghostIronBar * 300);
	
	var ghostspiritSummary = (ghostIronBar * 900) + (spiritofHarmony * 90) + (ghostIronBar *300);
	
	
	//STATEMENTS START HERE//
	
	//If transmutation Master is checked//
if(transmute_skygolem.checked) {
	ghostSummary = (ghostIronBar * 1440) + (ghostIronBar * 300);
	var ghostAmount = 1440;
	
	trilliumSummary = (trilliumBar * 144) + (ghostIronBar *300);
	var trilliumAmount = 144;
	
	spiritSummary = (spiritofHarmony * 72) + (trilliumBar * 72) + (ghostIronBar * 300);
	var spiritAmount = 72;
	
	ghostspiritSummary = (ghostIronBar * 720) + (spiritofHarmony * 72) + (ghostIronBar *300);
	var ghostspiritAmount = [720, 72];
	
	console.log("CHECKED")
}
  

  //If transmutation Master isn't checked//
else {
	ghostSummary = (ghostIronBar * 1800) + (ghostIronBar * 300);
	var ghostAmount = 1800;
	
	trilliumSummary = (trilliumBar * 180) + (ghostIronBar * 300);
	var trilliumAmount = 180;
	
	spiritSummary = (spiritofHarmony * 90) + (trilliumBar * 90) + (ghostIronBar * 300);
	var spiritAmount = 90;
	
	ghostspiritSummary = (ghostIronBar * 900) + (spiritofHarmony * 90) + (ghostIronBar *300);
	var ghostspiritAmount = [900, 90];
	console.log("NOT CHECKED")
}


//if ghostiron bar = 0 make everything 0//
if(ghostIronBar == 0) {
	livingSummary = 0;
	
	trilliumSummary = 0;
	
	spiritSummary = 0;
	
	ghostSummary = 0;
	
	ghostspiritSummary = 0;
	
    var postInfo=document.getElementById("describe_skygolem").style.visibility = "hidden";
}

else {
	var postInfo=document.getElementById("describe_skygolem").style.visibility = "visible";
}














 //if alchemy is unchecked only calculate livingSummary//
if(alchemy_skygolem.checked == false) {
	if(livingSteel == 0) {
		livingSummary = 0;
	
	trilliumSummary = 0;
	
	spiritSummary = 0;
	
	ghostSummary = 0;
	
	ghostspiritSummary = 0;
	
    var postInfo=document.getElementById('describe_skygolem').style.visibility = "hidden";
	console.log("Alchemy NOT CHECKED IF")
	}
	
	else if(ghostIronBar == 0) {
		livingSummary = 0;
	
	trilliumSummary = 0;
	
	spiritSummary = 0;
	
	ghostSummary = 0;
	
	ghostspiritSummary = 0;
	
    var postInfo=document.getElementById('describe_skygolem').style.visibility = "hidden";
	console.log("Alchemy NOT CHECKED IF")
	}
	
	
	else {
	livingSummary = (livingSteel * 30) + (ghostIronBar * 300);
	
	trilliumSummary = 99999999999999999999999999999999999999999999999999;
	
	spiritSummary = 9999999999999999999999999999999999999999999999999999;
	
	ghostSummary = 99999999999999999999999999999999999999999999999999999;
	
	ghostspiritSummary = 99999999999999999999999999999999999999999999999;
	var postInfo=document.getElementById("describe_skygolem").style.visibility = "visible";
	console.log("Alchemy NOT CHECKED else")
}
}

else {
	console.log("Alchemy CHECKED")
}


//If use haven't specified a price for a certain bar//

     //if trillium Bar input = 0 make trillium HUGE//
if(trilliumBar == 0) {
	trilliumSummary = 999999999999999999999999999999999999999999999;
	spiritSummary = 99999999999999999999999999999999999999999999999;
}

else {
	
}

     //if livingsteel = 0 make livingsteel HUGE//
if(livingSteel == 0) {
	livingSummary = 999999999999999999999999999999999999999999999999;
}

else {
	
}

    //if spirit of harmony = 0 make spirit and ghostspirit HUGE//
if(spiritofHarmony == 0) {
	spiritSummary = 9999999999999999999999999999999999999999999999999;
	ghostspiritSummary = 9999999999999999999999999999999999999999999999999999;
}

else {
	
}



//all the if/else to see what's the cheapest//
    if(livingSummary < trilliumSummary) {
		if(livingSummary < spiritSummary) {
			if(livingSummary < ghostSummary) {
				if(livingSummary < ghostspiritSummary) {
					
	                var livingPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + livingSummary + "g";
	                var livingShopping = document.getElementById('describe_skygolem').innerHTML="You should buy 30 Living Steel and 300 Ghost Iron Bars!";
		            console.log(livingSummary, trilliumSummary, ghostSummary, spiritSummary, ghostspiritSummary)
                }	        
	            else {
		             var ghostspiritPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostspiritSummary + "g";
		             var ghostspiritShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostspiritAmount[0] + " Ghost Iron Bar and " + ghostspiritAmount[1] + " Spirit of Harmony and 300 Ghost Iron bar.";
	            }
			}
            else if(ghostSummary < ghostspiritSummary) {
				var ghostPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostSummary + "g";
		        var ghostShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostAmount + " Iron Bars for transmutes and 300 Ghost Iron Bars for daily cooldowns!";
			}			
			
            else {
				var ghostspiritPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostspiritSummary + "g";
		        var ghostspiritShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostspiritAmount[0] + " Ghost Iron Bar and " + ghostspiritAmount[1] + " Spirit of Harmony and 300x Ghost Iron bar.";
			}
		}			
	
	    else if(spiritSummary < ghostSummary){
			
		    if(spiritSummary < ghostspiritSummary) {
				var spiritPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + spiritSummary + "g";
		        var spiritShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + spiritAmount + " Spirit of Harmony and " + spiritAmount + " Trillium Bars and Ghost Iron Bars!";
			}
		
		    else {
				var ghostspiritPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostspiritSummary + "g";
		        var ghostspiritShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostspiritAmount[0] + " Ghost Iron Bar and " + ghostspiritAmount[1] + " Spirit of Harmony and 300x Ghost Iron bar.";
			}
		}
	
	    else {
			var ghostPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostSummary + "g";
		    var ghostShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostAmount + " Ghost Iron Bars and 300x Ghost Iron Bars!";
		}
	}
	
	else if(trilliumSummary < spiritSummary) {
		if(trilliumSummary < ghostSummary) {
			if(trilliumSummary < ghostspiritSummary) {
				var trilliumPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + trilliumSummary + "g";
		        var trilliumShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + trilliumAmount + " Trillium Bars and 300 Ghost Iron Bars!";     
			}
			
			else {
				var ghostspiritPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostspiritSummary + "g";
		        var ghostspiritShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostspiritAmount[0] + " Ghost Iron Bar and " + ghostspiritAmount[1] + " Spirit of Harmony and 300 Ghost Iron bar.";
			}
		}
		else if(ghostSummary < ghostspiritSummary) {
			var ghostPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostSummary + "g";
		    var ghostShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostAmount + " Ghost Iron Bars and 300 Ghost Iron Bars!";
		}	
		
		else {
			var ghostspiritPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostspiritSummary + "g";
		    var ghostspiritShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostspiritAmount[0] + " Ghost Iron Bar and " + ghostspiritAmount[1] +  " Spirit of Harmony and 300 Ghost Iron bar.";
		}
		}
	
	else if(spiritSummary < ghostSummary) {
		if(spiritSummary < ghostspiritSummary) {
			var spiritPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + spiritSummary + "g";
		    var spiritShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + spiritAmount + " Spirit of Harmony and " + spiritAmount + " Trillium Bars and 300 Ghost Iron Bars!";
		}
		
		else {
			var ghostPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostSummary + "g";
		    var ghostShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostAmount + " Ghost Iron Bars and 300 Ghost Iron Bars!";
		}
	}
	
	else if(ghostSummary < ghostspiritSummary){
		var ghostPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostSummary + "g";
		var ghostShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostAmount + " Ghost Iron Bars and 300 Ghost Iron Bars!";
	}
	
	else {
		var ghostspiritPost = document.getElementById('total_skygolem').innerHTML="Total cost: " + ghostspiritSummary + "g";
		var ghostspiritShopping = document.getElementById('describe_skygolem').innerHTML="You should buy " + ghostspiritAmount[0] + " Ghost Iron Bar and " + ghostspiritAmount[1] + " Spirit of Harmony and 300 Ghost Iron bar.";
	}
}

	
	
	
	
	

	


