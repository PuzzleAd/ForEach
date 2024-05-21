const products1 = [
    {
      title: "Gray T-Shirt",
      price: "$14.99",
      img: "GrayTShirt.png"
    },
    {
      title: "Black Jeans",
      price: "$34.99",
      img: "BlackJeans.png"
    },
    {
      title: "Green Jacket",
      price: "$59.95",
      img: "GreenJacket.png"
    },
    {
      title: "White Sneakers",
      price: "$49.95",
      img: "WhiteSneakers.png"
    }
  ];


const products2 = [
    {
      title: "Blue Sweatshirt",
      price: "$29.95 - $179.95",
      img: "BlueSweatshirt.png",
      colors: ["blue", "black"]
    },
    {
      title: "Red Hoodie",
      price: "$24.95 - $149.95",
      img: "RedHoodie.png",
      colors: ["red", "green"]
    },
    {
      title: "Yellow Pullover",
      price: "$19.95 - $129.95",
      img: "YellowPullover.png",
      colors: ["yellow", "orange"]
    },
    {
      title: "Purple Jacket",
      price: "$39.95 - $199.95",
      img: "PurpleJacket.png",
      colors: ["purple", "pink"]
    }
  ];


const paragraph1 = Array.from(document.querySelectorAll("#paragraph1"));
const paragraph2 = Array.from(document.querySelectorAll("#paragraph2"));
const paragraphPrice1 = Array.from(document.querySelectorAll("#paragraph-price1"));
const paragraphPrice2 = Array.from(document.querySelectorAll("#paragraph-price2"));
const colorBox = Array.from(document.querySelectorAll(".first-color"));
const colorBoxSecond = Array.from(document.querySelectorAll(".second-color"));

paragraph1.forEach(function (element, index) {
  element.textContent = products1[index].title;
});

paragraph2.forEach(function (element, index) {
  element.textContent = products2[index].title;
});

paragraphPrice1.forEach(function (element, index) {
  element.textContent = products1[index].price;
})

paragraphPrice2.forEach(function (element, index) {
  element.textContent = products2[index].price;
})

colorBox.forEach(function (element, index,) {
  element.style.backgroundColor = products2[index].colors[0]
})

colorBoxSecond.forEach(function (element, index,) {
  element.style.backgroundColor = products2[index].colors[1]
})