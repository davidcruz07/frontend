fetch('header.html').then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el header');
    }
    return response.text();
  }).then(data => {
    document.getElementById('header').innerHTML = data;

  }).catch(error => {
    console.error(error);
  });



const eventos = [
    {
      "id": 11,
      "artista": "Humbe",
      "imagen": "./img/humbe.jpg",
      "fecha": "2026-05-08",
      "lugar": "CUM Hermosillo",
      "descripcion": "Disfruta de una noche llena de energía con uno de los mejores artistas de México.",
      "categoria": "Pop/RnB"
    },
    {
      "id": 12,
      "artista": "Nsqk",
      "imagen": "./img/nsqk.jpg",
      "fecha": "2026-09-15",
      "lugar": "CUM Hermosillo",
      "descripcion": "Disfruta de una noche llena de energía con uno de los mejores productores de México.",
      "categoria": "Pop/RnB"
    },
    {
      "id": 1,
      "artista": "Deftones",
      "imagen": "./img/rock.jpg",
      "fecha": "2026-07-15",
      "lugar": "CUM Hermosillo",
      "descripcion": "Disfruta de una noche llena de energía con las mejores bandas de rock.",
      "categoria": "Rock"
    },
    {
      "id": 2,
      "artista": "Harry Styles",
      "imagen": "./img/hs.jpg",
      "fecha": "2026-05-23",
      "lugar": "CUM Hermosillo",
      "descripcion": "Disfruta de una noche llena de energía con el fenómeno del pop mundial.",
      "categoria": "Pop"
    },
    {
      "id": 3,
      "artista": "Tecate Sonoro 2026",
      "imagen": "./img/sonoro.jpg",
      "fecha": "2026-11-07",
      "lugar": "Parque La Ruina",
      "descripcion": "El festival más esperado del noroeste con artistas internacionales.",
      "categoria": "Festival"
    },
    {
      "id": 4,
      "artista": "Carin León",
      "imagen": "./img/carin.jpg",
      "fecha": "2026-03-20",
      "lugar": "Estadio Fernando Valenzuela",
      "descripcion": "El orgullo de Hermosillo regresa a casa con su gira mundial.",
      "categoria": "Regional"
    },
    {
      "id": 5,
      "artista": "Arctic Monkeys",
      "imagen": "./img/arctic.jpg",
      "fecha": "2026-09-12",
      "lugar": "CUM Hermosillo",
      "descripcion": "La banda británica presenta su nuevo tour en tierras sonorenses.",
      "categoria": "Indie Rock"
    },
    {
      "id": 6,
      "artista": "Natanael Cano",
      "imagen": "./img/nata.jpg",
      "fecha": "2026-04-15",
      "lugar": "Palenque de la ExpoGan",
      "descripcion": "El rey de los corridos tumbados en el escenario del Palenque.",
      "categoria": "Corridos Tumbados"
    },
    {
      "id": 7,
      "artista": "Zoé",
      "imagen": "./img/zoe.jpg",
      "fecha": "2026-10-05",
      "lugar": "Auditorio Cívico del Estado",
      "descripcion": "Un viaje psicodélico y acústico con los éxitos de siempre.",
      "categoria": "Rock Alternativo"
    },
    {
      "id": 8,
      "artista": "Rosalía",
      "imagen": "./img/rosalia.jpg",
      "fecha": "2026-06-18",
      "lugar": "CUM Hermosillo",
      "descripcion": "La Motomami llega con un espectáculo visual y sonoro sin precedentes.",
      "categoria": "Urbano/Pop"
    },
    {
      "id": 9,
      "artista": "Kevin Kaarl",
      "imagen": "./img/kevin.jpg",
      "fecha": "2026-02-14",
      "lugar": "Teatro del Pueblo",
      "descripcion": "Una velada romántica y folk para celebrar el día del amor.",
      "categoria": "Folk"
    },
    {
      "id": 10,
      "artista": "Soda Stereo (Tributo)",
      "imagen": "./img/soda.jpg",
      "fecha": "2026-08-22",
      "lugar": "London Pub / La Ruina",
      "descripcion": "Un homenaje a la banda más grande del rock en español.",
      "categoria": "Tributo"
    }
]

function mostrarEventos(lista) {
    const seccionEventos = document.getElementById('eventos');

    seccionEventos.innerHTML = '';

    lista.forEach(evento => {
        const card = `
        <div class="card">
            
            <img src="${evento.imagen}" width="150" height="250" alt="Poster de evento para ${evento.artista}">

            <section class="info-evento">
            <h3>${evento.artista}</h3>
            <p><strong>Lugar:</strong> ${evento.lugar}</p>
            <p><strong>Fecha:</strong> ${evento.fecha}</p>
            
            <button class="btn" onclick="comprarBoletos(${evento.id})">Comprar Boletos</button>
            </section>
        </div>
        `;
        seccionEventos.innerHTML += card;

        
    });

}
mostrarEventos(eventos);

function comprarBoletos(idEvento) {
    const eventoSeleccionado = eventos.find(evento => evento.id === idEvento);

    if (eventoSeleccionado) {
        alert(`Compra exitosa!!! Boleto para ${eventoSeleccionado.artista} en ${eventoSeleccionado.lugar}.`);
    } else {
        alert('Evento no encontrado.');
    }
}
comprarBoletos(evento.id);

function enviarFormulario() {
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
}
enviarFormulario();




