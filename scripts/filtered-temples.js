const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const templeGrid = document.querySelector(".temple-grid")

const homeTempleLink = document.querySelector("#home")
const oldTempleLink = document.querySelector("#old")
const newTempleLink = document.querySelector("#new")
const largeTempleLink = document.querySelector("#large")
const smallTempleLink = document.querySelector("#small")

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
        templeName: "Houston Texas Temple",
        location: "Houston, Texas Temple",
        dedicated: "2000, August, 26-27",
        area: 33970,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/houston-texas-temple/houston-texas-temple-23480-main.jpg"
    },
    {
        templeName: "Las Vegas Nevada Temple",
        location: "Las Vegas, Nevada Temple",
        dedicated: "1989, December, 16-18",
        area: 80350,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-35604-main.jpg"
    },
    {
        templeName: "Meridian Idaho Temple",
        location: "Meridian, Idaho Temple",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-65841-main.jpg"
    }
];

function getTempleYear(temple) {
    return parseInt(temple.dedicated.split(",")[0])
}

function createTempleCard(filteredTemples) {
    templeGrid.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class = "label"> Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class = "label"> Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class = "label"> Size: </span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);
    })
}

homeTempleLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples)
})

oldTempleLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => getTempleYear(temple) < 1900));
});

newTempleLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => getTempleYear(temple) > 2000));
});

largeTempleLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallTempleLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

createTempleCard(temples);