var rating=document.getElementById("rating-12");
const shipping=document.getElementById("shippings");
const orders=document.getElementById("orders");
const customers=document.getElementById("Clients");



function count(){

    var count1=setInterval(counter1,100);
var count2=setInterval(counter2,100);
var count3=setInterval(counter3,500);
var count4=setInterval(counter4,100);
var add1=1;
var add2=1;
var add3=1;
var add4=1;

function counter1(){   
    add1++
    customers.innerHTML=add1+"k";
    if(add1==15){
        clearInterval(count1);
    }
}
function counter2(){   
    add2++
    shipping.innerHTML=add2+"k";
    if(add2==10){
        clearInterval(count2);
    }
}
function counter3(){  
    add3++
    rating.innerHTML=add3+"+";
    if(add3==4){
        clearInterval(count3);
    }
}
function counter4(){   
    add4++
    orders.innerHTML=add4+"k";
    if(add4==20){
        clearInterval(count4);
    }
}
}
count()
setInterval(count, 7000);




// redirecting to the services page

var product_1=document.querySelectorAll(".btn-c1");
var product_2=document.querySelectorAll(".btn-c");
let service_name=document.getElementById("p-n");
let product_name=document.getElementById("product1-name");
let product_price=document.getElementById("product_price");
var img_1=document.getElementById("img-1")
console.log(product_name.innerHTML)


let home_page=document.getElementById("home_page");
let services_page=document.getElementById("services_page");
let product_page=document.getElementById("product_page");
let product1=document.getElementById("product1");


function click_btnservices1(){
        home_page.style.display="none";
        services_page.style.display="block";
        service_name.innerHTML="Land Scaping By Gardening";
        product1.innerHTML="Land Scaping By Gardening"
        img_1.src="https://th.bing.com/th/id/OIP.1yZFj1LCfCNpy5UhTRAMgQHaFj?w=240&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7";
        

    }
    function click_btnservices2(){
        home_page.style.display="none";
        services_page.style.display="block";
        service_name.innerHTML="Purning Plants Irragation";
        product1.innerHTML="Purning Plants Irragation"
        img_1.src="https://i.pinimg.com/originals/ad/8a/0e/ad8a0e6025a8bfddbc30c80c393a750b.jpg";
    }
    function click_btnservices3(){
        home_page.style.display="none";
        services_page.style.display="block";
        service_name.innerHTML="Drainage Garden Maintanance";
        product1.innerHTML="Drainage Garden Maintanance"
        img_1.src="https://th.bing.com/th/id/OIP.J169oNOS5CfEf8iX9lDokgHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
    }
    function click_btnservices4(){
        home_page.style.display="none";
        services_page.style.display="block";
        service_name.innerHTML="Green Technology Urban Garden";
        product1.innerHTML="Green Technology Urban Garden"
        img_1.src="https://th.bing.com/th/id/OIP.R0eN9nvtLp5JvrQergTezwHaEn?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
    }

    var product_code=0;

    function click_btnproduct1(){
        home_page.style.display="none";
        product_page.style.display="block";
        product_name.innerHTML="Monsoon Special Foliage Plants";
        product_price.innerHTML="₹200";
        product_code=100;
    }
    function click_btnproduct2(){
        home_page.style.display="none";
        product_page.style.display="block";
        product_name.innerHTML="5 Best Indoor Plants Pack";
        product_price.innerHTML="₹300";
        product_code=200;
    }
    function click_btnproduct3(){
        home_page.style.display="none";
        product_page.style.display="block";
        product_name.innerHTML="Syngonium Green-Plant";
        product_price.innerHTML="₹500";
        product_code=300;
    }
    function click_btnproduct4(){
        home_page.style.display="none";
        product_page.style.display="block";
        product_name.innerHTML="Areca Palm-Plant";
        product_price.innerHTML="₹500";
        product_code=400;
    }


console.log(product_page);

// services

product_1[0].addEventListener("click",click_btnservices1);
product_1[1].addEventListener("click",click_btnservices2);
product_1[2].addEventListener("click",click_btnservices3);
product_1[3].addEventListener("click",click_btnservices4);


// products
product_2[0].addEventListener("click",click_btnproduct1)
product_2[1].addEventListener("click",click_btnproduct2)
product_2[2].addEventListener("click",click_btnproduct3)
product_2[3].addEventListener("click",click_btnproduct4)


let addtocart=document.getElementById("addtocart");

let cart=document.getElementById("cart");
let cartvalue=0;
let cartarry=[];
cart.innerHTML=cartarry.length;


var val=100;
function addcart(){
    // console.log(product_code);
    if(cartarry.length==0){
        cartarry.push(product_code);
        cart.innerHTML=cartarry.length;
        console.log(cartarry);

    }
    else{
for(var i=0;i<cartarry.length;i++){
        if(cartarry[i]==product_code){
            alert("Already added to Cart");
        }
        else{
            cartarry.push(product_code);
            cart.innerHTML=cartarry.length;
            console.log(cartarry);
            break;
            
        }
    }

    }
    

}


addtocart.addEventListener("click",addcart);



var back_pr=document.getElementById("back-pr");
function backp(){
    product_page.style.display="none";
    home_page.style.display="block";
};
back_pr.addEventListener("click",backp);






console.log(back_c)




// // checkout
var card_total=document.getElementById("cart-total");
card_total.style.display="none";

var back_c=document.getElementById("back-c");
function backc(){
    card_total.style.display="none";
    product_page.style.display="block";
};
back_c.addEventListener("click",backc);


var acrt=document.getElementById("cart");
function cart1(){
    product_page.style.display="none";
    card_total.style.display="block";
    chech1()
}
acrt.addEventListener("click",cart1);




        var x=cartarry;
        var ele=document.getElementById("cart-total");


// check 

function chech1(){





    for(var i=0;i<cartarry.length;i++){
        // var arr=[100,200];
        var y=document.createElement("div");
        y.setAttribute("class","order");
        ele.appendChild(y);
        var p_name=document.createElement("h3");
        p_name.setAttribute("class","checkout-pr");
        if(x[i]==100){
            p_name.innerHTML="100";
        }
        else if(x[i]==200){
            p_name.innerHTML="200";

        }
        else if(x[i]==300){
            p_name.innerHTML="300";

        }
        else if(x[i]==400){
            p_name.innerHTML="400";

        }
        else{
            console.log("");
        }
       
       
        var p_price=document.createElement("h3");
        // p_price.innerHTML="Price";
        p_price.setAttribute("class","checkout-price");
        if(x[i]==100){
            p_price.innerHTML="100";
        }
        else if(x[i]==200){
            p_price.innerHTML="200";

        }
        else if(x[i]==300){
            p_price.innerHTML="300";

        }
        else if(x[i]==400){
            p_price.innerHTML="400";

        }
        else{
            console.log("");
        }
        
        var p_btn=document.createElement("button");
        p_btn.setAttribute("class","btn btn-primary btnremove");
        p_btn.innerHTML=("Remove"+i);
        y.appendChild(p_name);
        y.appendChild(p_price);
        y.appendChild(p_btn);

        
        }



    // to check

        
        var btn_remove=document.querySelectorAll(".btnremove");
        var order_remove=document.querySelectorAll(".order");
        console.log(order_remove[1])
        
        
    //     btn_remove[0].addEventListener("click",()=>{
            
    //         var re=[]
    //             for(var i=0;i<cartarry.length;i++){
                    
    //                 if(x[i]!=100){
    //                     re.push(cartarry[i]);
    //                     order_remove[0].remove();
    //                     for(var i=0;i<cartarry.length;i++){
    //                         x_total+=cartarry[i]
    //                         total.innerHTML='₹'+x_total;
    //                     }
    //                 }
    //                 else{
                        
    //                     console.log(cartarry[i])
                        
    //                 }
    //             }
    //             // x=re;
    //             console.log(re.length)
                
    //         }
            
    //     );
    //     btn_remove[1].addEventListener("click",()=>{
    //             for(var i=0;i<cartarry.length;i++){
    //                 if(cartarry[i]!=200){
    //                     re.push(cartarry[i]);
    //                     order_remove[1].remove();
    //                     for(var i=0;i<cartarry.length;i++){
    //                          x_total+=cartarry[i];
    //                          total.innerHTML='₹'+x_total;
    //  }
    //                 }
    //                 else{
    //                     console.log(x[i])
                        
    //                 }
    //             }
    //             x=re;
    //             console.log(re)
                
    //         }
            
    //     );
    //     btn_remove[2].addEventListener("click",()=>{
    //         // var re=[]
    //             for(var i=0;i<cartarry.length;i++){
    //                 if(cartarry[i]!=300){
    //                     re.push(cartarry[i]);
    //                     order_remove[2].remove();
    //                     for(var i=0;i<cartarry.length;i++){
    //                         x_total+=cartarry[i]
    //                         total.innerHTML='₹'+x_total;
    //  }
    //                 }
    //                 else{
    //                     console.log(x[i])
                        
    //                 }
    //             }
    //             x=re;
    //             console.log(re.length)
                
    //         }
            
    //     );
    //     btn_remove[3].addEventListener("click",()=>{
    //         // var re=[]
    //             for(var i=0;i<cartarry.length;i++){
    //                 if(cartarry[i]!=400){
    //                     re.push(cartarry[i]);
    //                     order_remove[3].remove();
    //                     for(var i=0;i<cartarry.length;i++){
    //                         x_total+=cartarry[i]
    //                         total.innerHTML='₹'+x_total;
    //  }
    //                 }
    //                 else{
    //                     console.log(x[i])
                        
    //                 }
    //             }
    //             x=re;
    //             console.log(re)
                
    //         }
            
    //     );


        var total=document.getElementById("total");
        var x_total=0
       //  var calculate=document.getElementById("calculate");
       
        for(var i=0;i<x.length;i++){
           x_total+=x[i]
        }
        total.innerHTML='₹'+x_total;

       //  calculate.addEventListener("click",()=>{
       //     total.innerHTML=0;
       //     x_total=0
           
       //     for(var i=0;i<x.length;i++){
       //     x_total+=x[i]
       //  }
       //  total.innerHTML='₹'+x_total;


       //  })
        
           console.log(x);


}



img_1.src="https://c.pxhere.com/photos/b6/46/sunflowers_summer_flower_plant_blooming_vibrant-1288481.jpg!d"

console.log(img_1.src)




      
           

























