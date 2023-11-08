

const  UrunAdİnPUT=document.querySelector("#ürünadi");

const Urunİmgİnput=document.querySelector("#resim-selected");

const UrunBarkodİnput=document.querySelector("#ürünbarkod");

const UrunBarkodType=document.querySelector("#barkod-select");

const UrunAdetİnput=document.querySelector("#ürünadet");

const UrunGelisFiyatİnput=document.querySelector("#fiyatgelis");

const UrunSatisFiyatİnput=document.querySelector("#fiyatsatis");

const UrunGirisButton=document.querySelector(".eklebtn");


let Urunler=[
{
"id":"",
"ad":"",
"resim":"",
"barkod":"",
"barkodtip":"",
"adet":"",
"gelisfiyat":"",
"satisfiyat":"",
},
]

Yazdir();

function Yazdir(){

document.querySelector(".ürünler").innerHTML="";

    for(obce of Urunler){

  var eleman=` <div class="ürün border border-5 shadow m-1">
<div class="m-2">
<p class="text-danger fw-bold ">Ürün Adı:  <span class="text-primary">${obce.ad}</span></p>
</div>
<div  class="m-2">
    <p class="text-danger fw-bold ">Ürün Resimi: <img src="${obce.resim}" alt=""></p>
</div>
<div  class="m-2">
    <p class="text-danger fw-bold ">Ürün Barkodu: <span class="text-primary">${obce.barkod}</span></p>
</div>
<div  class="m-2">
    <p class="text-danger fw-bold ">Ürün Barkod Tipi: <span class="text-primary">${obce.barkodtip}</span></p>
</div>
<div  class="m-2">
    <p class="text-danger fw-bold ">Ürün Adeti: <span class="text-primary">${obce.adet}</span></p>
</div>
<div  class="m-2">
    <p class="text-danger fw-bold ">Ürün Geliş Fiyatı: <span class="text-primary">${obce.gelisfiyat} Tl</span></p>
</div>
<div  class="m-2">
    <p class="text-danger fw-bold ">Ürün Satış Fiyatı: <span class="text-primary">${obce.satisfiyat} Tl</span></p>
</div>
<div  class="m-2">
    <p class="text-danger fw-bold ">Ürün Toplam cirosu: <span class="text-primary">${obce.adet*obce.satisfiyat} </span></p>
</div>
<div  class="m-2">
    <p class="text-danger fw-bold ">Ürün Adet Karı: <span class="text-primary">${(obce.satisfiyat-obce.gelisfiyat)} Tl</span></p>
</div>
<div  class="m-2">
    <button class="btn btn-primary btn-sm ">Ürün Bilgilerini Düzenle</button>
</div>
<div  class="m-2">
    <button class="btn btn-danger btn-sm ">Ürünü Sil</button>
</div>
</div>`
        
}


document.querySelector(".ürünler").insertAdjacentHTML("beforeend",eleman); 


}

UrunGirisButton.addEventListener("click",Addİtem);


function Addİtem(event){


    Urunler.push({
        "id":Urunler.length+1,
        "ad":UrunAdİnPUT.value,
        "resim":Urunİmgİnput.value,
        "barkod":UrunBarkodİnput.value,
        "barkodtip":UrunBarkodType.selectedIndex.value,
        "adet":UrunAdetİnput.value,
        "gelisfiyat":UrunGelisFiyatİnput.value,
        "satisfiyat":UrunSatisFiyatİnput.value,
        },)

        event.preventDefault();

        console.log(;

Yazdir();





}







