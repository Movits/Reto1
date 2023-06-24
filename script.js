const usuarioNombre = document.querySelector("#usuario-nombre");
const usuarioContrasena = document.querySelector("#usuario-contrasena");
const pBienVenido = document.querySelector("#bien-venido");

const USUARIO_1 = "rob";
const CONTRASENA_USUARIO_1 = "123";

let usuarioNombreIngresado = "def nombre";
let usuarioContrasenaIngresada = "def contrasena";

function login() {

    usuarioNombreIngresado = usuarioNombre.value;
    usuarioContrasenaIngresada = usuarioContrasena.value;

    if ((usuarioNombreIngresado == USUARIO_1) && (usuarioContrasenaIngresada == CONTRASENA_USUARIO_1)) {
        pBienVenido .innerHTML= "Bien venido " + USUARIO_1;
    } else {
        pBienVenido.innerHTML = "Usuario o Contrasena incorrectos";
    }
}
