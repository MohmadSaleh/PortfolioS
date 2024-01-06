class ProjectCard {
    constructor(title, description, img, alt, link) {
        this.title = title;
        this.description = description;
        this.img = img;
        this.alt = alt;
        this.link = link;
    }
}
let cards = [new ProjectCard('Project1', 'Description of Project 1', "/styles/portfolioImgs/proj1.jpg", "Project 1", "project1-main.html"),
new ProjectCard('Project2', 'Description of Project 2', "/styles/portfolioImgs/proj2.png", "Project 2", "project2-main.html"),
new ProjectCard('Project3', 'Description of Project 3', "/styles/portfolioImgs/proj3.jpg", "Project 3", "project3-main.html"),
new ProjectCard('Project4', 'Description of Project 4', "/styles/portfolioImgs/proj4.png", "Project 4", "project4-main.html"),
new ProjectCard('Project5', 'Description of Project 5', "/styles/portfolioImgs/proj5.jpg", "Project 5", "project5-main.html"),
new ProjectCard('Project6', 'Description of Project 6', "/styles/portfolioImgs/proj6.png", "Project 6", "project6-main.html"),
new ProjectCard('Project7', 'Description of Project 7', "/styles/portfolioImgs/Snake.jpg", "Project 7", "/jsProject/Snake/index.html"),
new ProjectCard('Project8', 'Description of Project 8', "/styles/portfolioImgs/cardWar.jpg", "Project 8", "/jsProject/cardWar/index.html"),
new ProjectCard('Project9', 'Description of Project 9', "/styles/portfolioImgs/mathEx.jpg", "Project 9", "/jsProject/mathEx/index.html"),
new ProjectCard('Project10', 'Description of Project 10', "/styles/portfolioImgs/TicTac.jpg", "Project 10", "/jsProject/X-O/index.html"),
new ProjectCard('Project11', 'Description of Project 11', "/styles/portfolioImgs/countries.jpg", "Project 11", "/jsProject/countries/index.html"),
new ProjectCard('Project12', 'Description of Project 12', "/styles/portfolioImgs/MyAccount.jpg", "Project 12", "/jsProject/myAccount/myAccount.html")];

let buildingTech = [
    "/styles/portfolioImgs/BuildingTech1.png",
    "/styles/portfolioImgs/BuildingTech2.png",
    "/styles/portfolioImgs/BuildingTech3.png",
    "/styles/portfolioImgs/BuildingTech4.png",
    "/styles/portfolioImgs/BuildingTech5.png",
    "/styles/portfolioImgs/BuildingTech6.png",
    "/styles/portfolioImgs/BuildingTech7.png",
    "/styles/portfolioImgs/BuildingTech8.png",
    "/styles/portfolioImgs/BuildingTech9.png",
    "/styles/portfolioImgs/BuildingTech10.png",
    "/styles/portfolioImgs/BuildingTech11.png",
    "/styles/portfolioImgs/BuildingTech1.png",
    "/styles/portfolioImgs/BuildingTech2.png",
    "/styles/portfolioImgs/BuildingTech3.png",
    "/styles/portfolioImgs/BuildingTech4.png",
    "/styles/portfolioImgs/BuildingTech5.png",
    "/styles/portfolioImgs/BuildingTech6.png",
    "/styles/portfolioImgs/BuildingTech7.png",
    "/styles/portfolioImgs/BuildingTech8.png",
    "/styles/portfolioImgs/BuildingTech9.png",
    "/styles/portfolioImgs/BuildingTech10.png",
    "/styles/portfolioImgs/BuildingTech11.png",
    "/styles/portfolioImgs/BuildingTech1.png",
    "/styles/portfolioImgs/BuildingTech2.png",
    "/styles/portfolioImgs/BuildingTech3.png",
    "/styles/portfolioImgs/BuildingTech4.png",
    "/styles/portfolioImgs/BuildingTech5.png",
    "/styles/portfolioImgs/BuildingTech6.png",
    "/styles/portfolioImgs/BuildingTech7.png",
]


function porjects() {
    document.getElementById('section3').style.display = 'none';
    document.getElementById('section5').style.display = 'none';
    document.getElementById('large-header').style.height = '10vh';
    document.getElementById('large-header').style.overflow = 'hidden';
    document.getElementById('demo-canvas').style.height = '15vh';
    document.getElementById('demo-canvas').style.width = '100vw';
    displayProjectCards();
    displayTeckBar();
    document.getElementById('section4').style.display = 'grid';
    document.getElementById('section2').style.display = 'block';
}
function home() {
    document.getElementById('section3').style.display = 'flex';
    document.getElementById('large-header').style.height = '100vh';
    document.getElementById('large-header').style.overflow = 'visable';
    document.getElementById('demo-canvas').style.height = '100vh';
    document.getElementById('demo-canvas').style.width = '100vw';
    document.getElementById('section4').style.display = 'none';
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section5').style.display = 'none';
}
function contact() {
    document.getElementById('section3').style.display = 'none';
    document.getElementById('section5').style.display = 'flex';
    document.getElementById('large-header').style.height = '10vh';
    document.getElementById('large-header').style.overflow = 'hidden';
    document.getElementById('demo-canvas').style.height = '15vh';
    document.getElementById('demo-canvas').style.width = '100vw';
    displayProjectCards();
    document.getElementById('section4').style.display = 'none';
    document.getElementById('section2').style.display = 'none';
}

function displayProjectCards() {
    document.getElementById('section4').innerHTML = `<h2>My Project</h2>`;
    for (let card of cards) {
        document.getElementById('section4').innerHTML += `
     <div class="project-card">
                <img src="${card.img}" alt="${card.alt}">
                <div class="project-info">
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                    <a href="${card.link}">Reviw</a>
                    <a href="${card.link}">Download</a>
                </div>
            </div>`
    }
}
function displayTeckBar() {
    document.getElementById('tList').innerHTML = ``

    for (let techBar of buildingTech) {
        document.getElementById('tList').innerHTML += `
        <li class='techListItem'><img src=${techBar} alt="site Buliding Technology"></li>`

    }
}