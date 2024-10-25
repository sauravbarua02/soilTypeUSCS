/*
According to USCS, Clay <0.002 mm, silt 0.002-0.075 mm, 
fine sand 0.075-0.42 mm, medium sand 0.42-2.0 mm, coarse sand 2.0-4.75 mm, 
gravel 4.75-75 mm and boulder > 75mm.
*/


const calcy = () =>{
  let size = document.getElementById('size').value;
  let soilTypes = "";


  let particleSize = parseFloat(size);
  
 

  if(particleSize < 0.002){
    soilTypes = 'Clay';
  }else if(particleSize < 0.075  && particleSize >= 0.002){
    soilTypes = 'Silt';
  }else if(particleSize < 0.42  && particleSize >= 0.075){
    soilTypes = 'Fine Sand';
  }
  else if(particleSize < 2.0  && particleSize >= 0.42){
    soilTypes = 'Medium Sand';
  }  else if(particleSize < 4.75  && particleSize >= 2.0){
    soilTypes = 'Coarse Sand';
  }  else if(particleSize < 75  && particleSize >= 4.75){
    soilTypes = 'Gravel';
  }else{
    soilTypes = 'Boulder';
  }


document.getElementById('showData').innerHTML = `The soil sample is ${soilTypes}`
  
}