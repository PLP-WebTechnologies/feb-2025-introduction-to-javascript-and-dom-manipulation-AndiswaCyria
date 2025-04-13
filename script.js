document.getElementById("changeTextBtn").addEventListener("click", () => {
    const desc = document.getElementById("description");
    desc.textContent = "The paragraph text has been changed using JavaScript!";
});

document.getElementById("toggleStyleBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

document.getElementById("addElementBtn").addEventListener("click", () => {
    const container = document.getElementById("container");
    if (!document.getElementById("newElement")) {
        const newElement = document.createElement("p");
        newElement.id = "newElement";
        newElement.textContent = "This element was added via JavaScript!";
        container.appendChild(newElement);
    }
});

document.getElementById("removeElementBtn").addEventListener("click", () => {
    const element = document.getElementById("newElement");
    if (element) {
        element.remove();
    }
});