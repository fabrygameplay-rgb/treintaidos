
// --- CONTROL DE VENTANAS MODALES ---
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(event, id) {
    // Cierra la ventana solo si se hace clic en el fondo oscuro transparente
    if (event.target.id === id) {
        document.getElementById(id).classList.remove('active');
    }
}

// --- ENVIAR DATOS A GOOGLE FORMS (INSTRUCCIONES PARA MAÑANA) ---
function enviarFormulario(event) {
    event.preventDefault();
        
    // MAÑANA: Reemplaza este URL falso por el URL de tu acción de Google Form
    // Ejemplo: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXXXXX/formResponse'
    const GOOGLE_FORM_URL = 'AQUÍ_VA_TU_LINK_DE_GOOGLE_FORMS_MAÑANA'; 

    if(GOOGLE_FORM_URL === 'AQUÍ_VA_TU_LINK_DE_GOOGLE_FORMS_MAÑANA') {
        // Alerta provisional por si se te olvida cambiarlo antes de probar
        alert("¡Simulación de éxito! Tu código está listo. Mañana cuando pongas el link real de Google Forms, los registros se guardarán automáticamente en tu Excel.");
        document.getElementById("leadForm").reset();
        return;
    }

    // Captura los valores ingresados por el usuario
    const email = document.getElementById('form-email').value;
    const campus = document.getElementById('form-campus').value;
    const horario = document.getElementById('form-horario').value;

    // Configura los datos empaquetados para Google Forms
    const formData = new FormData();
            
    // MAÑANA: Debes inspeccionar tu Google Form y reemplazar estos 'entry.XXXXX' por los ID reales de tus campos.
    formData.append('entry.111111111', email);   // ID del campo Correo
    formData.append('entry.222222222', campus);  // ID del campo Campus
    formData.append('entry.333333333', horario); // ID del campo Horario

    // Envía los datos en segundo plano mediante Fetch API (Modo no-cors para evitar bloqueos)
    fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    
    .then(() => {
        alert("¡Registro exitoso! Ya estás en la lista de espera oficial de Petwatch.");
        document.getElementById("leadForm").reset();
    })
    
    .catch((error) => {
        console.error('Error al conectar:', error);
        alert("Hubo un percance al registrar. Inténtalo nuevamente.");
    });
}