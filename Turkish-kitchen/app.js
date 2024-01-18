const menu = [
  {
    id: 1,
    title: "Iskender",
    category: "Marmara Region",
    price: 10.99,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsBehza6AAK8D8bIew0dc2USPBj7K_bYlag&usqp=CAU",
    desc: `Sliced döner kebab meat topped with hot tomato sauce over pieces of pita bread, and generously slathered with melted special sheep's milk butter and yogurt`,
  },
  {
    id: 2,
    title: "Etli Ekmek",
    category: "Central Anatolia",
    price: 7.99,
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/04/5c/44/23/selale-etli-ekmek.jpg",
    desc: `"Flatbread with minced meat" refers to a traditional Turkish dish known as "etli ekmek." It features a flatbread topped with seasoned minced meat, often lamb or beef, and is baked until the meat is cooked and the crust is golden brown. `,
  },
  {
    id: 3,
    title: "Stuffed Meatballs- Icli Kofte",
    category: "Eastern Anatolia",
    price: 8.99,
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/icli-kofte-2-yemekcom.jpg",
    desc: `"Stuffed bulgur dumplings" describe the Turkish dish "içli köfte." These are handmade bulgur (cracked wheat) shells filled with a flavorful mixture of ground meat, usually beef or lamb, along with various spices and herbs. The stuffed dumplings are then shaped and typically deep-fried or steamed before serving.`,
  },
  {
    id: 4,
    title: "Pan-fried Anchovies",
    category: "Blacksea Region",
    price: 5.99,
    img:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2016/08/hamsi-tava-yeni-one-cikan.jpg",
    desc: `"Pan-fried anchovies" refer to a dish where fresh anchovies (hamsi in Turkish) are seasoned, coated, and then pan-fried until they achieve a crispy and flavorful texture. This Turkish culinary delight is enjoyed for its delicious taste and is often served with a side of lemon wedges for added zest. `,
  },
  {
    id: 5,
    title: "Adana Kebab",
    category: "Mediterrenian",
    price: 12.99,
    img:
      "https://cdn1.ntv.com.tr/gorsel/ptxaR0q1g06gjszfWE2UFQ.jpg?width=1060&height=795&mode=crop&scale=both&v=1597654609978&meta=square",
    desc: `
    "Adana kebab" is a traditional Turkish dish consisting of skewered and grilled minced meat, typically lamb. The meat is seasoned with various spices, including red pepper flakes, and shaped onto metal skewers before being grilled to perfection. Adana kebab is known for its bold and spicy flavor, making it a popular choice among kebab enthusiasts.`,
  },
  {
    id: 6,
    title: "Cag Kebab",
    category: "Eastern Anatolia",
    price: 9.99,
    img:
      "https://im.haberturk.com/l/2020/11/11/ver1605108974/2866902/jpg/640x360",
    desc: `"Cağ kebab" is a specialty Turkish kebab originating from the city of Erzurum. It involves marinating large chunks of lamb or beef in a mixture of spices and yogurt, then threading the meat onto a large horizontal skewer. The skewer is set up vertically over a charcoal grill, and the meat is slow-cooked as it rotates. This method imparts a unique flavor to the kebab, resulting in a delicious and tender dish that is often served with lavash or flatbread and accompanied by grilled vegetables.`,
  },
  {
    id: 7,
    title: "Yaglama",
    category: "Central Anatolia",
    price: 15.99,
    img:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2020/04/yaglama-ceylan.jpg",
    desc: `"Yağlama" is a traditional Turkish dish, particularly popular in the Black Sea region. It involves layers of thin dough brushed with a mixture of oil and water, typically filled with a variety of ingredients such as minced meat, spinach, or cheese. The layered dough is then baked until golden brown, creating a savory and flaky pastry. Yağlama is enjoyed for its rich and comforting flavors. `,
  },
  {
    id: 8,
    title: "Mantı",
    category: "Central Anatolia",
    price: 12.99,
    img:
      "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/07/hazir-manti-resimli-yemek-tarifi(15).jpg",
    desc: `"Manti" is a Turkish dish that consists of small, handmade pasta filled with seasoned minced meat, often beef or lamb. These tiny dumplings are typically served boiled or steamed and are traditionally topped with a garlic-infused yogurt sauce and drizzled with red pepper-infused butter. Manti is known for its flavorful filling and the delightful combination of yogurt and butter that enhances its taste.`,
  },
  {
    id: 9,
    title: "Inegol Kofte",
    category: "Marmara Region",
    price: 3.99,
    img:
      "https://cdn.yemek.com/mnresize/4032/3024/uploads/2022/05/20220516053414894612.jpeg",
    desc: `"Inegol kofte" is a Turkish meatball originating from the city of Inegol. These meatballs are made from a mixture of ground beef or lamb, finely ground bulgur, and various spices. The mixture is shaped into small, round patties and traditionally grilled or cooked on a stovetop. Inegol kofte is appreciated for its succulent texture and is often served with accompaniments like flatbread, tomatoes, and green peppers.`,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const menuContainer = document.querySelector(".menu-items");
  const btnContainer = document.querySelector(".btn-container");
  const addButton = document.getElementById("addButton");
  const modal = document.getElementById("modal");
  const submitBtn = document.getElementById("submitBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  // Initial display of all menu items
  displayMenuItems(menu);

  // Get unique categories from the menu array
  const categories = getCategories(menu);

  // Display category buttons
  displayCategoryButtons(categories);

  // Add click event listeners to category buttons
  addFilterEventListeners(categories);

  // Add click event listener to the "Add" button
  addButton.addEventListener("click", function () {
    openModal();
  });

  // Add click event listener to the "Cancel" button in the modal
  cancelBtn.addEventListener("click", function () {
    closeModal();
  });

  // Add click event listener to the "Add Dish" button in the modal
  submitBtn.addEventListener("click", function () {
    addNewMenuItemFromForm();
    closeModal();
  });
});

// New Dish Add 
function addNewMenuItemFromForm() {
  const newTitle = document.getElementById("newTitle");
  const newCategory = document.getElementById("newCategory");
  const newPrice = document.getElementById("newPrice");
  const newImg = document.getElementById("newImg");
  const newDesc = document.getElementById("newDesc");

  const titleValue = newTitle.value;
  const categoryValue = newCategory.value;
  const priceValue = parseFloat(newPrice.value);
  const imgValue = newImg.value;
  const descValue = newDesc.value;

  if (titleValue && categoryValue && !isNaN(priceValue) && imgValue && descValue && descValue.length > 75) {
    const newId = generateUniqueId();
    const newItem = {
      id: newId,
      title: titleValue,
      category: categoryValue,
      price: priceValue,
      img: imgValue,
      desc: descValue,
    };
   
    // Add the new item to the menu array
    menu.push(newItem);    
    // Update the displayed menu items
    displayMenuItems(menu);

    // Clear the form fields
    newTitle.value = "";
    newCategory.value = "";
    newPrice.value = "";
    newImg.value = "";
    newDesc.value = "";
  } else {
    alert("Invalid input. Please provide valid information for the new dish.");
  }
}



// New Dish Add
function applyStylesToNewItem(newItemElement){
    newItemElement.classList.add("menu-item");
}

function generateUniqueId() {
  // A simple method to generate a unique numeric ID
  return new Date().getTime();
}

function openModal() {
  modal.style.display = "flex";
}

// Open Modal
function closeModal() {
  modal.style.display = "none";
  displayMenuItems(menu);
}

// Responsive Dish Creation

function getCategories(menuItems) {
  const categories = ["All"];
  menuItems.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  return categories;
}

function displayMenuItems(menuItems) {
  const menuContainer = document.querySelector(".menu-items");
  menuContainer.innerHTML = "";

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="photo" />
      <div class="item-info">
        <header class="price-info">        
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
      </div>
    `;

    menuContainer.appendChild(menuItem);
    applyStylesToNewItem(menuItem);
  });
}

function displayCategoryButtons(categories) {
  const btnContainer = document.querySelector(".btn-container");
  btnContainer.innerHTML = "";
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-dark", "btn-item");
    btn.textContent = category;
    btnContainer.appendChild(btn);
  });
}

function addFilterEventListeners(categories) {
  const btns = document.querySelectorAll(".btn-item");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = btn.textContent;
      const filteredMenu = category === "All" ? menu : menu.filter(item => item.category === category);
      displayMenuItems(filteredMenu);
    });
  });
}