// ===================== CIDADES =====================
const cidades = {
  // === BRASIL ===
  "São Paulo": {pais:"Brasil", estado:"SP", lat:-23.5505, lon:-46.6333},
  "Guarulhos": {pais:"Brasil", estado:"SP", lat:-23.4628, lon:-46.5333},
  "Rio de Janeiro": {pais:"Brasil", estado:"RJ", lat:-22.9068, lon:-43.1729},
  "Brasília": {pais:"Brasil", estado:"DF", lat:-15.7939, lon:-47.8828},
  "Belo Horizonte": {pais:"Brasil", estado:"MG", lat:-19.9167, lon:-43.9345},
  "Curitiba": {pais:"Brasil", estado:"PR", lat:-25.4284, lon:-49.2733},
  "Porto Alegre": {pais:"Brasil", estado:"RS", lat:-30.0346, lon:-51.2177},
  "Salvador": {pais:"Brasil", estado:"BA", lat:-12.9777, lon:-38.5016},
  "Fortaleza": {pais:"Brasil", estado:"CE", lat:-3.71722, lon:-38.5431},
  "Manaus": {pais:"Brasil", estado:"AM", lat:-3.1190, lon:-60.0217},
  "Recife": {pais:"Brasil", estado:"PE", lat:-8.0476, lon:-34.8770},

  // === AMÉRICA DO SUL ===
  "Buenos Aires": {pais:"Argentina", lat:-34.6037, lon:-58.3816},
  "Córdoba": {pais:"Argentina", lat:-31.4201, lon:-64.1888},
  "Santiago": {pais:"Chile", lat:-33.4489, lon:-70.6693},
  "Lima": {pais:"Peru", lat:-12.0464, lon:-77.0428},
  "Bogotá": {pais:"Colômbia", lat:4.7110, lon:-74.0721},
  "Caracas": {pais:"Venezuela", lat:10.4806, lon:-66.9036},
  "Montevidéu": {pais:"Uruguai", lat:-34.9011, lon:-56.1645},
  "Quito": {pais:"Equador", lat:-0.1807, lon:-78.4678},

  // === AMÉRICA DO NORTE ===
  "Miami": {pais:"Estados Unidos", lat:25.7617, lon:-80.1918},
  "Nova York": {pais:"Estados Unidos", lat:40.7128, lon:-74.006},
  "Los Angeles": {pais:"Estados Unidos", lat:34.0522, lon:-118.2437},
  "Chicago": {pais:"Estados Unidos", lat:41.8781, lon:-87.6298},
  "Toronto": {pais:"Canadá", lat:43.65107, lon:-79.347015},
  "Cidade do México": {pais:"México", lat:19.4326, lon:-99.1332},
  "Vancouver": {pais:"Canadá", lat:49.2827, lon:-123.1207},

  // === EUROPA ===
  "Lisboa": {pais:"Portugal", lat:38.7169, lon:-9.1396},
  "Porto": {pais:"Portugal", lat:41.1579, lon:-8.6291},
  "Paris": {pais:"França", lat:48.8566, lon:2.3522},
  "Londres": {pais:"Reino Unido", lat:51.5074, lon:-0.1278},
  "Madri": {pais:"Espanha", lat:40.4168, lon:-3.7038},
  "Barcelona": {pais:"Espanha", lat:41.3851, lon:2.1734},
  "Roma": {pais:"Itália", lat:41.9028, lon:12.4964},
  "Milão": {pais:"Itália", lat:45.4642, lon:9.1900},
  "Berlim": {pais:"Alemanha", lat:52.5200, lon:13.4050},
  "Munique": {pais:"Alemanha", lat:48.1351, lon:11.5820},

  // === ÁSIA ===
  "Dubai": {pais:"Emirados Árabes Unidos", lat:25.276987, lon:55.296249},
  "Abu Dhabi": {pais:"Emirados Árabes Unidos", lat:24.4539, lon:54.3773},
  "Tóquio": {pais:"Japão", lat:35.6762, lon:139.6503},
  "Osaka": {pais:"Japão", lat:34.6937, lon:135.5023},
  "Xangai": {pais:"China", lat:31.2304, lon:121.4737},
  "Beijing": {pais:"China", lat:39.9042, lon:116.4074},
  "Seul": {pais:"Coreia do Sul", lat:37.5665, lon:126.9780},
  "Mumbai": {pais:"Índia", lat:19.0760, lon:72.8777},
  "Delhi": {pais:"Índia", lat:28.6139, lon:77.2090},

  // === OCEANIA ===
  "Sydney": {pais:"Austrália", lat:-33.8688, lon:151.2093},
  "Melbourne": {pais:"Austrália", lat:-37.8136, lon:144.9631},
  "Auckland": {pais:"Nova Zelândia", lat:-36.8485, lon:174.7633},
  "Wellington": {pais:"Nova Zelândia", lat:-41.2865, lon:174.7762},

  // === ÁFRICA ===
  "Johannesburg": {pais:"África do Sul", lat:-26.2041, lon:28.0473},
  "Cidade do Cabo": {pais:"África do Sul", lat:-33.9249, lon:18.4241},
  "Cairo": {pais:"Egito", lat:30.0444, lon:31.2357},
  "Nairóbi": {pais:"Quênia", lat:-1.2921, lon:36.8219},
  "Lagos": {pais:"Nigéria", lat:6.5244, lon:3.3792},
  "Casablanca": {pais:"Marrocos", lat:33.5731, lon:-7.5898}
};

 // ===================== ROTAS OFICIAIS =====================
const rotasOficiais = {

// === BRASIL ===
  "São Paulo-Rio de Janeiro": {companhia:"Gol", modelo:"Airbus A320", distancia:430, tempo:1},
  "São Paulo-Guarulhos": {companhia:"LATAM", modelo:"Airbus A320", distancia:21, tempo:0.5},
  "São Paulo-Brasília": {companhia:"Latam", modelo:"Airbus A320", distancia:1010, tempo:1.5},
  "Brasília-São Paulo": {companhia:"Gol", modelo:"Boeing 737", distancia:1010, tempo:1.5},
  "São Paulo-Belo Horizonte": {companhia:"LATAM", modelo:"Boeing 737", distancia:586, tempo:1},

  "São Paulo-Curitiba": {companhia:"Azul", modelo:"Embraer 195", distancia:408, tempo:1},

  "São Paulo-Porto Alegre": {companhia:"LATAM", modelo:"Boeing 737", distancia:1090, tempo:2},

  "São Paulo-Salvador": {companhia:"Gol", modelo:"Boeing 737", distancia:1860, tempo:3},

  "São Paulo-Fortaleza": {companhia:"LATAM", modelo:"Boeing 737", distancia:2920, tempo:4},

  "São Paulo-Manaus": {companhia:"Azul", modelo:"Embraer 195", distancia:3290, tempo:5},

  "São Paulo-Recife": {companhia:"Gol", modelo:"Boeing 737", distancia:2860, tempo:4},

  "Rio de Janeiro-São Paulo": {companhia:"Azul", modelo:"Boeing 737", distancia:430, tempo:1},
  "Rio de Janeiro-Guarulhos": {companhia:"LATAM", modelo:"Airbus A320", distancia:403, tempo:1},
  "Rio de Janeiro-Brasília": {companhia:"Gol", modelo:"Boeing 737", distancia:930, tempo:1.5},
  "Rio de Janeiro-Belo Horizonte": {companhia:"LATAM", modelo:"Boeing 737", distancia:330, tempo:1},
  "Rio de Janeiro-Curitiba": {companhia:"Azul", modelo:"Embraer 195", distancia:840, tempo:1.5},
  "Rio de Janeiro-Porto Alegre": {companhia:"LATAM", modelo:"Boeing 737", distancia:1150, tempo:2},
  "Rio de Janeiro-Salvador": {companhia:"Gol", modelo:"Boeing 737", distancia:1580, tempo:2.5},
  "Rio de Janeiro-Fortaleza": {companhia:"LATAM", modelo:"Boeing 737", distancia:2960, tempo:4},
  "Rio de Janeiro-Manaus": {companhia:"Azul", modelo:"Embraer 195", distancia:3570, tempo:5},
  "Rio de Janeiro-Recife": {companhia:"Gol", modelo:"Boeing 737", distancia:2450, tempo:3.5},
  "Guarulhos-São Paulo": {companhia:"LATAM", modelo:"Airbus A320", distancia:21, tempo:0.5},
  "Guarulhos-Rio de Janeiro": {companhia:"LATAM", modelo:"Airbus A320", distancia:403, tempo:1},
// === GUARULHOS → MUNDO ===
  "Guarulhos-Nova York": {companhia:"LATAM", modelo:"Boeing 787", distancia:7700, tempo:10},
  "Guarulhos-Miami": {companhia:"American Airlines", modelo:"Boeing 777", distancia:6670, tempo:7},
  "Guarulhos-Lisboa": {companhia:"TAP Air Portugal", modelo:"Airbus A330", distancia:7440, tempo:10.5},
  "Guarulhos-Paris": {companhia:"Air France", modelo:"Boeing 777", distancia:9500, tempo:11},
  "Guarulhos-Londres": {companhia:"British Airways", modelo:"Boeing 777", distancia:9300, tempo:11},
  "Guarulhos-Dubai": {companhia:"Emirates", modelo:"Airbus A380", distancia:12555, tempo:15},
  "Guarulhos-Tóquio": {companhia:"ANA", modelo:"Boeing 787", distancia:18500, tempo:22},
  "Guarulhos-Toronto": {companhia:"Air Canada", modelo:"Boeing 777", distancia:8200, tempo:10.5},
  "Guarulhos-Lima": {companhia:"Latam", Modelo:"Airbus A320", distancia:3450, tempo:5},
// === BRASIL → INTERNACIONAL ===
  "São Paulo-Miami": {companhia:"American Airlines", modelo:"Boeing 777", distancia:6670, tempo:7},
  "São Paulo-Nova York": {companhia:"LATAM", modelo:"Boeing 787", distancia:7700, tempo:10},
  "São Paulo-Lisboa": {companhia:"TAP Air Portugal", modelo:"Airbus A330", distancia:7440, tempo:10.5},
  "São Paulo-Paris": {companhia:"Air France", modelo:"Boeing 777", distancia:9500, tempo:11},
  "São Paulo-Londres": {companhia:"British Airways", modelo:"Boeing 777", distancia:9300, tempo:11},
  "São Paulo-Dubai": {companhia:"Emirates", modelo:"Airbus A380", distancia:12555, tempo:15},
  "Rio de Janeiro-Miami": {companhia:"American Airlines", modelo:"Boeing 777", distancia:6540, tempo:8},
  "Rio de Janeiro-Lisboa": {companhia:"TAP Air Portugal", modelo:"Airbus A330", distancia:7500, tempo:10.5},
  "Rio de Janeiro-Nova York": {companhia:"LATAM", modelo:"Boeing 787", distancia:7750, tempo:10},
  "Brasília-Miami": {companhia:"American Airlines", modelo:"Boeing 737", distancia:5800, tempo:7},
  "Salvador-Lisboa": {companhia:"TAP Air Portugal", modelo:"Airbus A330", distancia:6500, tempo:8},
  "Fortaleza-Miami": {companhia:"LATAM", modelo:"Boeing 737", distancia:5600, tempo:7},
  "Recife-Lisboa": {companhia:"TAP Air Portugal", modelo:"Airbus A330", distancia:6100, tempo:7.5},
// === INTERNACIONAL → BRASIL ===
  "Miami-São Paulo": {companhia:"American Airlines", modelo:"Boeing 777", distancia:6670, tempo:7},
  "Nova York-São Paulo": {companhia:"LATAM", modelo:"Boeing 787", distancia:7700, tempo:10},
  "Lisboa-São Paulo": {companhia:"TAP Air Portugal", modelo:"Airbus A330", distancia:7440, tempo:10.5},
  "Dubai-Guarulhos": {companhia:"Emirates", modelo:"Airbus A380", distancia:12555, tempo:15},
  "Nova York-Rio de Janeiro": {companhia:"LATAM", modelo:"Boeing 787", distancia:7750, tempo:10},
  "Miami-Brasília": {companhia:"American Airlines", modelo:"Boeing 737", distancia:5800, tempo:7},
  "Lisboa-Salvador": {companhia:"TAP Air Portugal", modelo:"Airbus A330", distancia:6500, tempo:8},
  "Miami-Fortaleza": {companhia:"LATAM", modelo:"Boeing 737", distancia:5600, tempo:7},
  "Lisboa-Recife": {companhia:"TAP Air Portugal", modelo:"Airbus A330", distancia:6100, tempo:7.5},
  "Lima-Guarulhos": {companhia:"Latam", Modelo:"Airbus A320", distancia:3450, tempo:5},
  "Lima-Guarulhos": {companhia:"Latam", Modelo:"Airbus A320", distancia:3450, tempo:5},
  "Paris-São Paulo": {companhia:"Air France", modelo:"Boeing 777", distancia:9500, tempo:11},
  "Londres-Rio de Janeiro": {companhia:"British Airways", modelo:"Boeing 777", distancia:9350, tempo:11},
  "Dubai-São Paulo": {companhia:"Emirates", modelo:"Airbus A380", distancia:12555, tempo:15},
  "Toronto-São Paulo": {companhia:"Air Canada", modelo:"Boeing 777", distancia:8200, tempo:10.5},
  "Frankfurt-São Paulo": {companhia:"Lufthansa", modelo:"Boeing 747", distancia:9800, tempo:11.5},
  "Madrid-São Paulo": {companhia:"Iberia", modelo:"Airbus A330", distancia:8400, tempo:10},
  "Roma-Rio de Janeiro": {companhia:"Alitalia", modelo:"Boeing 777", distancia:9200, tempo:11},
  "Doha-São Paulo": {companhia:"Qatar Airways", modelo:"Boeing 777", distancia:11800, tempo:14},
  "Istambul-São Paulo": {companhia:"Turkish Airlines", modelo:"Boeing 777", distancia:10500, tempo:13},
// === MUNDO ↔ MUNDO ===
  "Nova York-Londres": {companhia:"British Airways", modelo:"Boeing 777", distancia:5570, tempo:7},
  "Londres-Nova York": {companhia:"British Airways", modelo:"Boeing 777", distancia:5570, tempo:7},
  "Paris-Nova York": {companhia:"Air France", modelo:"Boeing 777", distancia:5830, tempo:7.5},
  "Nova York-Paris": {companhia:"Air France", modelo:"Boeing 777", distancia:5830, tempo:7.5},
  "Dubai-Londres": {companhia:"Emirates", modelo:"Airbus A380", distancia:5500, tempo:7},
  "Londres-Dubai": {companhia:"Emirates", modelo:"Airbus A380", distancia:5500, tempo:7},
  "Dubai-Nova York": {companhia:"Emirates", modelo:"Airbus A380", distancia:11000, tempo:13},
  "Nova York-Dubai": {companhia:"Emirates", modelo:"Airbus A380", distancia:11000, tempo:13},
  "Paris-Tóquio": {companhia:"Air France", modelo:"Boeing 777", distancia:9710, tempo:12},
  "Tóquio-Paris": {companhia:"Air France", modelo:"Boeing 777", distancia:9710, tempo:12},
  "Sydney-Dubai": {companhia:"Emirates", modelo:"Airbus A380", distancia:12000, tempo:14},
  "Dubai-Sydney": {companhia:"Emirates", modelo:"Airbus A380", distancia:12000, tempo:14},
  "Los Angeles-Londres": {companhia:"British Airways", modelo:"Boeing 777", distancia:8750, tempo:10.5},
  "Londres-Los Angeles": {companhia:"British Airways", modelo:"Boeing 777", distancia:8750, tempo:10.5},
  "Nova York-Tóquio": {companhia:"Qatar", modelo:"Boeing 787", distancia:10850, tempo:13},
  "Tóquio-Nova York": {companhia:"Qatar", modelo:"Boeing 787", distancia:10850, tempo:13},
  "Singapura-Londres": {companhia:"Singapore Airlines", modelo:"Airbus A350", distancia:10800, tempo:13},
  "Londres-Singapura": {companhia:"Singapore Airlines", modelo:"Airbus A350", distancia:10800, tempo:13},
  "Paris-Los Angeles": {companhia:"Air France", modelo:"Boeing 777", distancia:9100, tempo:11},
  "Los Angeles-Paris": {companhia:"Air France", modelo:"Boeing 777", distancia:9100, tempo:11},
  "Frankfurt-Nova York": {companhia:"Lufthansa", modelo:"Boeing 747", distancia:6200, tempo:8},
  "Nova York-Frankfurt": {companhia:"Lufthansa", modelo:"Boeing 747", distancia:6200, tempo:8},
  "Hong Kong-Dubai": {companhia:"Emirates", modelo:"Boeing 777", distancia:5950, tempo:8},
  "Dubai-Hong Kong": {companhia:"Emirates", modelo:"Boeing 777", distancia:5950, tempo:8},
// === MAIS BRASIL ===
  "São Paulo-Florianópolis": {companhia:"Azul", modelo:"Embraer 195", distancia:705, tempo:1.5},
  "Florianópolis-São Paulo": {companhia:"Azul", modelo:"Embraer 195", distancia:705, tempo:1.5},
  "Salvador-Rio de Janeiro": {companhia:"Gol", modelo:"Boeing 737", distancia:1580, tempo:2.5},
  "Recife-Brasília": {companhia:"Gol", modelo:"Boeing 737", distancia:1800, tempo:3}
  };

// ===================== COMPANHIAS POR PAÍS =====================
const companhiasPorPais = {
  "Brasil":["LATAM","Gol","Azul"],
  "Estados Unidos":["American Airlines","Delta","United Airlines"],
  "Emirados Árabes Unidos":["Emirates","Etihad"],
  "Portugal":["TAP Air Portugal"],
  "França":["Air France"],
  "Reino Unido":["British Airways","Virgin Atlantic"],
  "Japão":["Japan Airlines","ANA"],
  "Austrália":["Qantas"],
  "Nova Zelândia":["Air New Zealand"],
  "África do Sul":["South African Airways"],
  "China":["Air China","China Eastern","China Southern"],
  "Índia":["Air India","IndiGo"],
  "Argentina":["Aerolineas Argentinas","LATAM Chile"]
};

// ===================== FUNÇÕES =====================
function calcularDistancia(lat1, lon1, lat2, lon2){
  const R = 6371;
  const dLat = (lat2-lat1)*Math.PI/180;
  const dLon = (lon2-lon1)*Math.PI/180;
  const a = Math.sin(dLat/2)*2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)*2;
  const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R*c;
}

function escolherCompanhiaModelo(origem,destino){
  const key = origem + "-" + destino;
  if(rotasOficiais[key]) return {companhia:rotasOficiais[key].companhia, modelo:rotasOficiais[key].modelo};
  let pais = cidades[destino].pais;
  let companhias = companhiasPorPais[pais] || ["LATAM"];
  const modelos = ["Airbus A320","Airbus A330","Airbus A350","Airbus A380","Airbus A220","Boeing 737","Boeing 757","Boeing 747","Boeing 767","Boeing 777","Boeing 787"];
  return {companhia:companhias[Math.floor(Math.random()*companhias.length)], modelo:modelos[Math.floor(Math.random()*modelos.length)]};
}

function calcularTempoEstimado(distancia){
  const velocidadeMedia = 900;
  let tempo = distancia / velocidadeMedia;
  if(distancia < 500) tempo = 1;
  else if(distancia < 1000) tempo += 0.5;
  else if(distancia > 12000) tempo += 1;
  return tempo;
}

function calcularVoo(){
  let origem = document.getElementById("origem").value;
  let destino = document.getElementById("destino").value;
  let horaSaida = document.getElementById("horaSaida").value || "08:00";

  if(!cidades[origem] || !cidades[destino]){
    alert("Cidade não encontrada!");
    return;
  }

  const key = origem + "-" + destino;
  let distancia, tempo;

  if(rotasOficiais[key]){
    distancia = rotasOficiais[key].distancia;
    tempo = rotasOficiais[key].tempo;
  } else {
    distancia = calcularDistancia(cidades[origem].lat, cidades[origem].lon, cidades[destino].lat, cidades[destino].lon);
    tempo = calcularTempoEstimado(distancia);
  }

  const horas = Math.floor(tempo);
  const minutos = Math.round((tempo - horas) * 60);

  let [h, m] = horaSaida.split(":").map(Number);
  if(isNaN(h) || isNaN(m)){h=8; m=0;}
  let data = new Date();
  data.setHours(h);
  data.setMinutes(m + horas*60 + minutos);
  const chegada = data.getHours().toString().padStart(2,"0") + ":" + data.getMinutes().toString().padStart(2,"0");

  const cm = escolherCompanhiaModelo(origem, destino);
  let companhia = cm.companhia;
  let modelo = cm.modelo;
  if(rotasOficiais[key]) {modelo = rotasOficiais[key].modelo; companhia = rotasOficiais[key].companhia;}

  const numeroVoo = companhia.substring(0,2).toUpperCase() + Math.floor(Math.random()*9000+1000);
  const altitude = 35000;
  const velocidadeMedia = ((distancia||1)/tempo).toFixed(0);

  document.getElementById("resultado").innerHTML = `
    <p><b>Origem:</b> ${origem}, ${cidades[origem].estado || ""} - ${cidades[origem].pais}</p>
    <p><b>Destino:</b> ${destino}, ${cidades[destino].estado || ""} - ${cidades[destino].pais}</p>
    <p><b>Distância:</b> ${distancia.toFixed(0)} km</p>
    <p><b>Tempo de voo:</b> ${horas}h ${minutos}min</p>
    <p><b>Velocidade média:</b> ${velocidadeMedia} km/h</p>
    <p><b>Hora de saída:</b> ${horaSaida}</p>
    <p><b>Hora de chegada:</b> ${chegada}</p>
    <p><b>Altitude:</b> ${altitude} m</p>
    <p><b>Companhia aérea:</b> ${companhia}</p>
    <p><b>Modelo da aeronave:</b> ${modelo}</p>
    <p><b>Número do voo:</b> ${numeroVoo}</p>
    `;
}