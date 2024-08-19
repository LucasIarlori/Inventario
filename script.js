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
        const tabla = document.getElementById('tablaMateriales').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        const celdaMaterial = nuevaFila.insertCell(0);
        const celdaCantidad = nuevaFila.insertCell(1);
        const celdaObservacion = nuevaFila.insertCell(2);
        const celdaUsuario = nuevaFila.insertCell(3);

        celdaMaterial.textContent = material;
        celdaCantidad.textContent = cantidad;
        celdaObservacion.textContent = observacion;
        celdaUsuario.textContent = usuario;

        guardarMateriales();
        limpiarCampos();
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

function guardarMateriales() {
    const tabla = document.getElementById('tablaMateriales').getElementsByTagName('tbody')[0];
    const materiales = [];

    for (let i = 0; i < tabla.rows.length; i++) {
        const fila = tabla.rows[i];
        const material = {
            nombre: fila.cells[0].textContent,
            cantidad: fila.cells[1].textContent,
            observacion: fila.cells[2].textContent,
            usuario: fila.cells[3].textContent
        };
        materiales.push(material);
    }

    localStorage.setItem('materiales', JSON.stringify(materiales));
}

function cargarMateriales() {
    const materiales = JSON.parse(localStorage.getItem('materiales')) || [];

    const tabla = document.getElementById('tablaMateriales').getElementsByTagName('tbody')[0];
    materiales.forEach(material => {
        const nuevaFila = tabla.insertRow();

        const celdaMaterial = nuevaFila.insertCell(0);
        const celdaCantidad = nuevaFila.insertCell(1);
        const celdaObservacion = nuevaFila.insertCell(2);
        const celdaUsuario = nuevaFila.insertCell(3);

        celdaMaterial.textContent = material.nombre;
        celdaCantidad.textContent = material.cantidad;
        celdaObservacion.textContent = material.observacion;
        celdaUsuario.textContent = material.usuario;
    });
}

// Cargar los materiales guardados al cargar la página
window.onload = cargarMateriales;
