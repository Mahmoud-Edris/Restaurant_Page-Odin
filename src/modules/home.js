export function homePage() {
  const homeSection = document.createElement("section");
  function createElement(tag, text = "") {
    const element = document.createElement(tag);
    if (text) {
      element.textContent = text;
    }
    return element;
  }
  const title = createElement("h2", "Home Page");
  const welcomeDiv = createElement("div");
  const welcomeMessage = createElement(
    "p",
    "Welcome To Edris's Restaurant Website, Our Restaurant has been made since 1980 and we have 4 stars rate, Hope you enjoy, You can book tables here",
  );
  const book = createElement("button", "Book Table Now");
  const timeDiv = createElement("div");
  const timeHeader = createElement("h2", "Appointments");
  const timeParagraphs = [
    {day: "Saturday", time: "12pm - 12am"},
    {day: "Sunday", time: "12pm - 4am"},
    {day: "Monday", time: "1pm - 1am"},
    {day: "Tuesday", time: "12pm - 4am"},
    {day: "Wednesday", time: "12pm - 12am"},
    {day: "Thursday", time: "24/7"},
    {day: "Friday", time: "Break"},
  ];

  const locationDiv = createElement("div");
  const locationHeader = createElement("h2", "Location");
  const locationText = createElement("p", "Egypt,Sharqia");
  welcomeDiv.append(welcomeMessage, book);
  locationDiv.append(locationHeader, locationText);
  timeDiv.appendChild(timeHeader);
  timeParagraphs.forEach((element) => {
    const div = document.createElement("div");
    const dayP = document.createElement("p");
    const timeP = document.createElement("p");
    div.classList.add("flex", "w-full", "items-center", "justify-between");
    dayP.textContent = element.day;
    timeP.textContent = element.time;
    div.append(dayP, timeP);
    timeDiv.appendChild(div);
  });

  homeSection.append(title, welcomeDiv, timeDiv, locationDiv);

  welcomeDiv.classList.add(
    "w-3/4",
    "h-60",
    "p-4",
    "flex",
    "flex-col",
    "items-center",
    "bg-slate-600",
    "rounded",
    "gap-4",
    "justify-around",
    "hover:opacity-90",
  );
  welcomeMessage.classList.add(
    "w-full",
    "text-black",
    "text-center",
    "font-bold",
  );
  book.classList.add(
    "bg-red-500",
    "rounded",
    "cursor-pointer",
    "p-1",
    "hover:opacity-80",
    "text-white",
  );
  locationDiv.classList.add(
    "w-3/4",
    "bg-slate-600",
    "p-4",
    "rounded",
    "hover:opacity-90",
  );
  locationHeader.classList.add("text-center", "text-xl", "font-bold");
  locationText.classList.add("text-white", "text-center");
  timeDiv.classList.add(
    "w-3/4",
    "p-4",
    "bg-slate-400",
    "hover:opacity-90",
    "rounded",
  );
  timeHeader.classList.add("text-center", "text-xl", "font-bold");
  homeSection.classList.add(
    "w-full",
    "h-full",
    "flex",
    "flex-col",
    "items-center",
    "gap-4",
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
  return homeSection;
}
