

const output = document.querySelector('.output');

// Instantiate variables classic, trending and warm 
const classic = "Black and White";
const trending = "Pastels";
const warm = "Orange and Peach";

// Create function colorScheme 
const colorScheme = function(color){
  
  // Enter if-else statement 
  if (color === warm ){ 
      color = "Orange and Peach are such a good color scheme for a warm mood";
  
      } else if ( color === trending){
        color = "Pastels are the hottest colors on the market"; 
    }else{
    color ="Black and White are the ultimate classics";
    }

  return color; 
}

let colorChosen = prompt(`Select a specific number for a particular color scheme:
   1: Warm
   2: Trending 
   3: Any number: Classic`)
   
   let schemeChosen;
   
    if (colorChosen === "1"){
     schemeChosen = colorScheme(warm) 
    }else if (colorChosen === "2") {
     schemeChosen = colorScheme(trending)
      
    } else {
      schemeChosen = colorScheme(classic)
    }

    console.log(schemeChosen)
    
    output.innerHTML = schemeChosen;
    
    
    
