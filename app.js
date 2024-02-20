async function getProducts(id){
    let response = fetch('https://fakestoreapi.com/products/'+id)
    .then(res=>res.json())
    return response;
}




async function main(){
    for(let i=1;i<=12;i++){

        let products = await getProducts(i);
        console.log(products);


        
        // creation d'elements
        let productDiv=document.createElement("div");
        let productDiv2=document.createElement("div");
        let productImg=document.createElement("img");
        let productCat=document.createElement("p");
        let productPrice=document.createElement("p");
        let productTitle=document.createElement("p");
        let productDes=document.createElement("p");
        let line =document.createElement("hr");
        let etoile=document.createElement("img");
        let chariot=document.createElement("img");
        let containerCat=document.createElement("div");
        let containerPrice=document.createElement("div");
        
        // nhottou les element fi div2
       
        productDiv2.appendChild(productTitle);
        productDiv2.appendChild(line);
        productDiv2.appendChild(containerPrice);
        

        // div2 w l'image hattinehom fl Div lekbira
        containerCat.appendChild(productCat);
        containerCat.appendChild(chariot);

        containerPrice.appendChild(productPrice);
        containerPrice.appendChild(etoile);
    
        productDiv.appendChild(containerCat);
        productDiv.appendChild(productImg);
        productDiv.appendChild(productDiv2);


        // n3abou fl information mta3 les elements
        productCat.innerHTML=products.category;
        productTitle.innerHTML=products.title;
        productPrice.innerHTML=" $"+products.price;
        productImg.setAttribute("src",products.image);
        etoile.setAttribute("src","https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png ");
        chariot.setAttribute("src","https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png");

        //na3tou class lkol elemtent
        productImg.classList.add("image");
        productDiv.classList.add("containerr");
        productDiv2.classList.add("div2");
        productCat.classList.add("cat");
        productPrice.classList.add("price");
        productTitle.classList.add("price");
        etoile.classList.add("etoile");
        chariot.classList.add("logo2");
        containerCat.classList.add("containerCat");
        containerPrice.classList.add("containerCat");



        // !! nhottou 5edmetna f blassetha f site(f span)
        let span = document.getElementById("span");
        span.appendChild(productDiv);
       

        



        // nhottou fl body bch yetcheef (fl cas he4i manesst7a9ouhach 5tr hattina f span)






        // bech nmchou ll page lo5ra "details"
        productDiv.addEventListener ("click", function() {
            window.location.href = ("index2.html");
        })

    }
           
            
        
}
main();