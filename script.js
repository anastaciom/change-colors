let colors =['green','red', 'purple', 'gray', 'black', 'orange','Yellow', 'Gold','Blue','Lime','Pink','Brown', 'Salmon','Coral','Cyan','Violet', 'white']


//button to change the background color

document.querySelector('.botaoBC').addEventListener('click', ()=>{

    let randomNumber = Math.floor(Math.random() * colors.length )
   document.body.style.backgroundColor = `${colors[randomNumber]}`;
   
    document.querySelector('.colorNameBC').innerHTML = `<div>Background: ${colors[randomNumber].toUpperCase()}</div>`

});

//-----------------------------------------------------------------------------

//button to change the color of the letter
document.querySelector('.botaoLC').addEventListener('click', ()=>{
   
    let randomNumber = Math.floor(Math.random() * colors.length )
    document.querySelector('.textBox').style.color =`${colors[randomNumber]}`
    document.querySelector('.colorNameLC').innerHTML = `<div>Letter Color: ${colors[randomNumber].toUpperCase()}</div>`

});


