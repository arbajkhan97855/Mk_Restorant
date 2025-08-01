
// Counting increase
let b = 1;
function PARA() {
    let demo = document.getElementById("sd");//onpointermove event
    if (b > 0 && b < 15) {
        b++;
        demo.innerHTML = b
    } else {
        demo.innerHTML = b
    }

};

let c = 1;
function PARAR() {
    let demo = document.getElementById("sdd");//onpointermove event
    if (c > 0 && c < 50) {
        c++;
        demo.innerHTML = c
    } else {
        demo.innerHTML = c
    }
};
// TESTIMONIAL END
// link page start
function Menupage(e) {
    setTimeout(() => {
        window.location.href = e
    }, 1000)
}
// end
// profile
//  profile js
function Profileout() {
    const ap = document.getElementById("hs");
    ap.style.display = "none";
}

async function Profilepage() {

    const ap = document.getElementById("hs");
    ap.style.display = "block";
    let USER = localStorage.getItem("user");
    let apiurl = await fetch(`https://restaurant-api-fxeb.onrender.com/user/${USER}`)
    let convertapi = await apiurl.json();

    let ad = document.getElementById("hp")
    ad.innerHTML = `<div id="cs"><span>id : ${convertapi._id}</span><i class="fa-solid fa-x" onclick="Profileout()"></i></div>
                            <img src="https://restaurant-api-fxeb.onrender.com/uploads/${convertapi.profileimg}" alt="loadiing.." height="100px" width="100px"><br>
       <h5>Employer Name : ${convertapi.username}</h5>
       <h6>Employer Email : ${convertapi.useremail}</h6>
       <h6>Employer Number : ${convertapi.mobile}</h6>
       <h6>Employer Password : ${convertapi.password}</h6>
       <button onclick="Editjump()">Edit Profile</button>`

}

function Editjump() {
    setTimeout(() => {
        window.location.href = "./Edit.html";
    }, 1000)
}
// profile js end

let Product = [
    {
        id: "19",
        productname: "Panner Momose",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "50",
        img: "./img/momos.jpg",
        category: "dinner"
    },
    {
        id: "2",
        productname: "Fried Eggs",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "100",
        img: "./img/breackfast2.jpeg",
        category: "breackfast"
    },
    {
        id: "3",
        productname: "Coffee",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "60",
        img: "./img/breackfast3.jpeg",
        category: "breackfast"
    },
    {
        id: "4",
        productname: "Fruite",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "100",
        img: "./img/breackfast4.jpeg",
        category: "breackfast"
    },
    {
        id: "5",
        productname: "Sandwhich",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "80",
        img: "./img/breackfast5.jpeg",
        category: "breackfast"
    },
    {
        id: "6",
        productname: "Milk",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "50",
        img: "./img/breackfast6.jpeg",
        category: "breackfast"
    },
    {
        id: "7",
        productname: "Burger",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "80",
        img: "./img/launch1.jpeg",
        category: "launch"
    },
    {
        id: "8",
        productname: "All Pizza",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "100",
        img: "./img/launch2.jpeg",
        category: "launch"
    },
    {
        id: "9",
        productname: "Hot Dog",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "80",
        img: "./img/launch3.png",
        category: "launch"
    },
    {
        id: "10",
        productname: "Maggie",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "60",
        img: "./img/launch4.jpeg",
        category: "launch"
    },
    {
        id: "11",
        productname: "Spice Mixture",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "40",
        img: "./img/launch5.jpg",
        category: "launch"
    },
    {
        id: "12",
        productname: "Chicken Biryani",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "150",
        img: "./img/launch6.jpeg",
        category: "launch"
    },
    {
        id: "13",
        productname: "Chicken Burger",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "115",
        img: "./img/menu-1.jpg",
        category: "dinner"
    },
    {
        id: "14",
        productname: "Fish Fries",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "180",
        img: "./img/menu-2.jpg",
        category: "dinner"
    },
    {
        id: "15",
        productname: "Veg Pizza",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "160",
        img: "./img/menu-3.jpg",
        category: "dinner"
    },
    {
        id: "16",
        productname: "Fish Curry",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "130",
        img: "./img/menu-4.jpg",
        category: "dinner"
    },
    {
        id: "17",
        productname: "Cheesh with Grapes",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "150",
        img: "./img/breackfast1.jpeg",
        category: "breackfast"
    },
    {
        id: "18",
        productname: "Mix French Fries",
        productdetail: "Lorem ipsum dolor sit amet con",
        price: "200",
        img: "./img/menu-6.jpg",
        category: "dinner"
    },
]
function MenuData() {
    const ar = document.getElementById('menupage-p')
    ar.innerHTML = Product.map((item) => {
        return (
            `
               <div class="col-5 col-sm-4 col-md-2 col-lg-2  mx-md-2 mx-0  my-md-1 pt-1 menupage-div">
                <img src=${item.img} height="70vh" width="100px" >
                <h5>${item.productname}</h5>
                <h5>₹${item.price}</h5>
                  </div>
       `
        )
    })
}
window.addEventListener("DOMContentLoaded", () => {
    MenuData();
});
function RenderProductsDefaultStart() {
    const ara = document.getElementById('data-menu');
    const defaultProducts = Product.slice(0, 6);
    ara.innerHTML = defaultProducts.map(item => {
        return `
            <div class="row col-12 col-sm-12 col-md-12 col-lg-6 testimonial-item">
                <img src=${item.img} class="img-fluid col-2 col-sm-2 col-md-2 col-lg-2" style="width: 110px;">
                <div class="testimonial-name col-8 col-sm-9 col-md-9 col-lg-9">
                    <div class="testimonial-head">
                        <h4>${item.productname}</h4>
                        <h3>₹${item.price}</h3>
                    </div>
                    <hr>
                    <p>${item.productdetail}</p>
                </div>
            </div>
        `;
    }).join('');
}

RenderProductsDefaultStart();

function FilterByCategory(category) {
    let ara = document.getElementById('data-menu');
    const filtered = Product.filter(item => item.category === category.toLowerCase());

    if (filtered.length > 0) {
        ara.innerHTML = filtered.map((item) => {
            return `
            <div class="row col-12 col-sm-12 col-md-12 col-lg-6 testimonial-item">
                <img src=${item.img} class="img-fluid col-2 col-sm-2 col-md-2 col-lg-2" style="width: 110px;">
                <div class="testimonial-name col-8 col-sm-9 col-md-9 col-lg-9">
                    <div class="testimonial-head">
                        <h4>${item.productname}</h4>
                        <h3>₹${item.price}</h3>
                    </div>
                    <hr>
                    <p>${item.productdetail}</p>
                </div>
            </div>
        `;
        }).join('');
    }
}




//  Filterbg("dinner");
// testimonial-topp


