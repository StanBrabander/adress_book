let data;
fetch('https://randomuser.me/api/?results=1&format=json').then(response => {
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
    	const mainBody = document.querySelector(".main-body");
    	const user = document.createElement("div");
    	const p = document.createElement("p");
        const image = document.createElement("img");

        user.classList.add("user");
        image.classList.add("image");
        p.classList.add("name");


        // load in the first name, last name and phone number
    	p.innerText = `${item.name.first} ${item.name.last} ${item.phone}`;
    	// load in the profile picture
    	image.src = item.picture.large;
    	// place them in the html
		user.appendChild(p);
        user.appendChild(image);
    	mainBody.appendChild(user);
	}
}