

const formElement = document.getElementById("saveTransaction")

formElement.addEventListener("submit",(event)=>{

    event.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let results = {email,password}
    let resultsJSON = JSON.stringify(results)
    console.log(resultsJSON)


    fetch("http://localhost:3000/api/auth/login", {
    method: 'post',
    body: resultsJSON,
    headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
        if (response.status === 200) {
            // La petición se ha ejecutado correctamente, así que redirige a la página deseada
           // console.log("Email del usuario:", response.email);
           // localStorage.setItem('userEmail', response.email);

           localStorage.setItem('email', email);
            
            
            window.location.href = "loggedUser.html";
        } else {
            // Manejar otros códigos de respuesta si es necesario
            console.error("La petición falló con un código de respuesta diferente de 200.");
        }
    })
    .catch(error => {
        // Manejar errores de red u otros errores en la petición
        console.error("Error en la petición fetch:", error);
    });
    
    
    


})  



