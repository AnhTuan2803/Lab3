const productList=[
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: "./img/image.png",
    time: 30,
    type: "Snack",
},
{
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    img: "./img/image4.png",
    time: 30,
    type: "Fish",
},
{
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    img: "./img/image5.png",
    time: 30,
    type: "Snack",
},
{
  id: 4,
  name: "Fresh and Healthy Mixed Mayonnaise",
  img: "./img/image1.png",
  time: 30,
  type: "Healthy",
},
{
id: 5,
name: "The Creamiest Creamy Chicken",
img: "./img/image2.png",
time: 30,
type: "Noodles",
},
{
id: 6,
name: "Fruity Pancake with Orange & Blueberry",
img: "./img/image3.png",
time: 30,
type: "Sweet",
},
];

//Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showProduct(products){
    //Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if(!Array.isArray(products) || products.length ==0) return false;
    let result = "";

    //Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    //thì trả về object đấy
    const product = products.find((item) => item.id ==id);
    
    //Trả về kết quả là một chuỗi
    result +=`
    <h2 class="font-black text-4xl">
     ${product.name}
    </h2>`;
    return result;
}
function showImage(products){
  //Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
  if(!Array.isArray(products) || products.length ==0) return false;
  let result = "";

  //Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
  //thì trả về object đấy
  const product = products.find((item) => item.id ==id);
  
  //Trả về kết quả là một chuỗi
  result +=`
  <img class="w-full" src="${product.img}" alt="" />`;
  return result;
}

document.getElementById("detail").innerHTML = showProduct(productList);
document.getElementById("image").innerHTML = showImage(productList);