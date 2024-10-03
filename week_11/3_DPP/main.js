import Pet from './Pet.js';

const pets = [];

function createPetElement(pet) {
    const petElement = document.createElement('div');
    petElement.className = 'pet';
    petElement.innerHTML = `
        <h3>${pet.name} (${pet.type})</h3>
        <p>Health: <span class="health">${pet.getHealth()}</span></p>
        <button class="feed">Feed</button>
        <button class="play">Play</button>
        ${pet.type === 'cat' ? '<button class="scratch">Scratch</button>' : ''}
    `;

    petElement.querySelector('.feed').addEventListener('click', () => {
        pet.feed();
        updateHealth(petElement, pet);
    });

    petElement.querySelector('.play').addEventListener('click', () => {
        pet.play();
        updateHealth(petElement, pet);
    });

    if (pet.type === 'cat') {
        petElement.querySelector('.scratch').addEventListener('click', () => {
            alert(`${pet.name} is scratching!`);
        });
    }

    return petElement;
}

function updateHealth(petElement, pet) {
    petElement.querySelector('.health').innerText = pet.getHealth();
}

function renderPets() {
    const petContainer = document.getElementById('pet-container');
    petContainer.innerHTML = '';
    pets.forEach(pet => {
        const petElement = createPetElement(pet);
        petContainer.appendChild(petElement);
    });
}

function addPet(event) {
    event.preventDefault();
    const name = document.getElementById('pet-name').value;
    const type = document.getElementById('pet-type').value;
    if (name && type) {
        const newPet = new Pet(name, type);
        pets.push(newPet);
        renderPets();
    } else {
        alert('Please enter both name and type.');
    }
}

function init() {
    document.getElementById('add-pet-form').addEventListener('submit', addPet);
    renderPets();
}

document.addEventListener('DOMContentLoaded', init);
