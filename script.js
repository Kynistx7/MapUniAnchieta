// Inicializa o mapa Leaflet
var map = L.map('map').setView([-23.214571, -46.890980], 17);

// Adiciona camada OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adiciona os marcadores para os prédios com IDs
var marker1 = L.marker([-23.214596, -46.891565], { id: 'marker1' }).addTo(map).bindPopup("<b>Prédio 1</b>");
var marker2 = L.marker([-23.21294, -46.892864], { id: 'marker2' }).addTo(map).bindPopup("<b>Prédio 2</b>");
var marker3 = L.marker([-23.214054, -46.892928], { id: 'marker3' }).addTo(map).bindPopup("<b>Prédio 3</b>");
var marker4 = L.marker([-23.214714, -46.893421], { id: 'marker4' }).addTo(map).bindPopup("<b>Prédio 4</b>");
var marker5 = L.marker([-23.213245, -46.894333], { id: 'marker5' }).addTo(map).bindPopup("<b>Cantina</b>");
var marker6 = L.marker([-23.213936, -46.891962], { id: 'marker6' }).addTo(map).bindPopup("<b>Prédio Administrativo</b>");
var marker7 = L.marker([-23.215375, -46.891105], { id: 'marker7' }).addTo(map).bindPopup("<b>AnfiTeatro</b>");

// Função para redirecionar o mapa para o local do prédio
function goToLocation(lat, lng, popupContent) {
    map.setView([lat, lng], 17);
    L.popup()
        .setLatLng([lat, lng])
        .setContent(popupContent)
        .openOn(map);
}

// Adiciona evento de clique para mostrar coordenadas
var popup = L.popup();
map.on('click', function(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Você clicou aqui: " + e.latlng.toString())
        .openOn(map);
});

// Adiciona evento de clique ao botão "Ir"
document.getElementById('ir-button').addEventListener('click', function() {
    var destino = document.getElementById('destino-select').value;
    switch (destino) {
        case 'marker1':
            goToLocation(-23.214596, -46.891565, "<b>Prédio 1</b>");
            break;
        case 'marker2':
            goToLocation(-23.21294, -46.892864, "<b>Prédio 2</b>");
            break;
        case 'marker3':
            goToLocation(-23.214054, -46.892928, "<b>Prédio 3</b>");
            break;
        case 'marker4':
            goToLocation(-23.214714, -46.893421, "<b>Prédio 4</b>");
            break;
        case 'marker5':
            goToLocation(-23.213245, -46.894333, "<b>Cantina</b>");
            break;
        case 'marker6':
            goToLocation(-23.213936, -46.891962, "<b>Prédio Administrativo</b>");
            break;
        case 'marker7':
            goToLocation(-23.215375, -46.891105, "<b>AnfiTeatro</b>");
            break;
        default:
            alert('Destino não encontrado.');
    }
});

// Exibir nome do usuário logado
document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.nome) {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.textContent = `Bem-vindo, ${user.nome}!`;

        // Adicione a mensagem em um elemento existente ou crie um novo
        const welcomeContainer = document.getElementById('welcome-container') || document.createElement('div');
        welcomeContainer.id = 'welcome-container';
        welcomeContainer.appendChild(welcomeMessage);

        // Adiciona o container ao topo do body
        document.body.prepend(welcomeContainer);

        // Estilize a mensagem (opcional)
        welcomeContainer.style.backgroundColor = '#f0f0f0';
        welcomeContainer.style.padding = '10px';
        welcomeContainer.style.textAlign = 'center';
        welcomeContainer.style.fontSize = '1.2em';
    }
});