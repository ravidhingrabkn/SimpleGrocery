window.onload = function(){
    var form = document.getElementById("shippingForm");
    var thanks = document.getElementById("thanks_msg"); 
    var cart = document.getElementById("cart"); 
    var list = document.getElementById("mylist");
    // var eggname = document.getElementById("egg"); 
    var coldmsg = document.getElementById("colddrinkmsg"); 
    var eggmsg = document.getElementById("eggmsg");    
    var milkmsg = document.getElementById("milkmsg"); 
    var yogurtmsg = document.getElementById("yogurtmsg");
    var bagelmsg = document.getElementById("bagelmsg");
    var potatomsg = document.getElementById("potatomsg");
    var cookiemsg = document.getElementById("cookiemsg");
    var fruitmsg = document.getElementById("fruitmsg");
    var chickenmsg = document.getElementById("chickenmsg");
    var steakmsg = document.getElementById("steakmsg");

    var eggerr  = document.getElementById("eggErr"); 
    var milkerr  = document.getElementById("milkErr"); 
    var colderr  = document.getElementById("coldErr"); 
    var yogurterr  = document.getElementById("yogurtErr"); 
    var bagelerr  = document.getElementById("bagelErr"); 
    var potatoerr  = document.getElementById("potatoErr"); 
    var cookieerr  = document.getElementById("cookieErr"); 
    var fruiterr  = document.getElementById("fruitErr"); 
    var chickenerr  = document.getElementById("chickenErr"); 
    var steakerr  = document.getElementById("steakErr"); 

    var formHandle = document.forms.form_ship;	

    function myform(){
        var eggqty = formHandle.egg;
        var coldqty = formHandle.colddrink;
        var milkqty = formHandle.milk;
        var yogurtqty = formHandle.yogurt;
        var bagelqty = formHandle.bagels;
        var potatoqty = formHandle.potatoes;
        var cookieqty = formHandle.cookies;
        var fruitqty = formHandle.fruits;
        var chickenqty = formHandle.chicken;
        var steakqty = formHandle.steak;

        var needegg = 24 - eggqty.value;
        var needcold = 24 - coldqty.value; 
        var needmilk = 15 - milkqty.value;
        var needyogurt = 20 - yogurtqty.value;
        var needbagel = 12 - bagelqty.value;
        var needpotato = 5 - potatoqty.value;
        var needcookie = 6 - cookieqty.value;
        var needfruit = 5 - fruitqty.value;
        var needchicken = 5 - chickenqty.value;
        var needsteak = 5 - steakqty.value;

        if(coldqty.value === "" || coldqty.value >  24){
            colderr.style.display= "inline";
            colderr.style.color = "white";
            colderr.innerHTML = "Please enter your Qty";
            colderr.style.background = "red";
			coldqty.focus();
			return false;
		}
        if(eggqty.value === "" || eggqty.value > 24){
            eggerr.style.display= "inline";
            eggerr.style.color = "white";
            eggerr.innerHTML = "Please enter your Qty";
            eggerr.style.background = "red";
			eggqty.focus();
			return false;
		}
        if(milkqty.value === "" || milkqty.value > 15){
            milkerr.style.display= "inline";
            milkerr.style.color = "white";
            milkerr.innerHTML = "Please enter your Qty";
            milkerr.style.background = "red";
			milkqty.focus();
			return false;
		}
        if(yogurtqty.value === "" || yogurtqty.value > 20){
            yogurterr.style.display= "inline";
            yogurterr.style.color = "white";
            yogurterr.innerHTML = "Please enter your Qty";
            yogurterr.style.background = "red";
			yogurtqty.focus();
			return false;
		}
        if(bagelqty.value === "" || bagelqty.value > 12){
            bagelerr.style.display= "inline";
            bagelerr.style.color = "white";
            bagelerr.innerHTML = "Please enter your Qty";
            bagelerr.style.background = "red";
			bagelqty.focus();
			return false;
		}
        if(potatoqty.value === "" || potatoqty.value > 5){
            potatoerr.style.display= "inline";
            potatoerr.style.color = "white";
            potatoerr.innerHTML = "Please enter your Qty";
            potatoerr.style.background = "red";
			potatoqty.focus();
			return false;
		}
        if(cookieqty.value === "" || cookieqty.value > 6){
            cookieerr.style.display= "inline";
            cookieerr.style.color = "white";
            cookieerr.innerHTML = "Please enter your Qty";
            cookieerr.style.background = "red";
			cookieqty.focus();
			return false;
		}
        if(fruitqty.value === "" || fruitqty.value > 6){
            fruiterr.style.display= "inline";
            fruiterr.style.color = "white";
            fruiterr.innerHTML = "Please enter your Qty";
            fruiterr.style.background = "red";
			fruitqty.focus();
			return false;
		}
        if(chickenqty.value === "" || chickenqty.value > 5){
            chickenerr.style.display= "inline";
            chickenerr.style.color = "white";
            chickenerr.innerHTML = "Please enter your Qty";
            chickenerr.style.background = "red";
			chickenqty.focus();
			return false;
		}
        if(steakqty.value === "" || steakqty.value > 2){
            steakerr.style.display= "inline";
            steakerr.style.color = "white";
            steakerr.innerHTML = "Please enter your Qty";
            steakerr.style.background = "red";
			steakqty.focus();
			return false;
		}
        

        form.style.display = "none";
        cart.style.display = "none";
        thanks.style.display = "block";	
        list.style.display = "block";	

        coldmsg.innerHTML = needcold;
        eggmsg.innerHTML = needegg;
        milkmsg.innerHTML = needmilk+" bags";        
        yogurtmsg.innerHTML = needyogurt;
        bagelmsg.innerHTML = needbagel;
        potatomsg.innerHTML = needpotato+" lbs";
        cookiemsg.innerHTML = needcookie+" packets"; 
        fruitmsg.innerHTML = needfruit+" lbs";   
        chickenmsg.innerHTML = needchicken+" lbs";
        steakmsg.innerHTML = needsteak+" lbs";
        
        return false;
    }
    formHandle.onsubmit = myform;
}