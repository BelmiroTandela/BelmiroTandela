
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");
  let loader;
  
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
      Notiflix.Report.warning("Campos não preenchido", "Por favor, preencha todos os campos do formulário.", "OK!");
      return;
    }

    if (nome === "") {
      Notiflix.Report.warning("Campos não preenchido", "Por favor, preencha o campo Nome.", "OK!");
      return;
    }

    if (email === "" || !isValidEmail(email)) {
      Notiflix.Report.warning("Campos não preenchido", "Por favor, digite um email válido", "OK!");
      return;
    }

    if (mensagem === "") {
      Notiflix.Report.warning("Campos não preenchido", "Por favor, preencha o campo Mensagem.", "OK!");
      return;
    }

    if (assunto === "") {
      Notiflix.Report.warning("Campos não preenchido", "Por favor, preencha o campo Assunto.", "OK!");
      return;
    }

    loader = Notiflix.Loading.standard('Enviado a sua Mensagem para mim...');

    // Configurar objeto FormData corretamente
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("assunto", assunto);
    formData.append("mensagem", mensagem);

    fetch("https://formsubmit.co/belmirotandela@gmail.com", {
      method: "POST",
      body: formulario,
    })
      .then((response) => {
        if (response.ok) {
          // A resposta HTTP foi bem-sucedida (status 200)
          Notiflix.Loading.remove(loader);
          Notiflix.Report.success("Mensagem Enviada", "Sua Mensagem de Conctacto para Belmiro Tandela foi enviada com sucesso!", "OK!", function() {
            formulario.reset();
          });
        } else {
          // A resposta HTTP indica um erro
          Notiflix.Loading.remove(loader);
          Notiflix.Report.failure("Mensagem não Enviada", "Sua Mensagem de Conctacto para Belmiro Tandela não foi enviada com sucesso. Caso Queira lhe contactar ligue para +244 924244917!", "Entendi!");
        }
      })
      .catch((error) => {
        Notiflix.Loading.remove(loader);
        Notiflix.Report.failure("Mensagem não Enviada", "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente!", "OK!");
      });

  });

  function isValidEmail(email) {
    // Implemente sua lógica de validação de e-mail aqui
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
