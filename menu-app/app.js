const menu = [
  {
    id: 1,
    title: "sandwich",
    category: "sandwich",
    price: 2.5,
    img: "./images/item9.jpeg",
    desc: "sandwich sandwich sandwich",
  },
  {
    id: 2,
    title: "pizza capricciosa",
    category: "pizza",
    price: 7,
    img: "./images/item2.jpeg",
    desc: "capricciosa capricciosa capricciosa",
  },
  {
    id: 3,
    title: "big burger",
    category: "burger",
    price: 3.5,
    img: "./images/item3.jpeg",
    desc: "big burger big burger big burger",
  },
  {
    id: 4,
    title: "hot-dog",
    category: "sandwich",
    price: 5,
    img: "./images/item4.jpeg",
    desc: "hot-dog hot-dog hot-dog",
  },
  {
    id: 5,
    title: "toast sandwich",
    category: "sandwich",
    price: 6,
    img: "./images/item5.jpeg",
    desc: "toast toast toast toast toast",
  },
  {
    id: 6,
    title: "cheeseburger",
    category: "burger",
    price: 3,
    img: "./images/item6.jpeg",
    desc: "cheeseburger cheeseburger",
  },
  {
    id: 7,
    title: "donut",
    category: "sweet menu",
    price: 1.5,
    img: "./images/item7.jpeg",
    desc: "donut donut donut ",
  },
  {
    id: 8,
    title: "pizza mexicana",
    category: "pizza",
    price: 3,
    img: "./images/item8.jpeg",
    desc: "mexicana mexicana mexicana",
  },
  {
    id: 9,
    title: "pancake",
    category: "sweet menu",
    price: 3,
    img: "./images/item1.jpeg",
    desc: "pancake pancake pancake",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

//Displaying all items from menu
function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return ` <article class="menu-item">
                    <img src=${item.img} class="photo"/>
                     <div class="item-info">
                        <header>
                           <h4> ${item.title} </h4>
                           <h4 class="price"> ${item.price}<span class="dollar">$</span> </h4>
                           <p class="item-text"> ${item.desc} </p>
                        </header>
                            
                     </div>
                 </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

//Displaying filtering buttons
function displayMenuButtons() {
  //Removing duplicates
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  //Returning data from categories array and making filter buttons from it
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">
        ${category} 
        </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");

  //Filtering the menu items by clicking the filter buttons
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
