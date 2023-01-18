class ContactsAPI {
    static baseURL = "http://localhost:8080/save-contacts"

    static getContacts() {
        return axios.get(`${this.baseURL}/contacts`)
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    static getContact(id) {
        return axios.get(`${this.baseURL}/contacts/${id}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    static addContact(newContact) {
        return axios.post(`${this.baseURL}/contacts`, newContact)
            .then(response => {
                if (response.status === 201) {
                    return response.data
                } else {
                    console.log(response.status)
                }
            })
            .catch(error => console.log(error))
    }

    static updateContact(id, updatedContact) {
        return axios.put(`${this.baseURL}/contacts/${id}`, updatedContact)
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    static deleteContact(id) {
        return axios.delete(`${this.baseURL}/contacts/${id}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    }
}

function loadData() {
    ContactsAPI.getContacts()
        .then(data => {
            render(data)
        })
}

function render(data) {
    const dataContainer = document.querySelector("#data-container")
    dataContainer.innerHTML = ""
    data.forEach(item => {
        const newItem = document.createElement("div")
        newItem.textContent = JSON.stringify(item)
        dataContainer.appendChild(newItem)
    })
}

function createContact() {
    const newContact = {
        condominio: document.getElementById("condominio").value,
        email: document.getElementById("email").value,
        endereco: document.getElementById("endereco").value,
        bairro: document.getElementById("bairro").value,
        complemento: document.getElementById("complemento").value,
        cep: document.getElementById("cep").value,
        cidade: document.getElementById("cidade").value,
        nome_sindico: document.getElementById("nome_sindico").value,
        tel_sindico: document.getElementById("tel_sindico").value,
        cel_sindico: document.getElementById("cel_sindico").value,
        nome_zelador: document.getElementById("nome_zelador").value,
        tel_zelador: document.getElementById("tel_zelador").value,
        cel_zelador: document.getElementById("cel_zelador").value,
        observacao: document.getElementById("observacao").value
    }

    ContactsAPI.addContact(newContact)
        .then(data => {
            // Use os dados para renderizar a interface web
            alert("Contato adicionado com sucesso")
        })
}

function hideCreateContactForm() {
    document.getElementById("create-contact-form").classList.add("hidden");
  }
  
  function showCreateContactForm() {
    document.getElementById("create-contact-form").classList.remove("hidden");
  }
  
