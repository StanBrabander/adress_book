let data;function dataLength(){data.results.length;for(const item of data.results){const list=document.querySelector(".contact__list"),user=document.createElement("div"),p=document.createElement("p"),image=document.createElement("img"),li=document.createElement("li"),span=document.createElement("span");user.classList.add("user"),image.classList.add("image"),span.innerHTML=`${item.name.first} ${item.name.last}`,p.innerHTML=item.cell,image.src=item.picture.large,list.appendChild(li),li.appendChild(image),li.appendChild(span),span.appendChild(p)}}fetch("https://randomuser.me/api/?results=5&format=json").then(response=>response.json()).then(dataResponse=>{data=dataResponse,dataLength()}).catch(err=>{});