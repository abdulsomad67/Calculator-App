var equal_display = document.querySelectorAll(".previous_display")[0];
var current_display = document.querySelectorAll(".current_display")[0];
var expo = "";

var numberButton = document.querySelectorAll(".number");
for(let i = 0; i<numberButton.length;i++){
    document.querySelectorAll(".number")[i].addEventListener("click",function(){
        var numberbtn = this.textContent;
        console.log(numberbtn)
        var numberClick = parseFloat(numberbtn);
        expo += numberClick;
        current_display.value = expo;
        numberCollection(numberClick);
        animination(numberbtn);
      });

}
var operatorButton = document.querySelectorAll(".operator");
for(let i= 0;i< operatorButton.length;i++){
    document.querySelectorAll(".operator")[i].addEventListener("click",function(){
        var operatorClick = this.textContent;
        expo += operatorClick;
        current_display.value = expo;
        animination(operatorClick);
        
})}
document.querySelectorAll(".equal-sign")[0].addEventListener("click",function(){
    var equal = this.textContent;
    var viewEqual = eval(expo);
    equal_display.value = viewEqual;
    animination(equal);
});
document.querySelectorAll(".all-clear")[0].addEventListener("click",function(){
    var all_clear = this.textContent;
    expo ="";
    current_display.value = expo;
    equal_display.value = expo;
    equal_display.value ="0";
    animination(all_clear);

});
document.querySelectorAll(".delete")[0].addEventListener("click",function(){
    var delete_button = this.textContent;
    expo = expo.slice(0,-1);
    current_display.value = expo;
    animination(delete_button);

})
document.addEventListener("keydown",function(event){
    animination(event.key);
    numberCollection(event.key);
})

function numberCollection(key){
    switch(key){
        case "0":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;

        case "00":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "1":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "2":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "3":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "4":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "5":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "6":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "7":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "8":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "9":
            if(expo.length === 20){
                return expo;
            };
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "+":
          
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "*":
        
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "-":
        
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case "/":
       
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;
        
        case ".":
           
        var numberToDisplay = key;
        current_display.value = expo += numberToDisplay;
        break;

        case "=":
        var viewEqual = eval(expo);
        equal_display.value = viewEqual;
        break;

        case "AC":
        expo ="";
        current_display.value= expo;
        equal_display.value= expo;
        equal_display.value="0";
        break;

        case "DEL":
        expo = expo.slice(0,-1);
        current_display.value = expo;

    }
}

function animination(key){
    var time ="";
    switch(key){
        case "AC":
            time = "clear-all";
            keyActive=time;
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");

            setTimeout(function(){
                activeBtn.classList.remove("pressed");
                },200);
             break;

        case "DEL":
            time = "delete";
            keyActive = time;
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");

            setTimeout(function(){
                activeBtn.classList.remove("pressed");
                },200);
            break;        

        case "/":
            time = "divide";
            keyActive = time;
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");


            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;
        case "%":
            time = "percent";
            keyActive = time;
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");


            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "00":
            time = "zero_zero";
            keyActive = time;
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");


            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "8":
            time = "eight";
            keyActive = time;
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed"); 


            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "9":
            time = "nine";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "4":
            time = "four";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "5":
            time = "five";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "6":
            time = "six";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "1":
            time = "one";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "2":
            time = "two";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "3":
            time = "three";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case ".":
            time = "dot";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "0":
            time = "zero";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            break;

        case "=":
            time = "equal-sign";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "*":
            time = "times";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "+":
            time = "plus";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;

        case "-":
            time = "minus";
            keyActive = "time";
            var activeBtn = document.querySelector("."+time);
            activeBtn.classList.add("pressed");
            
            
            setTimeout(function(){
                activeBtn.classList.remove("pressed");
            },200);
            break;


    default:
        break;
    }
   
}