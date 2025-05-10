
  const botonTecho = document.getElementById('botonTecho');
  const botonMedio = document.getElementById('botonMedio');
  const botonSuelo = document.getElementById('botonSuelo');
  const temperaturaTechoElement = document.getElementById('temperaturaTecho');
  const temperaturaMedioElement = document.getElementById('temperaturaMedio');
  const temperaturaSueloElement = document.getElementById('temperaturaSuelo');
  const promedioTemperaturaElement = document.getElementById('promedioTemperatura');
  const botonReiniciar = document.getElementById('botonReiniciar');

  let temperaturaTechoValor = 0;
  let temperaturaMedioValor = 0;
  let temperaturaSueloValor = 0;

  

  botonTecho.addEventListener('click', () => {
    temperaturaTechoValor = obtenerTemperaturaMock();
    temperaturaTechoElement.textContent = `Techo: ${temperaturaTechoValor}°C`;
    actualizarPromedio();
  });

  botonMedio.addEventListener('click', () => {
    temperaturaMedioValor = obtenerTemperaturaMock();
    temperaturaMedioElement.textContent = `Medio: ${temperaturaMedioValor}°C`;
    actualizarPromedio();
  });

  botonSuelo.addEventListener('click', () => {
    temperaturaSueloValor = obtenerTemperaturaMock();
    temperaturaSueloElement.textContent = `Suelo: ${temperaturaSueloValor}°C`;
    actualizarPromedio();
  });

  botonReiniciar.addEventListener('click', () => {
    temperaturaTechoValor = 0;
    temperaturaMedioValor = 0;
    temperaturaSueloValor = 0;
    temperaturaTechoElement.textContent = '';
    temperaturaMedioElement.textContent = '';
    temperaturaSueloElement.textContent = '';
    promedioTemperaturaElement.textContent = '';
  });

  function obtenerTemperaturaMock() {
    return Math.floor(Math.random() * (35 - 10 + 1)) + 10;
  }

  function actualizarPromedio() {
    const promedio = (temperaturaTechoValor + temperaturaMedioValor + temperaturaSueloValor) / 3;
    promedioTemperaturaElement.textContent = `Promedio: ${promedio.toFixed(2)}°C`;
  }

 const fechaHoraActualElement = document.getElementById('fechaHoraActual');

  function actualizarFechaHoraActual() {
    const ahora = new Date();
    const fechaHora = ahora.toLocaleString('es-AR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    fechaHoraActualElement.textContent = `Fecha y Hora Actual: ${fechaHora}`;
  }

  // Actualizar la fecha y hora cada segundo
  setInterval(actualizarFechaHoraActual, 1000);

  // Llamar a la función una vez al cargar la página
  actualizarFechaHoraActual();