// Inicializa o mapa Leaflet
var map = L.map('map').setView([-23.214571, -46.890980], 17);

// Adiciona camada OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adiciona os marcadores para os prédios com IDs
var locais = {
    marker1: { lat: -23.214596, lng: -46.891565, name: "Prédio 1" },
    marker2: { lat: -23.21294, lng: -46.892864, name: "Prédio 2" },
    marker3: { lat: -23.214054, lng: -46.892928, name: "Prédio 3" },
    marker4: { lat: -23.214714, lng: -46.893421, name: "Prédio 4" },
    marker5: { lat: -23.213245, lng: -46.894333, name: "Cantina" },
    marker6: { lat: -23.213936, lng: -46.891962, name: "Prédio Administrativo" },
    marker7: { lat: -23.215375, lng: -46.891105, name: "AnfiTeatro" }
};

// Adiciona os marcadores no mapa
for (let key in locais) {
    L.marker([locais[key].lat, locais[key].lng])
        .addTo(map)
        .bindPopup(`<b>${locais[key].name}</b>`);
}

// Função para redirecionar o mapa para o local do prédio
function goToLocation(lat, lng, popupContent) {
    map.setView([lat, lng], 17);
    L.popup()
        .setLatLng([lat, lng])
        .setContent(popupContent)
        .openOn(map);
}

// Evento de clique ao botão "Ir"
document.getElementById('ir-button').addEventListener('click', function() {
    var destino = document.getElementById('destino-select').value;
    if (locais[destino]) {
        goToLocation(locais[destino].lat, locais[destino].lng, `<b>${locais[destino].name}</b>`);
    } else {
        alert('Destino não encontrado.');
    }
});

// Evento de clique nos cards para mover o mapa
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        var destino = this.getAttribute('data-marker');
        if (locais[destino]) {
            goToLocation(locais[destino].lat, locais[destino].lng, `<b>${locais[destino].name}</b>`);
        }
    });
});

// Adiciona evento de clique para mostrar coordenadas no mapa
var popup = L.popup();
map.on('click', function(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Você clicou aqui: " + e.latlng.toString())
        .openOn(map);
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
