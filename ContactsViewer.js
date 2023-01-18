class ContactsView {
    constructor() {
        this.dataContainer = document.getElementById("data-container");
        this.getContactsButton = document.getElementById("get-contacts");
        this.getContactsButton.addEventListener("click", this.loadData.bind(this));
    }
    loadData() {
        ContactsAPI.getContacts()
        .then(data => {
            this.render(data);
        })
        .catch(error => {
            console.log(error);
            this.dataContainer.innerHTML = "Não foi possível carregar os dados.";
        });
    }
    render(data) {
        let html = "";
        data.forEach(contact => {
            html += `<div class="contact-card">
            <h2>${contact.nome_sindico}</h2>
            <p>Condomínio: ${contact.condominio}</p>
            <p>Email: ${contact.email}</p>
            <p>Endereço: ${contact.endereco}</p>
            <p>Bairro: ${contact.bairro}</p>
            <p>Complemento: ${contact.complemento}</p>
            <p>CEP: ${contact.cep}</p>
            <p>Cidade: ${contact.cidade}</p>
            <p>Nome do Síndico: ${contact.nome_sindico}</p>
            <p>Telefone do Síndico: ${contact.tel_sindico}</p>
            <p>Celular do Síndico: ${contact.cel_sindico}</p>
            <p>Nome do Zelador: ${contact.nome_zelador}</p>
            <p>Telefone do Zelador: ${contact.tel_zelador}</p>
            <p>Celular do Zelador: ${contact.cel_zelador}</p>
            <p>Observação: ${contact.observacao}</p>
        </div>`;
});
this.dataContainer.innerHTML = html;
}
}