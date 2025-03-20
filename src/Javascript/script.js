document.addEventListener('DOMContentLoaded', function () {
	const formRegister = document.getElementById('formRegister');
	const mensaje = document.getElementById('mensaje');
	const dateRegister = document.getElementById('dateRegister');
	const telephoneInput = document.getElementById('telephone');
	const telephoneHelp = document.getElementById('telephoneHelp');
	const modal = document.getElementById('modal');
	const modalMensaje = document.getElementById('modal-mensaje');
	const span = document.querySelector('.close');
	const imgInput = document.getElementById('img');

	let formData = {
		date: new Date().toLocaleDateString(),
		telephone: '',
		image: null,
	};

	dateRegister.value = formData.date;

	telephoneInput.addEventListener('focus', function () {
		telephoneHelp.style.display = 'inline';
	});

	telephoneInput.addEventListener('blur', function () {
		telephoneHelp.style.display = 'none';
	});

	formRegister.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevenir el envío por defecto

		formData.telephone = telephoneInput.value;
		formData.image = imgInput.files[0];

		if (!formData.image) {
			mensaje.textContent = 'Por favor selecciona una imagen';
			mensaje.style.color = 'red';
			return;
		}

		const telephoneRegex = /^[0-9]{2,3}[ -]?[0-9]{3,4}[ -]?[0-9]{4}$/;
		if (!telephoneRegex.test(formData.telephone)) {
			mensaje.textContent =
				'Por favor ingresa un numero de telefono valido (formato: 33-2329-2279 o 33 2329 2279).';
			mensaje.style.color = 'red';
			return;
		}

		modalMensaje.textContent = 'Registro completado con exito! Bienvenido';
		modal.style.display = 'block';
		formRegister.reset();
	});

	span.onclick = function () {
		modal.style.display = 'none';
	};

	window.onclick = function (event) {
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	};
});
