





const item_container=document.querySelector(".item-container");

let ürünler=[];

if(localStorage.getItem("ürünler")!==null){
  ürünler=JSON.parse(localStorage.getItem("ürünler"));
}


let ürünadiinput=document.querySelector("#ürünadi");

let ürünfotoinput=document.querySelector("#ürünfoto");

let ürünadetinput=document.querySelector("#ürünadet");

let ürünbarkodinput=document.querySelector("#ürünbarkod");

let ürünfirmainput=document.querySelector("#firmaadi");

let adetfiyatinput=document.querySelector("#adetfiyat");

let eklebutton=document.querySelector("#ekle");




yazdir();

function yazdir(){


  document.querySelector(".item-container").innerHTML="";

  for(index of ürünler){

      let add=`   
      <div class="item p-1 m-1 ">

          <h1 class="text-warning">Ürün Adı: <span class="text-danger">${index.ürün}</span></h1>
          <div>
              <h2 class="text-warning">Ürün Fotoğrafı:<span class="text-danger">${index.foto}</span></h2>
              <img class="ürün-resim" src="${index.foto}" alt="">
          </div>
          <h2 class="text-warning">Ürün Adeti: <span class="text-danger">${index.adet}</span> Adet</h2>
          <h2 class="text-warning">Ürün Barkodu :<span class="text-danger">${index.barkod}</span> EAN13</h2>
          <h2 class="text-warning">Üretici Firma :<span class="text-danger">${index.üretici}</span></h2>
          <h2 class="text-warning">Adet Fiyatı:<span class="text-danger">${index.adetfiyat}</span></h2>
          <h2 class="text-warning">Toplam Çekceği Ciro :<span class="text-danger">${index.adet*index.adetfiyat} ₺</span></h2>
          <button onclick="arttir(${index.id})" class="btn btn-primary   m-1">Ürün Ekle</button>
          <button onclick="sil(${index.id})" class="btn btn-secondary m-1">Ürünü Sil</button>
          <button onclick="düzenle(${index.id})" class="btn btn-success m-1">Ürün Bilgilerini Düzenle</button>
      </div>

      `;

      document.querySelector(".item-container").insertAdjacentHTML("beforeend",add);

  }





 

}

function ekle(event){

  if(ürünadetinput.value==""||ürünadiinput.value==""||ürünbarkodinput.value==""||ürünfirmainput.value==""||ürünfotoinput.value==""||adetfiyatinput.value==""){
      alert("eksiksiz doldurun!")
  }

  else{
          ürünler.push({"id":ürünler.length+1,"ürün":ürünadiinput.value,"foto":ürünfotoinput.value,"adet":ürünadetinput.value,"barkod":ürünbarkodinput.value,"üretici":ürünfirmainput.value,"adetfiyat":adetfiyatinput.value});
  yazdir();
  event.preventDefault();

  
  }
  ürünadetinput.value="";
  ürünadiinput.value="";
  ürünbarkodinput.value="";
  ürünfirmainput.value="";
  ürünfotoinput.value="";   
  adetfiyatinput.value="";  
  

  localStorage.setItem("ürünler",JSON.stringify(ürünler));
} 

eklebutton.addEventListener("click",ekle);

function arttir(id){
  document.querySelector("#tamamla").classList.remove("none");
  document.getElementById("ekle").classList.add("none");
  for(index of ürünler){

  if(index.id==id){

      ürünadetinput.value=index.adet;

      document.querySelector("#tamamla").addEventListener("click",function(event){
          
          index.adet=ürünadetinput.value;
          yazdir();
          event.preventDefault(); 
          document.querySelector("#tamamla").classList.add("none");
      })

     

  }


}
document.querySelector("#ekle").classList.remove("none");
localStorage.setItem("ürünler",JSON.stringify(ürünler));
}


function düzenle(id){
  document.querySelector("#ekle").classList.add("none");
  document.querySelector("#tamamla").classList.remove("none");


  for(index of ürünler){

      if(index.id==id){

          ürünadiinput.value=index.ürün;
          ürünfotoinput.value=index.foto;
          ürünadetinput.value=index.adet;
          ürünbarkodinput.value=index.barkod;
          ürünfirmainput.value=index.üretici;
          adetfiyatinput.value=index.adetfiyat;

       document.querySelector("#tamamla").addEventListener("click",function(event){
         index.ürün= ürünadiinput.value;
         index.foto= ürünfotoinput.value;
         index.adet= ürünadetinput.value;
         index.barkod= ürünbarkodinput.value;
         index.üretici= ürünfirmainput.value;
         index.adetfiyat=adetfiyatinput.value;

          


           yazdir();
             ürünadetinput.value="";
             ürünadiinput.value="";
             ürünbarkodinput.value="";
             ürünfirmainput.value="";
             ürünfotoinput.value="";     
             adetfiyatinput.value="";
  
           event.preventDefault();
          localStorage.setItem("ürünler",JSON.stringify(ürünler));
 
          document.querySelector("#tamamla").classList.add("none");
          document.querySelector("#ekle").classList.remove("none");


          })
      


      }
  }


 
}

function sil(id){


  for(index in ürünler){


      if(ürünler[index].id==id){


          ürünler.splice(index,1);

      }

  }


yazdir();
localStorage.setItem("ürünler",JSON.stringify(ürünler));
}
