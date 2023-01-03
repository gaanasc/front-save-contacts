const url = "http://localhost:8080/save-contacts/contacts"

function getUser() {
    axios.get(url)
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.log(error))
}

getUser()
