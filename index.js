function Dice(){
    const  textbox=document.getElementById("textbox").value;
    const result=document.getElementById("result");
    const images=document.getElementById("images");
    const values=[];
    const img=[];
  
    for(let i=0;i<textbox;i++){
         const value= Math.floor(Math.random() * 6)+1;
        
          values.push(value);
          img.push(`<img src="images/${value}.png">`)

    }  console.log( values);
    result.textContent=`Dice : ${values}`;
    images.innerHTML=img;
}