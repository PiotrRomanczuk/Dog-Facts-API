const DOG_URL_ALL = 'https://dog.ceo/api/breeds/list/all';

async function Fetching() {
	const response = await fetch(DOG_URL_ALL);
	const data = await response.json();
	createBreedList(data.message);
}

Fetching();

function createBreedList(breedList) {
	document.getElementById('breed').innerHTML = `
  <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList)
					.map(function (breed) {
						return `<option>${breed}</option>`;
					})
					.join('')}
      </select>
  `;
}

async function loadByBreed(breed) {
	if (breed != 'Choose a dog breed') {
		const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
		const data = await response.json();
		console.log(data);
	}
}
