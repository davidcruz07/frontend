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
      "categoria": "Pop/RnB",
      "precio": "850"
    },
    {
      "id": 12,
      "artista": "Nsqk",
      "imagen": "./img/nsqk.jpg",
      "fecha": "2026-09-15",
      "lugar": "CUM Hermosillo",
      "descripcion": "Disfruta de una noche llena de energía con uno de los mejores productores de México.",
      "categoria": "Pop/RnB",
      "precio": "950"
    },
    {
      "id": 1,
      "artista": "Deftones",
      "imagen": "./img/rock.jpg",
      "fecha": "2026-07-15",
      "lugar": "CUM Hermosillo",
      "descripcion": "Disfruta de una noche llena de energía con las mejores bandas de rock.",
      "categoria": "Rock",
      "precio": "1200"
    },
    {
      "id": 2,
      "artista": "Harry Styles",
      "imagen": "./img/hs.jpg",
      "fecha": "2026-05-23",
      "lugar": "CUM Hermosillo",
      "descripcion": "Disfruta de una noche llena de energía con el fenómeno del pop mundial.",
      "categoria": "Pop",
      "precio": "1500"
    },
    {
      "id": 3,
      "artista": "Tecate Sonoro 2026",
      "imagen": "./img/sonoro.jpg",
      "fecha": "2026-11-07",
      "lugar": "Parque La Ruina",
      "descripcion": "El festival más esperado del noroeste con artistas internacionales.",
      "categoria": "Festival",
      "precio": "2000"
    },
    {
      "id": 4,
      "artista": "Carin León",
      "imagen": "./img/carin.jpg",
      "fecha": "2026-03-20",
      "lugar": "Estadio Fernando Valenzuela",
      "descripcion": "El orgullo de Hermosillo regresa a casa con su gira mundial.",
      "categoria": "Regional",
      "precio": "700"
    },
    {
      "id": 5,
      "artista": "Arctic Monkeys",
      "imagen": "./img/arctic.jpg",
      "fecha": "2026-09-12",
      "lugar": "CUM Hermosillo",
      "descripcion": "La banda británica presenta su nuevo tour en tierras sonorenses.",
      "categoria": "Indie Rock",
      "precio": "1800"
    },
    {
      "id": 6,
      "artista": "Natanael Cano",
      "imagen": "./img/nata.jpg",
      "fecha": "2026-04-15",
      "lugar": "Palenque de la ExpoGan",
      "descripcion": "El rey de los corridos tumbados en el escenario del Palenque.",
      "categoria": "Corridos Tumbados",
      "precio": "900"
    },
    {
      "id": 7,
      "artista": "Zoé",
      "imagen": "./img/zoe.jpg",
      "fecha": "2026-10-05",
      "lugar": "Auditorio Cívico del Estado",
      "descripcion": "Un viaje psicodélico y acústico con los éxitos de siempre.",
      "categoria": "Rock Alternativo",
      "precio": "1300"
    },
    {
      "id": 8,
      "artista": "Rosalía",
      "imagen": "./img/rosalia.jpg",
      "fecha": "2026-06-18",
      "lugar": "CUM Hermosillo",
      "descripcion": "La Motomami llega con un espectáculo visual y sonoro sin precedentes.",
      "categoria": "Urbano/Pop",
      "precio": "2200"
    },
    {
      "id": 9,
      "artista": "Kevin Kaarl",
      "imagen": "./img/kevin.jpg",
      "fecha": "2026-02-14",
      "lugar": "Teatro del Pueblo",
      "descripcion": "Una velada romántica y folk para celebrar el día del amor.",
      "categoria": "Folk",
      "precio": "600"
    },
    {
      "id": 10,
      "artista": "Soda Stereo (Tributo)",
      "imagen": "./img/soda.jpg",
      "fecha": "2026-08-22",
      "lugar": "London Pub / La Ruina",
      "descripcion": "Un homenaje a la banda más grande del rock en español.",
      "categoria": "Tributo",
      "precio": "750"
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
            
            <button class="btn-comprar" data-id="${evento.id}" data-nombre="${evento.artista}" data-precio="${evento.precio}" onclick="comprarBoletos(${evento.id})">Agregar Boletos</button>
            </section>
        </div>
        `;
        seccionEventos.innerHTML += card;

        
    });

}
mostrarEventos(eventos);

function comprarBoletos(idEvento) {
    const eventoSeleccionado = eventos.find(evento => evento.id === idEvento);

    let carrito = JSON.parse(localStorage.getItem('tickets')) || [];

    document.querySelectorAll('.btn-comprar').forEach(boton => {
      boton.onclick = (e) => {
        
        const infoEvento = {
            id: e.target.getAttribute('data-id'),
            nombre: e.target.getAttribute('data-nombre'),
            precio: parseFloat(e.target.getAttribute('data-precio')),
            cantidad: 1
        };
        
        agregarAlCarrito(infoEvento);
      };
    });
    
    function agregarAlCarrito(nuevoTicket) {

      const existe = carrito.find(ticket => ticket.id === nuevoTicket.id);
      if (existe) {
        existe.cantidad += 1;
      } else {
        carrito.push(nuevoTicket);
      }
      localStorage.setItem('tickets', JSON.stringify(carrito));
      alert(`Boleto para ${nuevoTicket.nombre} agregado a Mis Boletos.`);
    }
}
 



function enviarFormulario() {
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
}




