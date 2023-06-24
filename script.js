const usuarioNombre = document.querySelector("#usuario-nombre");
const usuarioContrasena = document.querySelector("#usuario-contrasena");
const pBienVenido = document.querySelector("#bien-venido");
const cuerpoPagina = document.querySelector("body");
const imagenCambio = document.querySelector("#img");

const USUARIO_1 = "rob";
const CONTRASENA_USUARIO_1 = "123";

let usuarioNombreIngresado = "def nombre";
let usuarioContrasenaIngresada = "def contrasena";

const TIPO_FUENTE = "monospace";
const IMG_1 = "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg";
const IMG_2 = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
const IMG_3 = "https://clipart-library.com/data_images/49138.png";
const COLOR_TXT_1 = "green";
const COLOR_TXT_2 = "red";

imagenCambio.src = IMG_1
cuerpoPagina.style.backgroundColor = "#0d1117";
cuerpoPagina.style.color = "#e6edf3";

function modificarPagina(tipoFuente,colorTxt,imgCambio) {
    pBienVenido.style.fontFamily = tipoFuente
    pBienVenido.style.color = colorTxt
    imagenCambio.src = imgCambio
}

function login() {

    usuarioNombreIngresado = usuarioNombre.value;
    usuarioContrasenaIngresada = usuarioContrasena.value;

    if ((usuarioNombreIngresado == USUARIO_1) && (usuarioContrasenaIngresada == CONTRASENA_USUARIO_1)) {
        pBienVenido .innerHTML= "Bienvenido " + USUARIO_1;
        modificarPagina(TIPO_FUENTE,COLOR_TXT_1,IMG_2);
    } else {
        pBienVenido.innerHTML = "Usuario o Contrasena incorrectos";
        modificarPagina(TIPO_FUENTE,COLOR_TXT_2,IMG_3);
    }
}
