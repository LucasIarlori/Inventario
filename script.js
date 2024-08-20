const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9W-XiVR2VBlVgdI3U5Zn2cYoeyzvv4P5OUmFqf8qZ5kXUI3T1pbeXkzNy1V8upuuK/exec';

function agregarMaterial() {
    const material = document.getElementById('material').value;
    const cantidad = document.getElementById('cantidad').value;
    const observacion = document.getElementById('observacion').value;
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    if (clave !== '123') {
        alert('Clave incorrecta.');
        return;
    }

    const datos = {
        material: material,
        cantidad: cantidad,
        observacion: observacion,
        usuario: usuario
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.text())
    .then(data => {
        alert('Material agregado correctamente.');
    })
    .catch(error => {
        console.error('Error al enviar datos:', error);
        alert('Error al enviar datos.');
    });
}
