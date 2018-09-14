let data;
fetch('https://randomuser.me/api/?results=5&format=json').then(response => {
    return response.json();
}).then(dataResponse => {
	data = dataResponse;
    dataLength();
}).catch(err => {
    // Do something for an error here
});

function dataLength() {
    let users;
    let resultsLength = data.results.length;

    // the data.results wil become a item and the item wil contain the user value
    for(const item of data.results){
    	// select class from html file
        const list = document.querySelector('.contact__list');
    	const user = document.createElement("div");
    	const p = document.createElement("p");
        const image = document.createElement("img");
        const li = document.createElement('li');
        const span = document.createElement('span');

        user.classList.add("user");
        image.classList.add("image");


        // load in the first name, last name and phone number
        span.innerHTML = `${item.name.first} ${item.name.last}`;
        p.innerHTML = item.cell;
    	// load in the profile picture
    	image.src = item.picture.large;
    	// place them in the html
        list.appendChild(li);
        li.appendChild(image);
        li.appendChild(span);
        span.appendChild(p);


	}
}