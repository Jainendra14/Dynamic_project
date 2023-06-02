const endpoints={
    products:"https://5d76bf96515d1a0014085cf9.mockapi.io/product",
};
$(()=>{
    addherocarouel();
    getproducts();
})


const addherocarouel=()=>{
    $('.hero-banner').slick({
        autoplay:true,
        autoplayspeed:1000,
        arrows:false,
        dots:true,
    });
}

const getproducts=()=>{
    $.get(endpoints.products,(data)=>{
        console.log(data);
        createproductlist(data)
        
    }).fail((err)=>{
        console.log(err);
    });
};
const createproductlist = (products)=>{
    if(Array.isArray(products)){
        products.forEach((product)=>{
            const productCard = $(productTemplate(product))
            $('.product').append(productCard)
        })
    }

}

const productTemplate=(product)=>{
    const {brand,name,preview,price,id} = product||{};
    const pathofproduct = location.pathname.replace('store.html','product.html');
    return`
    <div class="store-product">
    <a href="${pathofproduct}?product_id=${id}">
     <div class="store-product-img">
        <img src=${preview} alt=${name}/>
     </div>
     </a>
     <div class="store-product-details">
        <p class="store-product-tittle">${name}</p>
        <p class="store-product-desc">${brand} </p>
     
     <div class="product-action">
        <div class="product-price">Price:<span>${price}</span></div>
        <div class="product-cart">
            <button>Add to cart</button>
        </div>
      </div>
      </div>
    </div>
    `
}