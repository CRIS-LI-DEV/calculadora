

let alamacenamiento = ''
let elemento_1 = 0
let elemento_2 = 0;

display = document.getElementById('display')

btn_0 = document.getElementById('n_0');
btn_1 = document.getElementById("n_1");
btn_2 = document.getElementById("n_2");
btn_3 = document.getElementById("n_3");
btn_4 = document.getElementById("n_4");
btn_5 = document.getElementById("n_5");
btn_6 = document.getElementById("n_6");
btn_7 = document.getElementById("n_7");
btn_8 = document.getElementById("n_8");
btn_9 = document.getElementById("n_9");



btn_0.addEventListener('click', () => {
    alamacenamiento += "0";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});

btn_1.addEventListener("click", () => {
    alamacenamiento += "1";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});

btn_2.addEventListener("click", () => {
    alamacenamiento += "2";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento
});

btn_3.addEventListener("click", () => {
    alamacenamiento += "3";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});

btn_4.addEventListener("click", () => {
    alamacenamiento += "4";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});

btn_5.addEventListener("click", () => {
    alamacenamiento += "5";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});

btn_6.addEventListener("click", () => {
    alamacenamiento += "6";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});

btn_7.addEventListener("click", () => {
    alamacenamiento += "7";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});

btn_8.addEventListener("click", () => {
    alamacenamiento += "8";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});

btn_9.addEventListener("click", () => {
    alamacenamiento += "9";
    console.log(alamacenamiento);
    display.innerHTML = alamacenamiento;
});


btn_s = document.getElementById('n_s')
btn_r = document.getElementById("n_r");
btn_m = document.getElementById("n_m");
btn_d = document.getElementById("n_d");

btn_i = document.getElementById("n_i");
btn_c = document.getElementById("n_c");

const suma = () => {
    elemento_2 = Number(alamacenamiento);
    resultado = elemento_1 + elemento_2;
    elemento_1 = resultado;
    alamacenamiento = '';
    display.innerHTML = resultado;
    e_1.innerHTML = resultado;
    display.innerHTML = resultado;
}

const resta = () => {
    elemento_2 = Number(alamacenamiento);
    resultado = elemento_1 - elemento_2;
    elemento_1 = resultado;
    alamacenamiento = "";
    display.innerHTML = resultado;
    e_1.innerHTML = resultado;
    display.innerHTML = resultado;
};

const multi = () => {
    elemento_2 = Number(alamacenamiento);
    resultado = elemento_1 * elemento_2;
    elemento_1 = resultado;
    alamacenamiento = "";
    display.innerHTML = resultado;
    e_1.innerHTML = resultado;
    display.innerHTML =resultado;
};

const div = () => {
    elemento_2 = Number(alamacenamiento);
    resultado = elemento_1 / elemento_2;
    elemento_1 = resultado;
    alamacenamiento = "";
    display.innerHTML = resultado;
    e_1.innerHTML = resultado;
    display.innerHTML = resultado;
};

const igual = () => {
    elemento_2 = Number(alamacenamiento);
    elemento_1 = resultado
    display.innerHTML = resultado;
}


btn_s.addEventListener('click', suma)
btn_r.addEventListener('click', resta)
btn_m.addEventListener("click", multi);
btn_d.addEventListener("click", div);
btn_i.addEventListener("click", igual);

btn_c.addEventListener("click", () => {

    alamacenamiento = "";
    elemento_1 = 0;
    elemento_2 = 0;
    display.innerHTML = "";

});