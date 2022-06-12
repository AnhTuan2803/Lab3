const productList = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695401/images-Lab3/image_drggsn.png",
    time: 30,
    type: "Snack",
},
{
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image4_jndbim.png",
    time: 30,
    type: "Fish",
},
{
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image5_zwralv.png",
    time: 30,
    type: "Snack",
},
{
  id: 4,
  name: "Fresh and Healthy Mixed Mayonnaise",
  img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695401/images-Lab3/image1_midunz.png",
  time: 30,
  type: "Healthy",
},
{
id: 5,
name: "The Creamiest Creamy Chicken",
img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image2_guybjl.png",
time: 30,
type: "Noodles",
},
{
id: 6,
name: "Fruity Pancake with Orange & Blueberry",
img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image3_hju3rr.png",
time: 30,
type: "Sweet",
},
  ];
  
  function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;
  
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result +=` <div
        class="pb-2 shadow hover:shadow-xl duration-300 rounded-3xl bg-gray-50"
      >
      <a href="./detail.html?id=${product.id}"> <img src="${product.img}" class="w-full rounded-3xl" alt="" /></a>
        <h3 class="my-4 ml-2 text-lg font-bold text-red-600">
        <a href="./detail.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="flex ml-4">
          <span class="flex mr-8 text-base font-medium text-[#5D5D5D]"
            ><img src="https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/Timer_k4ovlr.png" class="mr-2" alt="" />${product.time}
            Minutes</span
          ><span class="flex text-base font-medium text-[#5D5D5D]"
            ><img src="https://res.cloudinary.com/dn3jydehx/image/upload/v1654695400/images-Lab3/ForkKnife_g8homq.png" class="mr-2" alt="" />${product.type}</span
          >
        </div>
      </div>`;
    }
    return result;
  }
  
  document.getElementById("products").innerHTML = showProducts(productList);
  