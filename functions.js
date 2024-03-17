function updatePrice(){

    let q1 = document.getElementById("p1").value;
    let q2 = document.getElementById("p2").value;
    let q3 = document.getElementById("p3").value;

    let tp1 = 118.19*parseFloat(q1);
    let tp2 = 253.19*parseFloat(q2);
    let tp3 = 321.19*parseFloat(q3);

    console.log(tp1);

    document.querySelector("#st1").innerHTML = `$${tp1}`;
    document.querySelector("#st2").innerHTML = `$${tp2}`;
    document.querySelector("#st3").innerHTML = `$${tp3}`;

    let total = tp1+tp2+tp3;
    
    document.querySelector("#subt").innerHTML = `$${total}`;
    document.querySelector("#Total").innerHTML = `$${total}`;
}

//fetch api

let menClothes = "https://fakestoreapi.com/products/category/men's%20clothing"
fetch(menClothes)
    .then((res) =>{
        return res.json();
    })
    .then(data => {
        console.log(data);
        for(let i=1;i<4;i++){
            document.querySelector(`#home-men${i}`).src = data[i].image;
            document.querySelector(`#home-men-p${i}`).innerHTML = `$${data[i].price}`;
            document.querySelector(`#home-men-t${i}`).innerHTML = `${data[i].title}`;
        }
    });

    let womenClothes = "https://fakestoreapi.com/products/category/women's%20clothing"
    fetch(womenClothes)
        .then((res) =>{
            return res.json();
        })
        .then(data => {
            console.log(data);
            for(let i=1;i<6;i++){
                document.querySelector(`#home-women${i}`).src = data[i-1].image;
                document.querySelector(`#home-women-p${i}`).innerHTML = `$${data[i-1].price}`;
                document.querySelector(`#home-women-t${i}`).innerHTML = `${data[i-1].title}`;
            }
        });
    