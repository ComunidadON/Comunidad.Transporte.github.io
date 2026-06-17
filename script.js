/* window.addEventListener("load", function(){
  document.getElementById("idbtn").addEventListener("click", function(){
    alert("Formulario Enviado");
  })
}) */


const form = document.forms["formON"];
const btn = document.getElementById("idbtn");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    btn.classList.add("loading");
    btn.disabled = true;

    const datos = new FormData(form);

    try {

        const respuesta = await fetch(form.action, {
            method: "POST",
            body: datos
        });

        const resultado = await respuesta.json();

        if (resultado.result === "success") {

            mensaje.innerHTML = "✅ Formulario enviado correctamente";
            mensaje.classList.add("success");

            form.reset();

        } else {

            mensaje.innerHTML = "❌ Ocurrió un error";
        }

    } catch (error) {

        mensaje.innerHTML = "❌ No se pudo enviar el formulario";

    } finally {

        btn.classList.remove("loading");
        btn.disabled = false;

    }

});