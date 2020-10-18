//Create map
const map = L.map('mapid').setView([-27.2058303,-49.623216], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

let marker;

//create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon from map
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// photos upload

function addPhotoField() {
    //cat the photo container #images
    const container = document.querySelector('#images')
    //cat the container to duplicate .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //check if the camp is empty, no add to the photo container
    const input =  newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //clear the text camp
    input.value = ""
    //add the clone to the #images container
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //clear the camp value
        span.parentNode.children[0].value = ""

        return
    }
    //delete the camp
    span.parentNode.remove();

}

//select yes or no
function toggleSelect(event) { 
    //remove the .active class
    document.querySelectorAll('.button-select button')
    .forEach((button) => {button.classList.remove('active')
}) 

    //insert the class .active in the clicked button
    const button = event.currentTarget
    button.classList.add('active')
    
    //att the hidden input with the select value
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
    //get the click button

    //check yes or no
    
}