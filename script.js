const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzwxvCpcdJVfVYJnUGviUIBU23Mw_xrtuh2YPixxhxh4zzjO7PKtGqkx5vwFzKAbHDC/exec';

function enviarDatos(nombre, cantidad, fechaIngreso, fechaRetiro, retiradoPor) {
    const data = {
        nombre: nombre,
        cantidad: cantidad,
        fechaIngreso: fechaIngreso || "",
        fechaRetiro: fechaRetiro || "",
        retiradoPor: retiradoPor
    };

    console.log('Enviando datos:', data);

    fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors' // Asegúrate de que esté configurado para manejar CORS
    })
    .then(response => response.text())
    .then(result => console.log('Success:', result))
    .catch(error => console.error('Error:', error));
}

document.getElementById('materialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;
    const fechaIngreso = new Date().toISOString();
    const fechaRetiro = ""; // O el valor que corresponda
    const retiradoPor = document.getElementById('retiradoPor').value;
    
    enviarDatos(nombre, cantidad, fechaIngreso, fechaRetiro, retiradoPor);
});

// Cambiar de pestaña
document.getElementById('agregarTab').addEventListener('click', function() {
    document.getElementById('agregarContent').classList.add('active');
    document.getElementById('inventarioContent').classList.remove('active');
    this.classList.add('active');
    document.getElementById('inventarioTab').classList.remove('active');
});

document.getElementById('inventarioTab').addEventListener('click', function() {
    document.getElementById('inventarioContent').classList.add('active');
    document.getElementById('agregarContent').classList.remove('active');
    this.classList.add('active');
    document.getElementById('agregarTab').classList.remove('active');
});
