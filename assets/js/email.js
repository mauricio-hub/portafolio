const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_demsho6';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Tu mensaje Fue Enviado, Pronto estaremos en cntacto. Gracias.');
      }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    })
    .then(() => {
      document.getElementById("from_name").value="";
      document.getElementById("email").value="";
     
      document.getElementById("message").value="";
      return true;
      })
});

