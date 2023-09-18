
const display = document.getElementById("displayInfo")



document.addEventListener("DOMContentLoaded",  (event)=> {
    event.preventDefault()
    // Obtiene el nombre de usuario de localStorage
    const email = localStorage.getItem('email');
    if (email) {
        // Actualiza el contenido del elemento userName
        document.getElementById("email").textContent = email;
        fetch(`http://localhost:3000/api/auth/login/${email}`,{

        method:'get',
        headers:{

            "Content-type":"application/json"
        }

            

        }).then(response=>{
            return response.json()
        })
        
        .then(data=>{
            
            console.log(data.data.name)
            document.getElementById("Username").textContent = data.data.name
        })
        .catch(res=>{
            console.error("not working")
        })
    }
});

