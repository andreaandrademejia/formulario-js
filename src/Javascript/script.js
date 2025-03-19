document.addEventListener('DOMContentLoaded', function () {
	const formRegister = document.getElementById('formRegister');
	const mensaje = document.getElementById('mensaje');
	const dateRegister = document.getElementById('dateRegister');
	const telephoneInput = document.getElementById('telephone');
	const telephoneHelp = document.getElementById('telephoneHelp');
	const modal = document.getElementById('modal');
	const modalMensaje = document.getElementById('modal-mensaje');
	const span = document.querySelector('.close');

	const fechaActual = new Date();
	const fechaFormateada = fechaActual.toLocaleDateString();
	dateRegister.value = fechaFormateada;

	telephoneInput.addEventListener('focus', function () {
		telephoneHelp.style.display = 'inline';
	});

	telephoneInput.addEventListener('blur', function () {
		telephoneHelp.style.display = 'none';
	});

	formRegister.addEventListener('submit', function (event) {
		if (!formRegister.checkValidity()) {
			mensaje.textContent =
				'Por favor, completa todos los campos de la forma indicada.';
			mensaje.style.color = 'orange';
			event.preventDefault();
			return;
		}
		const imgInput = document.getElementById('img');
		if (imgInput.files.length === 0) {
			mensaje.textContent = 'Por favor selecciona una imagen';
			mensaje.style.color = 'red';
			event.preventDefault();
			return;
		}

		const telephoneValue = telephoneInput.value;
		console.log('Valor del telefono:', telephoneValue);
		const telephoneRegex = /^[0-9]{2,3}[ -]?[0-9]{3,4}[ -]?[0-9]{4}$/;

		if (!telephoneRegex.test(telephoneValue)) {
			mensaje.textContent =
				'Por favor ingresa un numero de telefono valido (formato: 33-2329-2279 o 33 2329 2279).';
			mensaje.style.color = 'red';
			event.preventDefault();
			return;
		}

		modalMensaje.textContent = 'Registro completado con exito! Bienvenido';
		modal.style.display = 'block';
		formRegister.reset();
		event.preventDefault();
	});
	span.onclick = function () {
		modal.style.display = 'none';
	};
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
});
