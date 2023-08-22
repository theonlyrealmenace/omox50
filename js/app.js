let cartNum=document.querySelector('#cart-num')
let cartTotal=document.querySelector('#cart-total')
let cartOverlay=document.querySelector('.cart-overlay')
 let cartDOM=document.querySelector('.cart')
 let cartContent=document.getElementById('cart-content');
cart=[

]
let domCartBtns= document.getElementsByClassName('cart-btn')

class UI{
displayProducts(produts){
  let  result=''
  let itemsDom= document.getElementById('flex-containers')
produts.forEach(product => {
    let div=document.createElement('div')
    div.setAttribute('class','over-container')
    div.innerHTML=`
    <div class="container">
    <div class="img-container">
    <img src="images/${product.productImage}" alt="" width="100%" >
 
    <i class="fa-solid fa-heart fa-beat fa-lg love "  style="color:#B88A2E;"></i>
   
  
    <div class="star">
    <i class="fa-regular fa-star" style="color:#B88A2E;"></i>
    <i class="fa-regular fa-star " style="color:#B88A2E;"></i>
    <i class="fa-regular fa-star " style="color:#B88A2E;"></i>
    <i class="fa-regular fa-star " style="color:#B88A2E;"></i>
       
    <i class="fa-regular fa-star " style="color:#B88A2E;"></i>
    </div>
    </div>




<p>${product.productName}</p>
<p>${product.productPrice}#</p>
<div class="button-under">
    <button class="buy-button"  data-id='${product.id}'>Buy Now</button>
    <i class="fa-solid fa-cart-shopping cart-btn" data-id='${product.id}' style="font-size: 2.2rem; color: #454545"></i>

    <!-- <img src="cart.svg" alt=""> -->
</div>
</div>

    
    `
itemsDom.appendChild(div)
    
});


console.log(result);
}


setUpApp(){
    console.log('wow');
    let cart=Storages.getCart()
    console.log(cart);
    this.setCartValues(cart)
      this.cartDom(cart)
    let cartshowBtn=document.querySelector('.open-cart')
    cartshowBtn.addEventListener(('click'),()=>{
        // this.cartDom([])
        
        let cart =Storages.getCart()
        this.setCartValues(cart)
//         this.cartDom([])
//    this.cartDom(cart)
         console.log(cart);
        cartOverlay.classList.add('show-overlay')
        cartDOM.classList.add('show-cart')
       
    })
}

gettocart(){
    let cartbtns=document.querySelectorAll('.cart-btn')
  cartbtns=  [...cartbtns]
 cartbtns.forEach(btn=>{

let id= btn.dataset.id
cart=Storages.getCart()
// console.log(cart);

let inCart= cart.find((item)=>item.id==id);
  if(!inCart){
    btn.style.color='#454545'
   
  }

  else{
    btn.style.color='#D4AF37'
    
  }

btn.addEventListener(('click'),()=>{
    // cartDom.removeChild()

    let id= btn.dataset.id
id=Number(id)
  let products=Storages.getProducts()
  
 
 
  let cartItem= products.find((item)=>item.id==id)
   cartItem={...cartItem,amount:1}
  let cart=Storages.getCart()
 
 let inCart= cart.find((item)=>item.id==id);

 console.log(cart);

  if(inCart){
    btn.style.color='#454545'
    cart= cart.filter((item)=>item.id!=id)
// console.log(cart);
  }

  else{
    btn.style.color='#D4AF37'
    cart=[...cart,cartItem]
  }
  console.log(cart);
  Storages.saveCart(cart)

 this.setCartValues(cart)
     cartContent.innerHTML=''
    //  this.cartDom([])
 this.cartDom(cart)
  console.log(cartContent);
 
//  cartOverlay.classList.add('show-overlay')
//  cartDOM.classList.add('show-cart')
})
 })
 
}




setCartValues(cart){
    let itemTotal=0,priceTotal=0
   cart.forEach(item => {
    itemTotal+=item.amount
   
    priceTotal+=item.amount*item.productPrice

    
    
   });
   cartNum.textContent=itemTotal
   cartTotal.textContent=priceTotal
  
}

cartDom(cart){

let result=``

cart.forEach((cartItem)=>{
    let div=document.createElement('div')
   
    div.classList.add('cart-item')
    div.setAttribute('id','cart-item')
    div.innerHTML=`
    <img src="images/${cartItem.productImage}" alt="">
                    <div class="item-info">
                        <p>${cartItem.productName}</p>
                        <p>#${cartItem.productPrice}</p>
                        <p class="remove-item" data-id='${cartItem.id}'>remove</p>
    
                    </div>
                    <div class="cart-increment-side">
                        <i class="fa-solid fa-chevron-up fa-bounce"  data-id='${cartItem.id}'></i>
                        <p>${cartItem.amount}</p>
                        <i class="fa-solid fa-chevron-down fa-bounce" data-id='${cartItem.id}'></i>
                    </div>
    
    `
    // console.log(div);
     cartContent.appendChild(div)
   
})

 

}





cartLogic(){
    let cancelCartBtn=document.querySelector('.cancel-cart')
    cancelCartBtn.addEventListener('click',()=>{
        cartOverlay.classList.remove('show-overlay')
        cartDOM.classList.remove('show-cart')
    })
    
    
    cartContent.addEventListener(('click'),(e)=>{
      let cart=Storages.getCart()
      console.log('l');
      console.log(cart);
      let btn=e.target

      var id =btn.dataset.id
      // console.log(id);
      let cartItem =cart.find((item)=>item.id==id)
      // console.log(cartItem);
if (btn.classList.contains('fa-chevron-up')) {
  let amount=cartItem.amount
  console.log(amount);
  ++amount
cartItem.amount=amount
// cart=[...cart,{item:7}]
console.log(cartItem);


      btn.nextElementSibling.innerHTML=amount
     this.setCartValues(cart)
    //  if (amount > 10) {
    //   cartNum.textContent = '10+';
    // } else {
    //   cartNum.textContent = amount;
    // }
    Storages.saveCart(cart)
    

}


else if(btn.classList.contains('fa-chevron-down')){
  console.log(cartItem);
let amount =cartItem.amount
amount-=1

cartItem.amount=amount
console.log(cartItem)

btn.previousElementSibling.innerHTML=amount
this.setCartValues(cart)
console.log(cart)

Storages.saveCart(cart)

if (amount==0) {
//   btn.parentElement.parentElement.remove()
//   cart= cart.filter((item)=>item.id!=id)
//   domCartBtns=[...domCartBtns]
//   console.log(domCartBtns);
//  let cartbtn= domCartBtns.find((item)=>item.dataset.id==id)

//  cartbtn.style.color='#454545'
this.removeCartitem(btn,cart,domCartBtns,id)
 }
 

}

else if(btn.classList.contains('remove-item')){
  this.removeCartitem(btn,cart,domCartBtns,id)
 
  
}

// else if(btn.classList.contains('clear-cart')){
// console.log('l;pdk,ewpkpekf');
//   cart=[]
//   this.setCartValues(cart)
//   Storages.saveCart(cart)
//   domCartBtns=[...domCartBtns]
//   domCartBtns.forEach(element => {
//     element.style.color="#454545"
//   });

// }
    })

    
    this.clearCart()
}

clearCart(){
  let btn= document.getElementById('clear-cart')
  btn.addEventListener('click',()=>{
    cart=[]
    cartContent.innerHTML=""
      this.setCartValues(cart)
      Storages.saveCart(cart)
      domCartBtns=[...domCartBtns]
      domCartBtns.forEach(element => {
        element.style.color="#454545"
      });
    
  })
}

removeCartitem(btn,cart,domCartBtns,id){
  btn.parentElement.parentElement.remove()
 cart= cart.filter((item)=>item.id!=id)
 console.log(cart);
  domCartBtns=[...domCartBtns]
  console.log(domCartBtns);
 let cartbtn= domCartBtns.find((item)=>item.dataset.id==id)
 cartbtn.style.color='#454545'
 this.setCartValues(cart)
 Storages.saveCart(cart)
}
}

class Products{

 async getProducts (){

    
    let result = await fetch('products.json')
   let data = result.json()
   return data
}
}


class Storages{
 static saveProduct(products){
    localStorage.setItem('products',JSON.stringify(products))
}

static getProducts(){
    let products=localStorage.getItem('products')
    products=JSON.parse(products)
    return products
}
 static saveCart(cart){
    localStorage.setItem('cart',JSON.stringify(cart))
}
 static getCart(){
  let cart= localStorage.getItem('cart')
  return JSON.parse(cart)||[]
}
}

document.addEventListener('DOMContentLoaded',()=>{
    let product= new Products()
    let ui=new UI()
    ui.setUpApp()
    product.getProducts().then( (products)=>{
 ui.displayProducts(products) 
     Storages.saveProduct(products)
     ui.gettocart()
     ui.cartLogic()
    }
   
    )

})
