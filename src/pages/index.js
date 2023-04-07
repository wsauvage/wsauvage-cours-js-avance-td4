import * as BulmaModal from '../modules/bulma-modals.mjs'
import swal from 'sweetalert';
import apiService from '../services/addresses-api.js'

window.onload = () => {

    BulmaModal.initModals()

    let searchInput = document.querySelector('#searchInput')
    let searchButton = document.querySelector('#searchButton')
    let output = document.querySelector('#output')
    let saveButton = document.querySelector("#saveButton")

    searchButton.addEventListener("click", async (event) => {
        let query = searchInput.value
        output.innerHTML = ''

        //Affiche le loader
        let addresses = await apiService.search(query)
        //Masque le loader

        addresses.map(result => {
            appendResultElement(result, output)
        })

        if (addresses.length === 0) {
            output.innerHTML = `
                <article class="message is-info">
                    <div class="message-body">
                        Aucune adresse à afficher.
                    </div>
                </article>
                `
        }
    })

    saveButton.addEventListener("click", event => {
        const modalTarget = document.getElementById("modalSaveAddress")
        let nameInput = modalTarget.querySelector('input[name="name"]')
        let descriptionInput = modalTarget.querySelector('textarea[name="description"]')

        const name = nameInput.value
        const description = descriptionInput.value

        const selectedAddress = JSON.parse(localStorage.getItem('selectedAddress'));

        let newPoi = {
            ...selectedAddress, ...{
                name: name,
                description: description
            }
        }

        let savedPois = localStorage.getItem('savedPois') ? JSON.parse(localStorage.getItem('savedPois')) : [];

        //On vérifie si le point d'intêret existe déjà avant de l'ajouter
        let existingPoi = savedPois.filter(poi => poi.properties.label === newPoi.properties.label)
        if (existingPoi.length === 0) {
            savedPois = [...savedPois, newPoi]
            localStorage.setItem('savedPois', JSON.stringify(savedPois))
            swal({
                title: "Good job!",
                text: "Point d'intérêt ajouté",
                icon: "success",
            });
        }
        else {
            swal({
                title: "Oups !",
                text: "Le point d'intérêt existe déjà",
                icon: "error",
            });
        }

        nameInput.value = ''
        descriptionInput.value = ''

    })
};

const appendResultElement = (adresse, output) => {
    let column = document.createElement("div");
    column.innerHTML = `
    <div class="column is-4-on-widescreen">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">${adresse.properties.label}</p>
            </header>
            <div class="card-content">
                <div class="content">
                    <ul>
                        <li>City : ${adresse.properties.city}</li>
                        <li>PostCode : ${adresse.properties.postcode}</li>
                        <li>Context : ${adresse.properties.context}</li>
                    </ul>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item has-text-white has-background-success" id="saveButton">Ajouter</a>
            </footer>
        </div>
    </div>
    `;

    let saveButton = column.querySelector('#saveButton');
    let content = column.querySelector('.content');

    saveButton.addEventListener("click", (event) => {
        const modalTarget = document.getElementById("modalSaveAddress")
        let modalTitle = modalTarget.querySelector(".modal-card-title")
        let addressDetails = modalTarget.querySelector(".address-details")
        modalTitle.innerHTML = adresse.properties.label
        addressDetails.innerHTML = content.innerHTML
        BulmaModal.openModal(modalTarget);

        localStorage.setItem('selectedAddress', JSON.stringify(adresse));

    });

    output.appendChild(column)
}


