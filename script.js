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
