function sendForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  alert(`Seus dados foram enviados ao servidor.
    Nome: ${name}
    Email: ${email}
    Comentário: ${comment}
    `);
}
