const url = "http://localhost:8080/save-contacts/contacts"
const urlPost = "http://localhost:8080/save-contacts/"

const newUser = {
    condominio: "Condominio Teste",
    email: "ap@hotmail.com",
    endereco: "rua norte, 2",
    bairro: "xavier",
    complemento: "Estrada 22",
    cep: "444646555",
    cidade: "São Paulo",
    nome_sindico: "Pedro",
    tel_sindico: 1234567963,
    cel_sindico: 1234522222,
    nome_zelador: "Laura",
    tel_zelador: 123456789,
    cel_zelador: 123456789,
    observacao: "condominio pequeno"
}

function getUser() {
    axios.get(url)
        .then(response => {
            const data = response.data
            results.textContent = JSON.stringify(data)

        })
        .catch(error => console.log(error))
}

getUser()

function addNewUser() {
    axios.post(urlPost, newUser)
    .then(response => {
        alert(response.data)
    })
    .catch(error => console.log(erro))
}
addNewUser()