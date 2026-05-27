export function menuPage() {
  function createElement(tag, text = "") {
    const element = document.createElement(tag);
    if (text) {
      element.textContent = text;
    }
    return element;
  }
  const menuSection = createElement("section");
  const title = createElement("h2", "Our Menu");
  const container = createElement("div");
  const dishContainer = createElement("div");
  const menu = [
    {
      name: "Grilled Chicken Meal",
      info: "Tender grilled chicken served with rice and special sauce",
      price: "120EGP",
    },
    {
      name: "Beef Steak",
      info: "Juicy beef steak cooked medium with herbs and butter",
      price: "180EGP",
    },
    {
      name: "Chicken Pasta Alfredo",
      info: "Creamy pasta with grilled chicken and parmesan sauce",
      price: "110EGP",
    },
    {
      name: "Cola",
      info: "Classic refreshing soft drink",
      price: "20EGP",
    },
    {
      name: "Orange Juice",
      info: "Freshly squeezed orange juice",
      price: "25EGP",
    },
    {
      name: "Water",
      info: "Pure bottled water",
      price: "10EGP",
    },
    {
      name: "Fries",
      info: "Crispy golden potato fries",
      price: "30EGP",
    },
    {
      name: "Onion rings",
      info: "Fried onion rings with crispy coating",
      price: "35EGP",
    },
    {
      name: "Chocolate cake",
      info: "Rich chocolate layered cake with fudge topping",
      price: "50EGP",
    },
    {
      name: "Ice Cream Sundae",
      info: "Rich chocolate layered cake with fudge topping",
      price: "45EGP",
    },
  ];
  menu.forEach((element) => {
    const dish = createElement("div");
    const dishName = createElement("h2", element.name);
    const dishInfo = createElement("p", element.info);
    const price = createElement("p", element.price);
    dish.append(dishName, dishInfo, price);
    container.append(dish);
    dish.classList.add(
      "bg-sky-300",
      "rounded-b",
      "lg:w-2/5",
      "md:w-2/5",
      "flex",
      "flex-col",
      "justify-between",
    );
    dishContainer.appendChild(container);
    menuSection.append(title, dishContainer);
    dishName.classList.add("text-xl", "bg-orange-700", "font-bold", "p-1");
    dishInfo.classList.add("p-2");
    price.classList.add("p-2", "text-green-200", "font-bold");
  });
  container.classList.add(
    "flex",
    "justify-evenly",
    "flex-col",
    "gap-2",
    "lg:flex-row",
    "lg:flex-wrap",
    "md:flex-row",
    "md:flex-wrap",
  );
  title.classList.add(
    "text-xl",
    "text-white",
    "p-4",
    "bg-slate-800",
    "rounded",
    "border-t-4",
    "border-orange-700",
  );
  dishContainer.classList.add(
    "w-3/4",
    "p-4",
    "h-full",
    "rounded",
    "bg-slate-600",
    "flex",
    "flex-col",
    "items-center",
  );
  menuSection.classList.add(
    "w-full",
    "h-full",
    "rounded",
    "flex",
    "flex-col",
    "gap-4",
    "items-center",
    "justify-center",
  );
  return menuSection;
}
