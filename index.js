// Fork this repo

// Open the index html and use the chrome console to test your code

// Implement the deliverables in index.js

// When your finished, submit a pull request and I will review your code with you


const dragonsURL = 'http://localhost:3000/dragons'

const parseJSON = response => response.json()
const dragonDiv = document.getElementById('dragons-list')
var id = document.getElementById('id-input')
var name = document.getElementById('name-input')
var description = document.getElementById('description-input')

function getDragons() {
	fetch(dragonsURL)
		.then(parseJSON)
		.then(putDragonsOnPage)
}

function putDragonsOnPage(dragons) {
	dragonDiv.innerHTML = ""
	dragons.map(function(dragon) {
		dragonDiv.innerHTML += `
		<li data-event="showDragon" data-id="${dragon.id}" id="dragon-name-${dragon.id}">${dragon.name}</li>
		`
	})

	function showDragon(e) {
		e.preventDefault();
		// Make sure we know what was clicked / only run 
		// this function if the right type of element was clicked
		if(e.target.dataset.event == "showDragon"){
			let dragon = dragons.find( dragon => dragon.id == e.target.id)
			dragonDiv.innerHTML += `
			<form id="dragon-form">
			      Name: <input id="name-input" type="text" name="name" value="${dragon.name}"><br>
			      Description: <input id="description-input" value="${dragon.description}" type="text" name="description"><br>
			      <input type="submit" data-event="dragon-submit" id=${dragon.id}>
		    </form>`
		}

		if(e.target.dataset.event === 'dragon-submit') {
			fetch(dragonsURL+'/'+`${event.target.id}`, {
				method: 'PATCH',
				headers: {
	    			"Content-Type": "application/json"
					},
				body: JSON.stringify({
					name: document.getElementById('name-input').value,
					description: document.getElementById('description-input').value
				})
			}).then(getDragons)
		}
	}


	click = dragonDiv.addEventListener('click', showDragon)
}

getDragons();

// Need to assign a data-event to each new element created.
// Need to assing a id to each button so that it is associated with a specific instance of the creation.
// Create a function for to fetch from the database.
// Pass another function that displays database items into the fetch function. BE SURE TO set innerHTML to "" here for form reset.
// This function should encompass an event listener on an existing element and all if statements for each event listener event.
// Whenever the dataset is PATCH'ED or POST'ED, the page should re-call the original fetch function via a ".then" in order to reset the page.

