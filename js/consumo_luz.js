export const consumoLuz = ({
	consumoActual,
	consumoAnterior,
	costoKw,
	alumbrado,
	cargoFijo,
	reposicion,
	leyLuz
}) => {
	// debugger;
	const montoBruto = (consumoActual - consumoAnterior) * costoKw + alumbrado + cargoFijo + reposicion;

	return (montoBruto + montoBruto * 0.18 + leyLuz).toFixed(2);
};
