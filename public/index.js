

document.write("<p>bienvenido</p>");






const enviar = async (e)=>{


    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

// let token = document.querySelector("token");
let code = document.getElementById("codigo").value


// const valor = {
	
// 	"code": "2jp62m",
// 	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIyNDQ3NDUyLCJleHAiOjE3MjI0NDc3NTJ9.VSjdwjCUJvGGpS3rVO8TmQmsyRkfJZ4RDHX3sjEfdkY"
	
// };

const valor = {
	code,
	token
}


    const resultado = await fetch("http://localhost:4000/api/v1/auth/validate-code", {
        method: "POST",
        body: JSON.stringify(valor),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(res => res.json())


    // const resultado = await fetch("http://localhost:4000/api/v1/user/", {
    //     method: "GET",
    //     headers: {"Content-type": "application/json; charset=UTF-8"}
    //   }).then(res => res.json())

    // console.log(valor.token);
    // console.log(valor.code);
    console.log(resultado);
console.log(resultado.success);
document.getElementById("respuesta1").innerHTML = resultado.message


}
