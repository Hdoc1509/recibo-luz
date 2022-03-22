import {consumoLuz} from "./consumo_luz.js";

const d = document;

d.addEventListener("submit", e => {
	const $formLuz = d.getElementById("form-luz");

	if (e.target === $formLuz) {
		e.preventDefault();

		$formLuz.resultado.value = consumoLuz({
			consumoActual: parseFloat($formLuz.actual.value),
			consumoAnterior: parseFloat($formLuz.anterior.value),
			costoKw: parseFloat($formLuz.costo_kw.value),
			alumbrado: parseFloat($formLuz.alumbrado.value),
			cargoFijo: parseFloat($formLuz.cargo_fijo.value),
			reposicion: parseFloat($formLuz.reposicion.value),
			leyLuz: parseFloat($formLuz.ley_luz.value)
		});
	}
});