/**
 * Datos de ejemplo compartidos por todos los módulos del sitio.
 * Reutiliza las coordenadas reales de Ipiales ya verificadas en el
 * mapa Leaflet (Terminal, Parque 20 de Julio, Plaza de Mercado,
 * Rumichaca, etc.), para que el Dashboard, Rutas y Paraderos
 * trabajen sobre la misma fuente de verdad que el mapa.
 * Los códigos de paradero (1001, etc.) son provisionales hasta que
 * el operador entregue la nomenclatura oficial.
 */
window.DDBUS_DATA = (function () {
  var paraderos = [
    {
      id: 'p-terminal',
      code: '1001',
      name: 'Terminal de Transportes',
      address: 'Cra. 4 #12A-1 · Sentido Centro',
      lat: 0.827008,
      lng: -77.6311936,
      covered: true,
      routeIds: ['r1'],
    },
    {
      id: 'p-centro',
      code: '1002',
      name: 'Parque 20 de Julio (Centro)',
      address: 'Cra. 6 #9-11 · Frente a la Catedral',
      lat: 0.8234239,
      lng: -77.6344089,
      covered: true,
      routeIds: ['r1', 'r2', 'r3'],
    },
    {
      id: 'p-mercado',
      code: '1003',
      name: 'Plaza de Mercado',
      address: 'Cra. 4 #1-1 · Sentido Oriente',
      lat: 0.8245465,
      lng: -77.6262679,
      covered: false,
      routeIds: ['r2'],
    },
    {
      id: 'p-san-felipe',
      code: '1004',
      name: 'Parque San Felipe',
      address: 'Cra. 5 #20-45 · Sentido Norte',
      lat: 0.8287276,
      lng: -77.6424103,
      covered: false,
      routeIds: ['r1'],
    },
    {
      id: 'p-san-vicente',
      code: '1005',
      name: 'Barrio San Vicente',
      address: 'Cra. 4 #20-51 · Sentido Occidente',
      lat: 0.830804,
      lng: -77.643439,
      covered: false,
      routeIds: ['r1', 'r3'],
    },
    {
      id: 'p-rumichaca',
      code: '1006',
      name: 'Puente Internacional de Rumichaca',
      address: 'Vía Panamericana Sur · Frontera',
      lat: 0.8140214,
      lng: -77.6640507,
      covered: true,
      routeIds: ['r2'],
    },
  ];

  var rutas = [
    {
      id: 'r1',
      shortCode: 'R1',
      name: 'Terminal - Centro - Barrios del Norte',
      color: '#2F6FED',
      active: true,
      frequency: '8 – 10 min',
      fare: 2700,
      description: 'Conecta la Terminal de Transportes con el centro histórico y sube hacia los barrios del norte.',
      schedule: [
        { label: 'L-V', opens: '05:30', closes: '21:30' },
        { label: 'SÁB', opens: '05:55', closes: '20:00' },
        { label: 'DOM', opens: '06:30', closes: '18:00' },
      ],
      stopIds: ['p-terminal', 'p-centro', 'p-san-felipe', 'p-san-vicente'],
    },
    {
      id: 'r2',
      shortCode: 'R2',
      name: 'Plaza de Mercado - Centro - Rumichaca',
      color: '#1F8A5E',
      active: true,
      frequency: '12 – 15 min',
      fare: 3200,
      description: 'Une la Plaza de Mercado y el centro comercial con la salida sur hacia el Puente de Rumichaca.',
      schedule: [
        { label: 'L-V', opens: '05:00', closes: '20:30' },
        { label: 'SÁB', opens: '05:30', closes: '19:30' },
        { label: 'DOM', opens: '06:00', closes: '17:30' },
      ],
      stopIds: ['p-mercado', 'p-centro', 'p-rumichaca'],
    },
    {
      id: 'r3',
      shortCode: 'R3',
      name: 'Centro - Sector Occidental - Aldana',
      color: '#E2761D',
      active: false,
      frequency: '25 – 30 min',
      fare: 4500,
      description: 'Ruta periférica que conecta el centro con el sector occidental y ofrece conexión intermunicipal hacia Aldana.',
      schedule: [
        { label: 'L-V', opens: '06:00', closes: '19:00' },
        { label: 'SÁB', opens: '06:30', closes: '18:00' },
        { label: 'DOM', opens: '—', closes: '—' },
      ],
      stopIds: ['p-centro', 'p-san-vicente'],
    },
  ];

  var currentFare = 2700;

  return { paraderos: paraderos, rutas: rutas, currentFare: currentFare };
})();
