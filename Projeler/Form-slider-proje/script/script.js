let Vehicles=[

    {
        id:"1",
        name:"MERCEDES BENZ TRAVEGO 16SHD",
        edit:"Blackline Modeli İle Rahat Sürüş Ve Konfor",
        link:"https://www.mercedes-benz-bus.com/tr_TR/models/travego-edit-1.html",
        arac:"img/tavego.jpg",
        arac_ic:"img/trabego_ic.jpg"
    },
    {
        id:"2",
        name:"MERCEDES BENZ TOURİSMO 15SHD",
        edit:"Blackline Modeli İle Sürüş Yeniden Tanımlandı",
        link:"https://www.mercedes-benz-bus.com/tr_TR/models/tourismo-rhd.html",
        arac:"img/tourismo.jpg",
        arac_ic:"img/tourismo_ic,jpg"
    },
    {
        id:"3",
        name:"MAN LİONS COACH",
        edit:"Lions Modeli İle Düşük Sarifyat Maksimum Konfor",
        link:"https://www.man.eu/de/en/bus/coaches/the-man-lion_s-coach/overview/man-lion_s-coach.html",
        arac:"img/man.jpg",
        arac_ic:"img/man_ic.jpg"
    },
    {
        id:"4",
        name:"FORD F-MAX",
        edit:"Genişlik Konfor Düşük Sarfiyat Ve Dahası",
        link:"https://www.fordtrucks.com.tr/cekici/f-max",
        arac:"img/fmax.png",
        arac_ic:"img/fmax_ic.jpg"
    }



];


const Cardİmg=document.querySelector(".card-img-top");

const CardTitle=document.querySelector(".card-title");

const CardText=document.querySelector(".card-text");

const CardHrefButton=document.querySelector(".card-link");

const CardRightButton=document.querySelector(".right");

const CardLeftButton=document.querySelector(".left");

index=0;

var ınterval;

var settings={
    duration:"1000",
    durum:true,
}



function init(settings){


    if(settings.durum){

       ınterval = setInterval(function(){

            index=Math.floor(Math.random()*(Vehicles.length));
            console.log(index);
            pass(index);


        },settings.duration);


    }


}

init(settings);




function pass(i){
index=i;

if(index<0){
    index=Vehicles.length-1;
}
if(index>=Vehicles.length){
    index=0;
}

Cardİmg.setAttribute("src",Vehicles[index].arac);

CardTitle.textContent=Vehicles[index].name;

CardText.textContent=Vehicles[index].edit;

CardHrefButton.setAttribute("href",Vehicles[index].link)


}

pass(index);


CardRightButton.addEventListener("click",function(){
    index++; 
    console.log(index);
    pass(index);
})

CardLeftButton.addEventListener("click",function(){
    index--;
    console.log(index);
    pass(index);

})


document.querySelectorAll(".yon").forEach(function(item){

    item.addEventListener("mouseenter",function(){
        clearInterval(ınterval);
        console.log(58)
    })

})

document.querySelectorAll(".yon").forEach(function(item){

    item.addEventListener("mouseleave",function(){
        init(settings);
        console.log(23);
    })
})