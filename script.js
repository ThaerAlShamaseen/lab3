 //  PART 1: Selecting and Styling Elements (1–10)

    document.getElementById("title").style.color = "red"; //1️
    document.querySelectorAll("p").forEach(p => p.style.backgroundColor = "lightgray"); //2️
    document.getElementById("title").textContent = "Welcome to the DOM Lab!"; //3️
    document.querySelectorAll("div").forEach(div => div.style.border = "1px solid black"); //4️
    document.querySelector("h1").style.fontSize = "36px"; //5️
    document.querySelectorAll(".highlight").forEach(el => el.style.color = "blue"); //6️
    document.querySelector("div").classList.add("active"); //7️
    document.body.style.backgroundColor = "lightblue"; //8️
    document.querySelectorAll("p").forEach(p => p.style.fontFamily = "Arial"); //9️
    document.getElementById("sampleImage").src = "https://placehold.co/150x150"; //10


    //  PART 2: Creating and Appending Elements (11–20)

    const newP = document.createElement("p"); //11
    newP.textContent = "This is a new paragraph created by JS.";
    document.body.appendChild(newP);

    const newLi = document.createElement("li"); //12
    newLi.textContent = "New list item added dynamically.";
    document.getElementById("list").appendChild(newLi);

    const newBtn = document.createElement("button"); //13
    newBtn.textContent = "Click Me!";
    document.querySelector("div").appendChild(newBtn);

    const newH2 = document.createElement("h2"); //14
    newH2.textContent = "Inserted H2 dynamically!";
    const firstP = document.querySelector("p");
    document.body.insertBefore(newH2, firstP);

    const newImg = document.createElement("img"); //15
    newImg.src = "https://placehold.co/80x80";
    newImg.width = 80;
    newImg.height = 80;
    document.body.appendChild(newImg);

    for (let i = 1; i <= 3; i++) { //16
      const li = document.createElement("li");
      li.textContent = `Extra item ${i}`;
      document.getElementById("list").appendChild(li);
    }

    const card = document.createElement("div"); //17
    card.className = "card";
    card.textContent = "This is a card created dynamically!";
    document.body.appendChild(card);

    const nameP = document.createElement("p"); //18
    nameP.textContent = "Created by: Your Name";
    document.body.appendChild(nameP);

    document.querySelectorAll("p").forEach(p => { //19
      const span = document.createElement("span");
      span.textContent = " [Edited]";
      p.appendChild(span);
    });

    const ul = document.getElementById("list"); //20
    ul.removeChild(ul.lastElementChild);


    //  PART 3: Event Handling (21–30)

    document.getElementById("mainButton").addEventListener("click", () => { //21
      alert("Main button clicked!");
    });

    document.querySelector("div").addEventListener("click", function() { //22
      this.style.backgroundColor = "lightgreen";
    });

    document.querySelectorAll("p").forEach(p => { //23
      p.addEventListener("mouseover", () => p.style.fontWeight = "bold");
      p.addEventListener("mouseleave", () => p.style.fontWeight = "normal"); //24
    });

    const hideBtn = document.createElement("button"); //25
    hideBtn.textContent = "Hide Image";
    document.body.appendChild(hideBtn);
    hideBtn.addEventListener("click", () => {
      document.getElementById("sampleImage").style.display = "none";
    });

    const showBtn = document.createElement("button"); //26
    showBtn.textContent = "Show Image";
    document.body.appendChild(showBtn);
    showBtn.addEventListener("click", () => {
      document.getElementById("sampleImage").style.display = "block";
    });

    let count = 0; //27
    const counterBtn = document.createElement("button");
    counterBtn.textContent = "Counter: 0";
    document.body.appendChild(counterBtn);
    counterBtn.addEventListener("click", () => {
      count++;
      counterBtn.textContent = `Counter: ${count}`;
    });

    document.getElementById("displayButton").addEventListener("click", () => { //28
      const inputVal = document.getElementById("userInput").value;
      document.getElementById("output").textContent = inputVal;
    });

    const colorBtn = document.createElement("button"); //29
    colorBtn.textContent = "Random Color";
    document.body.appendChild(colorBtn);
    colorBtn.addEventListener("click", () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.body.style.backgroundColor = randomColor;
    });

    document.addEventListener("keydown", (e) => { //30
      document.getElementById("output").textContent = `Key pressed: ${e.key}`;
    });


    //  PART 4: Modifying and Traversing DOM (31–40)

    document.querySelector("li").textContent = "First item updated!"; //31

    document.getElementById("mainButton").addEventListener("click", () => { //32
      console.log("Input value:", document.getElementById("userInput").value);
    });

    const pCount = document.querySelectorAll("p").length; //33
    console.log(`There are ${pCount} paragraphs.`);
    alert(`There are ${pCount} paragraphs.`);

    document.querySelectorAll("p").forEach(p => p.remove()); //34

    const oldH2 = document.querySelector("h2"); //35
    const newH2Replace = document.createElement("h2");
    newH2Replace.textContent = "New H2 replaced dynamically!";
    oldH2.replaceWith(newH2Replace);

    document.querySelectorAll("li").forEach(li => li.classList.add("highlighted")); //36

    document.querySelectorAll("div").forEach(div => { //37
      div.addEventListener("click", () => div.classList.toggle("active"));
    });

    const clone = document.getElementById("container").cloneNode(true); //38
    document.body.appendChild(clone);

    const scrollBtn = document.createElement("button"); //39
    scrollBtn.textContent = "Scroll to Bottom";
    document.body.appendChild(scrollBtn);
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });

    const fruits = ["Apple", "Banana", "Cherry", "Grapes"]; //40
    const fruitList = document.createElement("ul");
    fruitList.innerHTML = fruits.map(f => `<li>${f}</li>`).join("");
    document.body.appendChild(fruitList);