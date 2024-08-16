// URL del Web App de Google Apps Script
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzDi40hVFOqt2YoHsX9oBfQ5eq5TzH0weWOpVaUBwjWc5Fhz9ey4zmKOOGb_ER2Tvzccg/exec';

function enviarDatos(nombre, cantidad, fechaIngreso, fechaRetiro) {
  const data = {
    nombre: nombre,
    cantidad: cantidad,
    fechaIngreso: fechaIngreso || "",
    fechaRetiro: fechaRetiro || ""
  };

  fetch(GOOGLE_SHEETS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.text())
    .then(result => console.log('Success:', result))
    .catch(error => console.error('Error:', error));
}

// Ejemplo de llamada a la función
enviarDatos('Martillo', 5, '2024-08-15', '');
