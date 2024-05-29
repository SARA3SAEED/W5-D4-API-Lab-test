 let url = "https://fakestoreapi.com/products";


 
 async function DataFetch(){
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(response);
        console.log(data);



        
        for (let i = 0; i < data.length; i++) {
             
            
            let Chacters = document.querySelector(".Chacters");
            let div1 = document.createElement("div");
            let ChacterName = document.createElement("h4");
            let ChacterPrice = document.createElement("p");
            let characterimg = document.createElement("img");
   
            console.log(Chacters);
        
           ChacterName.innerHTML = data[i].category;
           ChacterPrice.innerHTML = data[i].price;
           characterimg.src = data[i].image;
           Chacters.append(div1);
           div1.append(ChacterName);
           div1.append(ChacterPrice);
           div1.append(characterimg);
           }

  
       }



       catch(error){
           console.log(error);
       }};
   
    


    DataFetch();