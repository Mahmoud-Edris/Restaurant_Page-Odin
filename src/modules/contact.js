export function contactPage() {
  function createElement(tag, text) {
    const element = document.createElement(tag);
    if (text) {
      element.textContent = text;
    }
    return element;
  }
  function formElements(tag, ...attributes) {
    const element = document.createElement(tag);
    for (let i = 0; i < attributes.length; i += 2) {
      element.setAttribute(attributes[i], attributes[i + 1]);
    }
    return element;
  }
  const title = createElement("h2", "Order Now!");
  const contactSection = createElement("section");
  const formBox = createElement("div");
  const form = createElement("form");
  const nameDiv = createElement("div");
  const nameLabel = formElements("label", "for", "name");
  nameLabel.textContent = "Name";
  const nameInput = formElements(
    "input",
    "id",
    "name",
    "placeholder",
    "Enter your name here",
  );

  const phoneDiv = createElement("div");
  const phoneLabel = formElements("label", "for", "phone");
  phoneLabel.textContent = "Phone";
  const phoneInput = formElements(
    "input",
    "type",
    "tel",
    "id",
    "phone",
    "placeholder",
    "Enter your phone number",
  );
  const messageDiv = createElement("div");
  const messageLabel = formElements("label", "for", "order");
  messageLabel.textContent = "Order";
  const message = formElements(
    "textarea",
    "placeholder",
    "Enter order here",
    "id",
    "order",
  );
  const locationDiv = createElement("div");
  const locationLabel = formElements("label", "for", "location");
  locationLabel.textContent = "Location";
  const locationInput = formElements(
    "textarea",
    "placeholder",
    "Enter Address here",
    "id",
    "location",
  );
  const buttonContainer = createElement("div");
  const submitButton = createElement("button", "Order");
  phoneDiv.append(phoneLabel, phoneInput);
  nameDiv.append(nameLabel, nameInput);
  messageDiv.append(messageLabel, message);
  locationDiv.append(locationLabel, locationInput);
  buttonContainer.append(submitButton);
  form.append(nameDiv, phoneDiv, messageDiv, locationDiv, buttonContainer);
  formBox.append(form);
  contactSection.append(title, formBox);
  title.classList.add(
    "text-xl",
    "text-white",
    "p-4",
    "bg-slate-800",
    "rounded",
    "border-t-4",
    "border-orange-700",
  );
  contactSection.classList.add(
    "w-full",
    "h-full",
    "flex",
    "flex-col",
    "justify-start",
    "items-center",
    "gap-4",
  );
  form.classList.add("bg-slate-400", "p-4", "rounded", "flex", "flex-col");
  message.classList.add(
    "bg-gray-600",
    "w-full",
    "rounded",
    "p-1",
    "border-b-4",
    "border-l-4",
  );
  locationInput.classList.add(
    "bg-gray-600",
    "w-full",
    "rounded",
    "p-1",
    "border-b-4",
    "border-r-4",
    "bg-orange-700",
  );
  buttonContainer.classList.add("text-end");
  submitButton.classList.add(
    "bg-white",
    "w-20",
    "rounded",
    "p-1",
    "cursor-pointer",
  );
  return contactSection;
}
