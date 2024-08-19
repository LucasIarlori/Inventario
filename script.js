const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9W-XiVR2VBlVgdI3U5Zn2cYoeyzvv4P5OUmFqf8qZ5kXUI3T1pbeXkzNy1V8upuuK/exec';

function agregarMaterial() {
    const material = document.getElementById('material').value;
    const cantidad = document.getElementById('cantidad').value;
    const observacion = document.getElementById('observacion').value;
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    if (clave !== "123") {
        alert("Clave incorrecta. Intente de nuevo.");
        return;
    }

    if (material && cantidad && observacion && usuario) {
        const data = {
            material: material,
            cantidad: cantidad,
            observacion: observacion,
            usuario: usuario
        };

        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',  // Si necesitas una respuesta JSON, puedes quitar esta línea
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            alert("Material ingresado con éxito!");
            limpiarCampos();
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
        });
    } else {
        alert("Por favor complete todos los campos.");
    }
}

function limpiarCampos() {
    document.getElementById('material').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('observacion').value = '';
    document.getElementById('usuario').value = '';
    document.getElementById('clave').value = '';
}

function mostrarMateriales() {
    fetch(SCRIPT_URL)
        .then(response => response.json())
        .then(data => {
            const tablaCuerpo = document.querySelector("#tabla-materiales tbody");
            tablaCuerpo.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas

            data.forEach(fila => {
                const nuevaFila = document.createElement('tr');
                fila.forEach(celda => {
                    const nuevaCelda = document.createElement('td');
                    nuevaCelda.textContent = celda;
                    nuevaFila.appendChild(nuevaCelda);
                });
                tablaCuerpo.appendChild(nuevaFila);
            });

            // Cambiar de pestaña
            document.querySelector('.container').classList.remove('active');
            document.getElementById('tab-materiales').classList.add('active');
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}
