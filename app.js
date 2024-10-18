// ANIMACION DE MOVIMIENTO INICIAR/REGISTRARSE
const BOTON_SECCION_INICIAR = document.getElementById("B_I");
const BOTON_SECCION_REGISTRARSE = document.getElementById("B_R");
const FORMULARIO = document.getElementById("FORMULARIO");

const derecha = () => {
    FORMULARIO.style.transform = "translateX(0%)";
    HR.style.transform = "translateX(0%)";
};

const isquierda = () => {
    FORMULARIO.style.transform = "translateX(-50%)";
    HR.style.transform = "translateX(100%)";
};

BOTON_SECCION_INICIAR.addEventListener("click", derecha);
BOTON_SECCION_REGISTRARSE.addEventListener("click", isquierda);












// ALERTA LIBRERIA !!
const BOTON_INCIAR_SESION = document.getElementById("boton_iniciar_sesion");
const BOTON_REGISTRARSE = document.getElementById("boton_registrarse");


const alertaIniciarSesion = () => {
    const USUARIO = document.getElementById("inicio_usuario");
    const GMAIL = document.getElementById("inicio_gmail");
    const CONTRASEÑA = document.getElementById("inicio_contraseña");


    if (USUARIO.value == "" || GMAIL.value == "" || CONTRASEÑA.value == "") {
        
    } else {
        const usuario_verificado = USUARIO.value;

        let timerInterval;
        Swal.fire({
            title: "Verificando por favor espere",
            html: "Finalizando en <b></b>",
            timer: 3000,
            timerProgressBar: true,
            heightAuto: false,
            background: "#553568",
            color: "#c0f6fc",

            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire({
                    title: "Verificacion Completada",
                    text: "Bienvenido " + usuario_verificado,
                    icon: "success",
                    heightAuto: false,
                    background: "#553568",
                    color: "#c0f6fc",
                });

                USUARIO.value = "";
                GMAIL.value = "";
                CONTRASEÑA.value = "";
            }
        });
    }
}






// DATOS SECCION REGISTRAR
const USUARIO_2 = document.getElementById("registrar_usuario");
const FECHA_DE_NACIMIENTO = document.getElementById("registrar_fecha");
const GMAIL_2 = document.getElementById("registrar_gmail");
const CONTRASEÑA_2 = document.getElementById("registrar_contraseña");

const alertaCrearCuenta = () => {
    if (USUARIO_2.value == "" || FECHA_DE_NACIMIENTO.value == "" || GMAIL_2.value == "" || CONTRASEÑA_2.value == "") {

    } else {
        Swal.fire({
            title: "estas seguro?",
            text: "Crearas una nueva cuenta",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Crear",
            cancelButtonText: "Cancelar",
            heightAuto: false,
            background: "#553568",
            color: "#c0f6fc",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Creado",
                    text: "Su cuenta fue creada",
                    icon: "success",
                    heightAuto: false,
                    background: "#553568",
                    color: "#c0f6fc"
                });

                USUARIO_2.value = "";
                FECHA_DE_NACIMIENTO.value = "";
                GMAIL_2.value = "";
                CONTRASEÑA_2.value = "";
            }
        });
    }
}


BOTON_INCIAR_SESION.addEventListener("click", alertaIniciarSesion)
BOTON_REGISTRARSE.addEventListener("click", alertaCrearCuenta)