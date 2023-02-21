var option1=document.getElementById("opt-1");
var option2=document.getElementById("opt-2");
var entry=['₹500','₹1000'];
var medium=['₹2000','₹5000'];
var plus=['₹7000','₹10000'];
let p_name=document.getElementById("p-n");
let price=document.getElementById("pr");
let p_b=document.getElementById("package-name");
let package_type=["Entry","Medium","Plus"];
var productname1=document.getElementById("product-name")
const services_entry1=[
"land scapping limited",
"1 hour of service",
"planting trees"
];
const services_entry2=[
    "land scapping limited",
    "1 hour of service",
    "planting trees",
    "watering",
    "planting",
    "cleaning"
    ]
    const services_medium1=[
        "land scapping limited",
        "1 hour of service",
        "planting trees",
        "watering",
        "planting",
        "cleaning"
        ]
        const services_medium2=[
            "land scapping limited",
            "1 hour of service",
            "planting trees",
            "watering",
            "planting",
            "cleaning"
            ]

            const services_plus1=[
                "land scapping limited",
                "1 hour of service",
                "planting trees",
                "watering",
                "planting",
                "cleaning"
                ]
                const services_plus2=[
                    "land scapping limited",
                    "1 hour of service",
                    "planting trees",
                    "watering",
                    "planting",
                    "cleaning"
                    ]
let ul=document.getElementById("ul");
console.log(p_b.innerHTML)

option1.addEventListener("change",add);

function add(){
    // entry.innerHTML="entry1"
    if(option1.selectedIndex==1){
        option2.innerHTML="";
         entry.forEach(function(items){
        var opt=document.createElement("option");
opt.setAttribute("value","select");
opt.innerHTML=items;
option2.appendChild(opt);

    })
    }
    else if(option1.selectedIndex==2){
        option2.innerHTML="";
        medium.forEach(function(items){
        var opt=document.createElement("option");
opt.setAttribute("value","select");
opt.innerHTML=items;
option2.appendChild(opt);

    })
      
    }
    else if(option1.selectedIndex==3){
        option2.innerHTML="";
        plus.forEach(function(items){
        var opt=document.createElement("option");
opt.setAttribute("value","select");
opt.innerHTML=items;
option2.appendChild(opt);

    })
      
    }
    else{ 
        option2.innerHTML="";
        var opt=document.createElement("option");
        opt.innerHTML="Budget"
        option2.appendChild(opt)
        
    }

var btnn=document.getElementById("btn-submit")
var package_name=document.getElementById("package-name");
    function sub(){
        if(option1.selectedIndex==1 && option2.selectedIndex==0){
                p_name.innerHTML=p_name.innerHTML;
                price.innerHTML=entry[0];
                package_name.innerHTML="Entry";
                package_name.style.backgroundColor="green";
            }
            else if(option1.selectedIndex==1 && option2.selectedIndex==1){
                p_name.innerHTML=p_name.innerHTML;
                price.innerHTML=entry[1];
                package_name.innerHTML="Entry";
                package_name.style.backgroundColor="green";
            }
            else if(option1.selectedIndex==2 && option2.selectedIndex==0){
                p_name.innerHTML=p_name.innerHTML;
                price.innerHTML=medium[0];
                package_name.innerHTML="Medium";
                package_name.style.backgroundColor="blue";
            }
            else if(option1.selectedIndex==2 && option2.selectedIndex==1){
                p_name.innerHTML=p_name.innerHTML;
                price.innerHTML=medium[1];
                package_name.innerHTML="Medium";
                package_name.style.backgroundColor="blue";
            }
            else if(option1.selectedIndex==3 && option2.selectedIndex==0){
                p_name.innerHTML=p_name.innerHTML;
                price.innerHTML=plus[0];
                package_name.innerHTML="Plus";
                package_name.style.backgroundColor="orange";
            }
            else if(option1.selectedIndex==3 && option2.selectedIndex==1){
                p_name.innerHTML=p_name.innerHTML;
                price.innerHTML=plus[1];
                package_name.innerHTML="Plus";
                package_name.style.backgroundColor="orange";
            }
            else{
                p_name.innerHTML="Product";
                price.innerHTML=entry[1];

            }


    }

    btnn.addEventListener("click",sub);
   
   
   

   
   

}

// setInterval(()=>{
//     console.log(option2.selectedIndex)
// },5000)





