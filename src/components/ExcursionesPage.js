import React, { useState } from "react";
import styled from "styled-components";
import fondoExcursiones from "../assets/excursiones_fondo.png"; 



const destinosConExcursiones = [
  {
    destino: "Buenos Aires 🇦🇷",
    excursiones: [
      { nombre: "City Tour por Buenos Aires 🏛️", descripcion: "Descubre los rincones más emblemáticos de la ciudad en un recorrido guiado.", descripcionDetallada: "Embárcate en un fascinante City Tour por Buenos Aires y descubre los rincones que hacen de esta ciudad un destino único. Nuestro recorrido te llevará por los barrios más representativos, cada uno con su propia identidad y encanto:\n\n- **San Telmo:** Sumérgete en el ambiente bohemio de calles adoquinadas, ferias de antigüedades y la esencia del tango que resuena en cada esquina.\n\n- **La Boca:** Déjate cautivar por el colorido Caminito, donde las casas pintadas de vivos colores y los artistas callejeros reflejan la vibrante cultura porteña.\n\n- **Recoleta:** Admira la elegancia arquitectónica y visita el famoso Cementerio de Recoleta, última morada de figuras históricas argentinas.\n\n- **Palermo:** Disfruta de los amplios espacios verdes, como los Bosques de Palermo, y descubre una zona repleta de tendencias, gastronomía y vida nocturna.\n\n- **Centro Histórico:** Recorre la emblemática Plaza de Mayo, corazón político del país, rodeada de edificios históricos como la Casa Rosada y la Catedral Metropolitana.\n\nDurante este tour de aproximadamente 3 horas, contarás con la compañía de un guía experto que te brindará relatos y datos históricos, enriqueciendo tu experiencia y comprensión de la ciudad. El transporte es cómodo y climatizado, asegurando un paseo placentero por esta metrópolis llena de vida y contrastes.\n\nNo pierdas la oportunidad de vivir Buenos Aires de una manera única y profunda, explorando sus barrios icónicos y sumergiéndote en su inigualable atmósfera.",
        imagen: "/imagenes/puerto_madero.png"
      },
      { 
        nombre: "Tigre y Delta del Paraná 🚤", 
        descripcion: "Un viaje en barco por las islas del Delta, un oasis natural cerca de la ciudad.",
        descripcionDetallada: "Vive una experiencia inolvidable explorando el Delta del Paraná en un paseo en barco. Este tour te llevará a descubrir un ecosistema único, compuesto por cientos de islas, ríos y canales que forman un paraíso natural a pocos kilómetros de Buenos Aires.\n\nPodrás disfrutar de un recorrido en lancha por el Río de la Plata y los sinuosos canales del Delta, apreciando la vegetación exuberante y las casas sobre pilotes que caracterizan a esta zona. Durante el paseo, conocerás la historia y la vida cotidiana de los habitantes del Delta, quienes utilizan el agua como su principal medio de transporte.\n\nEl tour incluye una parada en el famoso Puerto de Frutos, un mercado tradicional donde podrás encontrar artesanías, muebles rústicos y productos locales. También tendrás la oportunidad de visitar museos y espacios culturales que narran la historia de la región.\n\nEste recorrido es ideal para quienes buscan una escapada tranquila y natural sin alejarse demasiado de la ciudad. Relájate, respira aire puro y disfruta de la belleza del Delta del Paraná.",
        imagen: "/imagenes/tigre_y_delta_del_parana.jpg"
      },
      {
        nombre: "Cena Tango Show 💃", 
        descripcion: "Disfruta de una noche inolvidable con el mejor tango y gastronomía argentina.",
        descripcionDetallada: "Sumérgete en la magia del tango con una cena show en uno de los más prestigiosos teatros de Buenos Aires. En este espectáculo, disfrutarás de una puesta en escena impactante con bailarines profesionales, músicos en vivo y cantantes que interpretan las más icónicas melodías del tango argentino.\n\nAntes del show, podrás degustar una cena de tres pasos con opciones de platos típicos argentinos, como empanadas, asado y postres tradicionales, acompañados de vinos seleccionados.\n\nEl ambiente del lugar, con su iluminación tenue y decoración elegante, te transportará a la época dorada del tango, permitiéndote vivir una experiencia cultural única e inolvidable.\n\nIdeal para parejas, amantes de la música y viajeros que desean conocer una de las expresiones artísticas más importantes de Argentina, la Cena Tango Show es un plan imperdible en Buenos Aires.", imagen: "/imagenes/tango_y_gastronomia.png"},
    ]
  },
  {
    destino: "Cataratas del Iguazú 🌊",
    excursiones: [
      {
        nombre: "Parque Nacional Iguazú 🌿",
        descripcion: "Recorre las pasarelas del Parque Nacional Iguazú, con vistas impresionantes de las cataratas y la Garganta del Diablo. Incluye el Circuito Superior y el Circuito Inferior, acercándote a los saltos de agua.",
        descripcionDetallada: "Este recorrido incluye el Circuito Superior, que brinda perspectivas aéreas de las caídas de agua, y el Circuito Inferior, que se adentra más cerca del nivel del río. Además, puedes tomar el Tren Ecológico de la Selva para llegar a la Estación Garganta del Diablo y disfrutar de las vistas desde el mirador.",
        imagen: "https://tse3.mm.bing.net/th?id=OIP.R2g4mXQAokwJUgbe1QliOgHaE7&pid=Api"
      },
      {
        nombre: "Gran Aventura 🚤",
        descripcion: "Un paseo en lancha por debajo de los saltos de agua más impactantes. Aventura en la selva y en el agua.",
        descripcionDetallada: "La Gran Aventura combina un recorrido en vehículo por la selva y un paseo en lancha por el río Iguazú. Te acercarás a los saltos San Martín y Tres Mosqueteros, y vivirás el 'bautismo de las brumas', una experiencia que te empapará de emoción.",
        imagen: "https://tse4.mm.bing.net/th?id=OIP.6UKYSNHONzt4WS0t7Cf1JgHaE8&pid=Api"
      },
      {
        nombre: "Excursión a Brasil 🇧🇷",
        descripcion: "Conoce el lado brasileño de las cataratas y disfruta de sus impresionantes panorámicas.",
        descripcionDetallada: "La excursión te lleva al Parque Nacional do Iguaçu en Brasil, donde podrás caminar por una pasarela cerca de la Garganta del Diablo. También incluye una visita al Parque das Aves, donde podrás observar diversas especies de aves exóticas.",
        imagen: "https://tse1.mm.bing.net/th?id=OIP.506tkbG8WZ6TVgHwg3uSEAHaE6&pid=Api"
      }
    ]
  },
  {
    destino: "Salta y Jujuy 🏜️",
    excursiones: [
      {
        nombre: "Quebrada de Humahuaca 🌄",
        descripcion: "Paisajes de colores vibrantes en un recorrido lleno de historia y cultura.",
        descripcionDetallada: "Este recorrido te lleva por un cañón de 155 km de largo, declarado Patrimonio de la Humanidad por la UNESCO. A lo largo del trayecto, encontrarás pueblos como Purmamarca, famoso por su Cerro de los 7 Colores, y Tilcara, con su Pucará, una antigua fortaleza precolombina.",
        imagen: "https://tse1.mm.bing.net/th?id=OIP.8rEYG7g7Ib3nNEAOYm295gHaFG&pid=Api"
      },
      {
        nombre: "Salinas Grandes ⛰️",
        descripcion: "Un desierto de sal que parece un espejo gigante bajo el cielo azul.",
        descripcionDetallada: "Las Salinas Grandes, ubicadas en la Puna jujeña, son una vasta extensión de más de 21,000 hectáreas de sal, a 3,500 metros sobre el nivel del mar. Este desierto blanco ofrece un paisaje surrealista, ideal para fotos únicas.",
        imagen: "https://tse1.mm.bing.net/th?id=OIP.0pNAjvpwFmsJsp8EuNicSQHaEo&pid=Api"
      },
      {
        nombre: "Cafayate 🍷",
        descripcion: "Un viaje por los Valles Calchaquíes y sus increíbles bodegas de altura.",
        descripcionDetallada: "Cafayate, ubicado en los Valles Calchaquíes, es famoso por su producción vitivinícola de altura. En el recorrido por la Quebrada de las Conchas, podrás admirar formaciones rocosas como La Garganta del Diablo y El Anfiteatro. Además, podrás visitar bodegas y degustar el vino Torrontés.",
        imagen: "https://tse2.mm.bing.net/th?id=OIP.m_OdfHx_p2dadIXIF-D-LgHaEK&pid=Api"
      },
    ]
  },
  {
    destino: "Mendoza 🍇",
    excursiones: [
      {
        nombre: "Ruta del Vino 🍷",
        descripcion: "Degusta los mejores vinos en bodegas con paisajes impresionantes de fondo.",
        descripcionDetallada: "Explora las principales regiones vitivinícolas de Mendoza: Maipú, Luján de Cuyo y el Valle de Uco. Visita bodegas tradicionales y modernas, aprende sobre el proceso de elaboración del vino y disfruta de degustaciones de variedades emblemáticas como el Malbec, todo ello acompañado de vistas panorámicas de la Cordillera de los Andes.",
        imagen: "https://tse1.mm.bing.net/th?q=Ruta+del+Vino+Mendoza"
      },
      {
        nombre: "Alta Montaña 🏔️",
        descripcion: "Un recorrido hasta el Aconcagua, el pico más alto de América.",
        descripcionDetallada: "Este circuito te lleva por la Ruta Nacional 7, atravesando la precordillera y ofreciendo vistas impresionantes del río Mendoza y la Cordillera de los Andes. Durante el trayecto, visitarás lugares emblemáticos como Potrerillos, Uspallata, el Puente del Inca y el mirador del Aconcagua, permitiéndote apreciar la majestuosidad del 'Techo de América'.",
        imagen: "https://tse1.mm.bing.net/th?q=Alta+Montaña+Mendoza"
      },
      {
        nombre: "Termas de Cacheuta ♨️",
        descripcion: "Relájate en aguas termales rodeadas de montañas.",
        descripcionDetallada: "Ubicadas a orillas del río Mendoza, las Termas de Cacheuta ofrecen piscinas de piedra con aguas termales naturales que oscilan entre 35°C y 50°C. Además de disfrutar de baños termales, puedes acceder a servicios de spa, masajes y circuitos de hidroterapia, todo en un entorno natural impresionante.",
        imagen: "https://tse1.mm.bing.net/th?q=Termas+de+Cacheuta"
      },
    ]
  },
    {
      destino: "Bariloche 🏞️",
      excursiones: [
        {
          nombre: "Circuito Chico 🚵",
          descripcion: "Recorrido panorámico con vistas impresionantes del lago Nahuel Huapi.",
          descripcionDetallada: "Recorrido turístico de 60 km alrededor del lago Nahuel Huapi, con vistas a montañas y bosques, incluyendo la visita al Cerro Campanario, uno de los miradores más famosos de la zona.",
          imagen: "https://tse1.mm.bing.net/th?q=Circuito+Chico+Bariloche"
        },
        {
          nombre: "Isla Victoria y Bosque de Arrayanes 🌳",
          descripcion: "Navegación por el lago para descubrir paisajes mágicos.",
          descripcionDetallada: "Una excursión en barco por el lago Nahuel Huapi que incluye una parada en la Isla Victoria, hogar del Bosque de Arrayanes, un bosque único con árboles de corteza blanca.",
          imagen: "https://tse1.mm.bing.net/th?q=Isla+Victoria+Bariloche"
        },
        {
          nombre: "Cerro Catedral 🎿",
          descripcion: "El centro de esquí más grande de Sudamérica, ideal para deportes de invierno.",
          descripcionDetallada: "Visita el famoso Cerro Catedral, un destino de clase mundial para el esquí y el snowboard, con más de 1.200 hectáreas esquiables y vistas impresionantes de los Andes patagónicos.",
          imagen: "https://tse1.mm.bing.net/th?q=Cerro+Catedral+Bariloche"
        }
      ]
    },
    {
      destino: "El Calafate ❄️",
      excursiones: [
        {
          nombre: "Glaciar Perito Moreno 🏔️",
          descripcion: "Maravíllate con el imponente glaciar y su espectáculo de desprendimientos.",
          descripcionDetallada: "Una de las maravillas naturales de Argentina, donde podrás observar el Perito Moreno, un glaciar de 250 km², que se desplaza y derrumba enormes bloques de hielo en el lago Argentino.",
          imagen: "https://tse1.mm.bing.net/th?q=Glaciar+Perito+Moreno"
        },
        {
          nombre: "Navegación Ríos de Hielo 🚢",
          descripcion: "Un recorrido en barco para ver los glaciares Upsala y Spegazzini.",
          descripcionDetallada: "Navega por los lagos del Parque Nacional Los Glaciares y disfruta de las vistas de imponentes glaciares como el Upsala y el Spegazzini, uno de los más altos de la región.",
          imagen: "https://tse1.mm.bing.net/th?q=Navegación+Ríos+de+Hielo+Calafate"
        },
        {
          nombre: "Trekking sobre el Glaciar 🥾",
          descripcion: "Camina sobre el hielo en una experiencia única.",
          descripcionDetallada: "Una experiencia única para quienes buscan vivir la aventura de caminar sobre el glaciar Perito Moreno, con equipos adecuados y guías especializados.",
          imagen: "https://tse1.mm.bing.net/th?q=Trekking+sobre+el+Glaciar+Calafate"
        }
      ]
    },
    {
      destino: "Ushuaia ❄️",
      excursiones: [
        {
          nombre: "Parque Nacional Tierra del Fuego 🌲",
          descripcion: "Explora el parque más austral del mundo con paisajes increíbles.",
          descripcionDetallada: "El Parque Nacional Tierra del Fuego, ubicado en el fin del mundo, ofrece paisajes naturales impresionantes, desde bosques subantárticos hasta lagos cristalinos, ideales para el trekking y la observación de fauna.",
          imagen: "https://tse1.mm.bing.net/th?q=Parque+Nacional+Tierra+del+Fuego+Ushuaia"
        },
        {
          nombre: "Navegación Canal Beagle 🚢",
          descripcion: "Un recorrido por el canal para avistar lobos marinos y el Faro Les Eclaireurs.",
          descripcionDetallada: "Una navegación por el Canal Beagle, donde podrás observar especies marinas como lobos marinos y aves, además de disfrutar de la vista del Faro Les Eclaireurs, conocido como el faro del fin del mundo.",
          imagen: "https://tse1.mm.bing.net/th?q=Navegación+Canal+Beagle+Ushuaia"
        },
        {
          nombre: "Trekking Laguna Esmeralda 🥾",
          descripcion: "Una caminata entre montañas hasta una laguna de color turquesa.",
          descripcionDetallada: "El trekking a la Laguna Esmeralda te llevará a través de bosques y montañas para llegar a una laguna de aguas turquesas, rodeada de un paisaje espectacular.",
          imagen: "https://tse1.mm.bing.net/th?q=Trekking+Laguna+Esmeralda+Ushuaia"
        }
      ]
    },
    {
      destino: "Mar del Plata 🏖️",
      excursiones: [
        {
          nombre: "Tour por Playas del Sur 🌊",
          descripcion: "Disfruta de las mejores playas alejadas del centro con aguas más limpias.",
          descripcionDetallada: "Un recorrido por las playas más tranquilas y limpias de Mar del Plata, perfectas para quienes buscan relajarse lejos del bullicio del centro.",
          imagen: "https://tse1.mm.bing.net/th?q=Playas+del+Sur+Mar+del+Plata"
        },
        {
          nombre: "Puerto y Lobos Marinos 🦭",
          descripcion: "Visita el puerto y observa a los simpáticos lobos marinos en su hábitat.",
          descripcionDetallada: "Recorrido por el puerto de Mar del Plata donde podrás ver lobos marinos en su hábitat natural, una experiencia imperdible para los amantes de la fauna marina.",
          imagen: "https://tse1.mm.bing.net/th?q=Puerto+y+Lobos+Marinos+Mar+del+Plata"
        },
        {
          nombre: "Aquarium Mar del Plata 🐠",
          descripcion: "Un parque marino con espectáculos de delfines y shows educativos.",
          descripcionDetallada: "Disfruta de un día en el Aquarium Mar del Plata, donde podrás ver delfines, lobos marinos y diversas especies marinas, además de participar en actividades educativas y espectáculos.",
          imagen: "https://tse1.mm.bing.net/th?q=Aquarium+Mar+del+Plata"
        }
      ]
  },
  {
    destino: "Villa La Angostura 🌿",
    excursiones: [
      {
        nombre: "Bosque de Arrayanes 🌳",
        descripcion: "Un bosque único en el mundo con senderos mágicos.",
        descripcionDetallada: "Este bosque alberga árboles con una corteza blanca única, creando un paisaje increíble. El recorrido en sendero te permitirá adentrarte en su vegetación única y observar la fauna local.",
        imagen: "https://tse1.mm.bing.net/th?q=Bosque+de+Arrayanes+Villa+La+Angostura"
      },
      {
        nombre: "Ruta de los 7 Lagos 🚗",
        descripcion: "Un recorrido panorámico entre montañas y lagos cristalinos.",
        descripcionDetallada: "Un impresionante recorrido por la cordillera de los Andes, pasando por siete lagos rodeados de bosques, con vistas espectaculares y múltiples puntos de parada para disfrutar del paisaje.",
        imagen: "https://tse1.mm.bing.net/th?q=Ruta+de+los+7+Lagos+Villa+La+Angostura"
      },
      {
        nombre: "Lago Correntoso 🚣",
        descripcion: "Ideal para practicar kayak en aguas tranquilas y rodeadas de naturaleza.",
        descripcionDetallada: "El Lago Correntoso, conocido por sus aguas cristalinas y paisajes majestuosos, es perfecto para actividades acuáticas como el kayak, la pesca y paseos en bote.",
        imagen: "https://tse1.mm.bing.net/th?q=Lago+Correntoso+Villa+La+Angostura"
      }
    ]
  },
  {
    destino: "El Chaltén 🏔️",
    excursiones: [
      {
        nombre: "Trekking Laguna de los Tres ⛺",
        descripcion: "La caminata más emblemática con vistas al Fitz Roy.",
        descripcionDetallada: "Un trekking desafiante que te lleva a la Laguna de los Tres, ofreciendo vistas espectaculares del Monte Fitz Roy y sus alrededores. Ideal para los amantes del trekking de montaña.",
        imagen: "https://tse1.mm.bing.net/th?q=Trekking+Laguna+de+los+Tres+El+Chaltén"
      },
      {
        nombre: "Loma del Pliegue Tumbado 🏕️",
        descripcion: "Una vista panorámica increíble del valle y montañas.",
        descripcionDetallada: "El trekking hasta la Loma del Pliegue Tumbado te ofrece una vista panorámica impresionante del Parque Nacional Los Glaciares, con vistas de los picos más altos y el valle que rodea El Chaltén.",
        imagen: "https://tse1.mm.bing.net/th?q=Loma+del+Pliegue+Tumbado+El+Chaltén"
      },
      {
        nombre: "Laguna Capri 🏞️",
        descripcion: "Un trekking accesible con vistas impresionantes.",
        descripcionDetallada: "Una caminata más accesible pero igualmente impresionante que lleva a la Laguna Capri, desde donde se pueden obtener vistas espectaculares del Monte Fitz Roy.",
        imagen: "https://tse1.mm.bing.net/th?q=Laguna+Capri+El+Chaltén"
      }
    ]
  },
  {
    destino: "San Juan 🌄",
    excursiones: [
      {
        nombre: "Valle de la Luna 🌕",
        descripcion: "Un paisaje lunar increíble en el Parque Ischigualasto.",
        descripcionDetallada: "Este paisaje único parece de otro planeta, con formaciones rocosas de colores extraños y estructuras que se asemejan a un paisaje lunar. El recorrido te lleva a través de estos extraños terrenos.",
        imagen: "https://tse1.mm.bing.net/th?q=Valle+de+la+Luna+San+Juan"
      },
      {
        nombre: "Difunta Correa 🛐",
        descripcion: "Visita un famoso santuario de peregrinación.",
        descripcionDetallada: "El Santuario de la Difunta Correa es un lugar sagrado de gran importancia en Argentina, donde los visitantes rinden homenaje a la figura de la Difunta Correa, una mujer que se convirtió en un símbolo de fe popular.",
        imagen: "https://tse1.mm.bing.net/th?q=Difunta+Correa+San+Juan"
      },
      {
        nombre: "Dique de Ullum 🚣",
        descripcion: "Un hermoso lago artificial ideal para deportes acuáticos.",
        descripcionDetallada: "El Dique de Ullum, además de su belleza, es un lugar perfecto para la práctica de deportes acuáticos como el kayak, el windsurf y la pesca, rodeado de paisajes de montaña.",
        imagen: "https://tse1.mm.bing.net/th?q=Dique+de+Ullum+San+Juan"
      }
    ]
  },
  {
    destino: "Córdoba 🏕️",
    excursiones: [
      {
        nombre: "La Cumbrecita 🌲",
        descripcion: "Un pueblo alpino peatonal rodeado de montañas y bosques.",
        descripcionDetallada: "La Cumbrecita es un pintoresco pueblo de estilo alpino, ideal para caminar entre bosques de coníferas y disfrutar de la tranquilidad del entorno montañoso, sin el ruido de los coches, ya que es un pueblo peatonal.",
        imagen: "https://tse1.mm.bing.net/th?q=La+Cumbrecita+Córdoba"
      },
      {
        nombre: "Camino de las Altas Cumbres 🚗",
        descripcion: "Un recorrido por paisajes serranos con vistas impresionantes.",
        descripcionDetallada: "El Camino de las Altas Cumbres es una ruta panorámica que atraviesa las sierras de Córdoba, ofreciendo vistas espectaculares y varios puntos de interés natural, ideal para los amantes del senderismo y la fotografía.",
        imagen: "https://tse1.mm.bing.net/th?q=Camino+de+las+Altas+Cumbres+Córdoba"
      },
      {
        nombre: "Los Gigantes 🏞️",
        descripcion: "Senderismo entre enormes formaciones rocosas.",
        descripcionDetallada: "Los Gigantes es un conjunto de formaciones rocosas en el corazón de las Sierras Grandes. El trekking a través de este paisaje ofrece una experiencia única, con grandes piedras y vistas panorámicas del valle.",
        imagen: "https://tse1.mm.bing.net/th?q=Los+Gigantes+Córdoba"
      }
    ]
      },
      {
        destino: "Rosario 🌉",
        excursiones: [
          {
            nombre: "Monumento a la Bandera 🇦🇷",
            descripcion: "Un paseo histórico por el símbolo de la ciudad.",
            descripcionDetallada: "Visita al Monumento Nacional a la Bandera, un símbolo de la historia de Argentina, que incluye un imponente obelisco y una explanada rodeada de esculturas, donde se realizan actos patrios.",
            imagen: "https://tse1.mm.bing.net/th?q=Monumento+a+la+Bandera+Rosario"
          },
          {
            nombre: "Islas del Paraná 🛶",
            descripcion: "Un recorrido en lancha por el delta del Paraná.",
            descripcionDetallada: "Disfruta de un paseo en lancha por las islas del Delta del Paraná, un paraíso natural con flora y fauna únicas, ideal para quienes buscan escapar del bullicio de la ciudad.",
            imagen: "https://tse1.mm.bing.net/th?q=Islas+del+Paraná+Rosario"
          },
          {
            nombre: "Museo de Arte Contemporáneo 🖼️",
            descripcion: "Una colección única en un edificio colorido.",
            descripcionDetallada: "El Museo de Arte Contemporáneo de Rosario, ubicado en un edificio modernista junto al río, alberga una vasta colección de arte contemporáneo y ofrece vistas impresionantes de la ciudad.",
            imagen: "https://tse1.mm.bing.net/th?q=Museo+de+Arte+Contemporáneo+Rosario"
          }
        ]
      },
      {
        destino: "La Rioja 🏜️",
        excursiones: [
          {
            nombre: "Talampaya 🏜️",
            descripcion: "Un parque con cañones rojizos y formaciones geológicas únicas.",
            descripcionDetallada: "Talampaya, un parque natural en la provincia de La Rioja, presenta paisajes desérticos únicos, con formaciones rocosas de colores rojizos y cañones que te transportan a otro mundo.",
            imagen: "https://tse1.mm.bing.net/th?q=Talampaya+La+Rioja"
          },
          {
            nombre: "Cuesta de Miranda 🌄",
            descripcion: "Un camino de montaña con vistas espectaculares.",
            descripcionDetallada: "Este camino de montaña ofrece panorámicas impresionantes de la región, permitiendo apreciar los cambios de paisaje mientras asciendes entre sierras y valles.",
            imagen: "https://tse1.mm.bing.net/th?q=Cuesta+de+Miranda+La+Rioja"
          },
          {
            nombre: "Parque Nacional El Chiflón 🏞️",
            descripcion: "Paisajes áridos con formaciones rocosas impresionantes.",
            descripcionDetallada: "Un parque de belleza desértica, con formaciones rocosas talladas por el viento y las lluvias, creando paisajes áridos y extraordinarios ideales para el senderismo y la fotografía.",
            imagen: "https://tse1.mm.bing.net/th?q=Parque+Nacional+El+Chiflón+La+Rioja"
          }
        ]
      },
      {
        destino: "Neuquén 🏞️",
        excursiones: [
          {
            nombre: "Dinosaurios de Villa El Chocón 🦕",
            descripcion: "Un museo con fósiles gigantes de dinosaurios.",
            descripcionDetallada: "Este museo alberga fósiles de dinosaurios prehistóricos encontrados en la región de Villa El Chocón, proporcionando una fascinante mirada al pasado remoto de la Tierra.",
            imagen: "https://tse1.mm.bing.net/th?q=Dinosaurios+de+Villa+El+Chocón+Neuquén"
          },
          {
            nombre: "Ruta del Vino Patagónico 🍷",
            descripcion: "Bodegas con vinos exclusivos de la región.",
            descripcionDetallada: "Recorre la Ruta del Vino Patagónico en Neuquén, visitando bodegas que producen algunos de los mejores vinos del país, mientras disfrutas de catas y vistas panorámicas del paisaje andino.",
            imagen: "https://tse1.mm.bing.net/th?q=Ruta+del+Vino+Patagónico+Neuquén"
          },
          {
            nombre: "Lago Aluminé 🚣",
            descripcion: "Aguas cristalinas perfectas para deportes náuticos.",
            descripcionDetallada: "El Lago Aluminé, rodeado de montañas y bosques, ofrece aguas cristalinas, ideales para disfrutar de deportes acuáticos como el kayak y el remo, en un entorno natural imponente.",
            imagen: "https://tse1.mm.bing.net/th?q=Lago+Aluminé+Neuquén"
          }
        ]
      },
      {
        destino: "San Luis ⛰️",
        excursiones: [
          {
            nombre: "Sierra de las Quijadas 🏜️",
            descripcion: "Un parque con paisajes rojizos y senderos asombrosos.",
            descripcionDetallada: "La Sierra de las Quijadas es un parque de gran belleza natural, con formaciones rocosas únicas, senderos de dificultad variada y vistas impresionantes del desierto sanluiseño.",
            imagen: "https://tse1.mm.bing.net/th?q=Sierra+de+las+Quijadas+San+Luis"
          },
          {
            nombre: "Salto del Tabaquillo 💦",
            descripcion: "Una caminata entre sierras hasta una cascada oculta.",
            descripcionDetallada: "Un sendero que lleva a una cascada oculta en las sierras de San Luis, ofreciendo un hermoso paisaje de montaña y un respiro refrescante en medio del recorrido.",
            imagen: "https://tse1.mm.bing.net/th?q=Salto+del+Tabaquillo+San+Luis"
          },
          {
            nombre: "Potrero de los Funes 🏞️",
            descripcion: "Un hermoso lago rodeado de montañas y senderos.",
            descripcionDetallada: "Potrero de los Funes es un hermoso lago enclavado entre las sierras de San Luis, con senderos para caminar y disfrutar de vistas espectaculares, ideal para un día de descanso y exploración.",
            imagen: "https://tse1.mm.bing.net/th?q=Potrero+de+los+Funes+San+Luis"
          }
        ]
      },
      {
        destino: "Tucumán 🌄",
        excursiones: [
          {
            nombre: "Circuito Valle Calchaquí 🌵",
            descripcion: "Recorrido por Tafí del Valle, Amaicha y la Ciudad Sagrada de Quilmes.",
            descripcionDetallada: "Un recorrido por uno de los paisajes más impresionantes de Argentina, visitando los pintorescos pueblos de Tafí del Valle y Amaicha, y explorando las ruinas de la Ciudad Sagrada de Quilmes.",
            imagen: "https://tse1.mm.bing.net/th?q=Circuito+Valle+Calchaquí+Tucumán"
          },
          {
            nombre: "Cerro San Javier 🚶‍♂️",
            descripcion: "Trekking con vistas panorámicas de la ciudad de Tucumán.",
            descripcionDetallada: "El trekking al Cerro San Javier ofrece vistas espectaculares de la ciudad de Tucumán y sus alrededores, pasando por paisajes montañosos y vegetación nativa.",
            imagen: "https://tse1.mm.bing.net/th?q=Cerro+San+Javier+Tucumán"
          },
          {
            nombre: "Parque Sierra de San Javier 🌲",
            descripcion: "Explora senderos entre la vegetación selvática.",
            descripcionDetallada: "Este parque ofrece senderos para caminatas entre bosques de montañas, donde la flora y fauna selvática se combinan para crear un ambiente único de exploración y aventura.",
            imagen: "https://tse1.mm.bing.net/th?q=Parque+Sierra+de+San+Javier+Tucumán"
          }
        ]
      },
      {
        destino: "Corrientes 🏝️",
        excursiones: [
          {
            nombre: "Esteros del Iberá 🐊",
            descripcion: "Avistaje de fauna en uno de los humedales más importantes del mundo.",
            descripcionDetallada: "Los Esteros del Iberá son una de las áreas de humedales más grandes del mundo, ideales para el avistaje de fauna, incluidos caimanes, capibaras y diversas especies de aves.",
            imagen: "https://tse1.mm.bing.net/th?q=Esteros+del+Iberá+Corrientes"
          },
          {
            nombre: "City Tour por Corrientes 🏛️",
            descripcion: "Recorrido por la historia y cultura de la capital.",
            descripcionDetallada: "Un recorrido turístico por la ciudad de Corrientes, donde podrás conocer su historia, arquitectura y cultura local, incluyendo monumentos, plazas y edificios emblemáticos.",
            imagen: "https://tse1.mm.bing.net/th?q=City+Tour+por+Corrientes"
          },
          {
            nombre: "Playas de Paso de la Patria 🏖️",
            descripcion: "Relájate en las mejores playas de Corrientes.",
            descripcionDetallada: "Las playas de Paso de la Patria, a orillas del río Paraná, son el lugar perfecto para relajarse, disfrutar del sol y practicar deportes acuáticos como el windsurf y el kitesurf.",
            imagen: "https://tse1.mm.bing.net/th?q=Playas+de+Paso+de+la+Patria+Corrientes"
          }
        ]
      },
      {
        destino: "Misiones 🌿",
        excursiones: [
          {
            nombre: "Minas de Wanda ⛏️",
            descripcion: "Visita a minas de piedras preciosas en plena selva misionera.",
            descripcionDetallada: "Explora las minas de Wanda, donde podrás ver el proceso de extracción de piedras preciosas como amatistas y cuarzos, en un entorno selvático impresionante.",
            imagen: "https://tse1.mm.bing.net/th?q=Minas+de+Wanda+Misiones"
          },
          {
            nombre: "Saltos del Moconá 🌊",
            descripcion: "Descubre un sistema de cascadas único en el mundo.",
            descripcionDetallada: "Los Saltos del Moconá son cascadas en el río Uruguay que forman un sistema único de saltos en forma de cortina, uno de los pocos en el mundo, rodeado de un exuberante paisaje selvático.",
            imagen: "https://tse1.mm.bing.net/th?q=Saltos+del+Moconá+Misiones"
          },
          {
            nombre: "Ruinas de San Ignacio 🏛️",
            descripcion: "Explora las ruinas jesuíticas en plena selva.",
            descripcionDetallada: "Las Ruinas de San Ignacio, en la provincia de Misiones, son un sitio arqueológico que preserva la historia de las misiones jesuíticas en la región, rodeado de la selva misionera.",
            imagen: "https://tse1.mm.bing.net/th?q=Ruinas+de+San+Ignacio+Misiones"
          }
    ]
  },
  {
    destino: "Chaco 🌾",
    excursiones: [
        {
            nombre: "Parque Nacional Chaco 🌳",
            descripcion: "Senderos para descubrir la flora y fauna del Gran Chaco.",
            descripcionDetallada: "El Parque Nacional Chaco es un refugio natural que conserva la biodiversidad del Gran Chaco, una de las regiones más extensas de Sudamérica. En sus senderos podrás observar especies autóctonas como osos hormigueros y yaguaretés.",
            imagen: "https://tse1.mm.bing.net/th?q=Parque+Nacional+Chaco"
        },
        {
            nombre: "Resistencia, ciudad de las esculturas 🗿",
            descripcion: "Recorre las calles con más de 500 esculturas al aire libre.",
            descripcionDetallada: "La ciudad de Resistencia es famosa por su monumental colección de esculturas al aire libre. A lo largo de sus calles encontrarás más de 500 piezas de artistas nacionales e internacionales, creando un recorrido único de arte urbano.",
            imagen: "https://tse1.mm.bing.net/th?q=Resistencia+ciudad+de+las+esculturas"
        },
        {
            nombre: "Isla del Cerrito 🏝️",
            descripcion: "Un paraíso natural ideal para pesca y descanso.",
            descripcionDetallada: "La Isla del Cerrito es un pequeño paraíso en el río Paraná, conocido por su tranquilidad y belleza natural. Ideal para pescar, navegar y disfrutar de la flora y fauna local en un ambiente relajado y alejado del bullicio.",
            imagen: "https://tse1.mm.bing.net/th?q=Isla+del+Cerrito+Chaco"
        }
    ]
},
{
    destino: "Formosa 🌅",
    excursiones: [
        {
            nombre: "Bañado La Estrella 🐊",
            descripcion: "Uno de los humedales más grandes de Sudamérica.",
            descripcionDetallada: "El Bañado La Estrella es un ecosistema único que alberga una gran diversidad de flora y fauna, incluyendo caimanes y aves migratorias. Un lugar ideal para el ecoturismo y el avistaje de fauna.",
            imagen: "https://tse1.mm.bing.net/th?q=Bañado+La+Estrella+Formosa"
        },
        {
            nombre: "Parque Nacional Río Pilcomayo 🏞️",
            descripcion: "Explora lagunas y selva con una biodiversidad increíble.",
            descripcionDetallada: "El Parque Nacional Río Pilcomayo es un área protegida que mezcla selvas, lagunas y humedales. Es un lugar ideal para explorar la biodiversidad de la región y practicar ecoturismo.",
            imagen: "https://tse1.mm.bing.net/th?q=Parque+Nacional+Río+Pilcomayo+Formosa"
        },
        {
            nombre: "City Tour por Formosa 🏙️",
            descripcion: "Conoce la costanera y los puntos históricos de la ciudad.",
            descripcionDetallada: "En este recorrido por la ciudad de Formosa, podrás disfrutar de la costanera, sus plazas, monumentos y sitios históricos que cuentan la rica historia cultural de la región.",
            imagen: "https://tse1.mm.bing.net/th?q=City+Tour+por+Formosa"
        }
    ]
},
{
    destino: "Santa Fe 🌊",
    excursiones: [
        {
            nombre: "Río Paraná y sus islas 🛶",
            descripcion: "Un paseo en lancha para recorrer las islas cercanas.",
            descripcionDetallada: "En este paseo en lancha por el Río Paraná, podrás recorrer varias islas y disfrutar de la tranquilidad del agua mientras observas la vida silvestre de la región.",
            imagen: "https://tse1.mm.bing.net/th?q=Río+Paraná+islas+Santa+Fe"
        },
        {
            nombre: "Caminos del Che Guevara 🚶‍♂️",
            descripcion: "Recorrido por los lugares donde vivió el famoso revolucionario.",
            descripcionDetallada: "Este recorrido te llevará por los puntos históricos de la vida de Ernesto 'Che' Guevara en Santa Fe, como la casa donde nació y los lugares que marcaron su paso por la región.",
            imagen: "https://tse1.mm.bing.net/th?q=Caminos+del+Che+Guevara+Santa+Fe"
        },
        {
            nombre: "Reserva Ecológica El Pozo 🌱",
            descripcion: "Un refugio de flora y fauna en plena ciudad.",
            descripcionDetallada: "La Reserva Ecológica El Pozo es un espacio verde en el corazón de la ciudad de Santa Fe. Es un lugar ideal para hacer caminatas y observar aves, reptiles y plantas autóctonas de la región.",
            imagen: "https://tse1.mm.bing.net/th?q=Reserva+Ecológica+El+Pozo+Santa+Fe"
        }
    ]
},
{
    destino: "Entre Ríos 🏝️",
    excursiones: [
        {
            nombre: "Termas de Federación ♨️",
            descripcion: "Disfruta de aguas termales en un entorno natural relajante.",
            descripcionDetallada: "Las Termas de Federación son un centro turístico y termal que ofrece aguas termales en un entorno natural, rodeado de verde y tranquilidad, ideal para relajarse y revitalizarse.",
            imagen: "https://tse1.mm.bing.net/th?q=Termas+de+Federación+Entre+Ríos"
        },
        {
            nombre: "Parque Nacional El Palmar 🌴",
            descripcion: "Bosques de palmeras y senderos entre la naturaleza.",
            descripcionDetallada: "El Parque Nacional El Palmar alberga una de las últimas extensiones de palmares naturales de la región, junto con senderos que permiten adentrarse en su flora y fauna única.",
            imagen: "https://tse1.mm.bing.net/th?q=Parque+Nacional+El+Palmar+Entre+Ríos"
        },
        {
            nombre: "Carnavales de Gualeguaychú 🎭",
            descripcion: "Vive la alegría del carnaval más famoso del país.",
            descripcionDetallada: "Los Carnavales de Gualeguaychú son uno de los eventos más emblemáticos de Argentina, con desfiles de carrozas, comparsas y bailes que llenan de color y música la ciudad durante el verano.",
            imagen: "https://tse1.mm.bing.net/th?q=Carnavales+de+Gualeguaychú+Entre+Ríos"
        }
    ]
},
{
    destino: "Río Negro ⛰️",
    excursiones: [
        {
            nombre: "Caminata por el Valle Encantado 🏕️",
            descripcion: "Descubre formaciones rocosas con formas curiosas.",
            descripcionDetallada: "El Valle Encantado en Río Negro es un paisaje natural único, donde podrás recorrer formaciones rocosas con extrañas formas que parecen esculpidas por la naturaleza misma.",
            imagen: "https://tse1.mm.bing.net/th?q=Caminata+por+el+Valle+Encantado+Río+Negro"
        },
        {
            nombre: "Avistaje de fauna en Las Grutas 🐧",
            descripcion: "Observar pingüinos y lobos marinos en su hábitat natural.",
            descripcionDetallada: "En Las Grutas, puedes disfrutar del avistaje de fauna marina, como pingüinos y lobos marinos, en su hábitat natural, mientras exploras las costas patagónicas.",
            imagen: "https://tse1.mm.bing.net/th?q=Avistaje+de+fauna+en+Las+Grutas+Río+Negro"
        },
        {
            nombre: "Travesía en kayak por el Río Limay 🚣",
            descripcion: "Aguas cristalinas y paisajes impresionantes.",
            descripcionDetallada: "El Río Limay, con sus aguas cristalinas, ofrece una travesía en kayak rodeado de imponentes paisajes montañosos y naturales que te sorprenderán en cada remada.",
            imagen: "https://tse1.mm.bing.net/th?q=Travesía+en+kayak+Río+Limay+Río+Negro"
        }
    ]
  },
  {
    destino: "Chubut ❄️",
    excursiones: [
        {
            nombre: "Pingüinera de Punta Tombo 🐧",
            descripcion: "La mayor colonia de pingüinos de Magallanes en Sudamérica.",
            descripcionDetallada: "La Pingüinera de Punta Tombo es una de las mayores colonias de pingüinos de Magallanes en Sudamérica, ubicada en la costa de Chubut. Durante la temporada de anidación, puedes observar a cientos de estos adorables animales en su hábitat natural.",
            imagen: "https://tse1.mm.bing.net/th?q=Pingüinera+de+Punta+Tombo+Chubut"
        },
        {
            nombre: "Avistaje de ballenas en Puerto Madryn 🐋",
            descripcion: "Observa estos gigantes marinos de cerca.",
            descripcionDetallada: "En Puerto Madryn, puedes realizar excursiones para avistar ballenas francas australes, uno de los avistajes más impresionantes de la fauna marina. Es una experiencia única para acercarse a estos gigantes marinos en su hábitat natural.",
            imagen: "https://tse1.mm.bing.net/th?q=Avistaje+de+ballenas+Puerto+Madryn"
        },
        {
            nombre: "Parque Nacional Los Alerces 🌲",
            descripcion: "Senderos, lagos y glaciares en un entorno único.",
            descripcionDetallada: "El Parque Nacional Los Alerces, en la cordillera de los Andes, ofrece una belleza natural incomparable, con senderos rodeados de alerces milenarios, lagos cristalinos y glaciares. Es un paraíso para los amantes de la naturaleza y el ecoturismo.",
            imagen: "https://tse1.mm.bing.net/th?q=Parque+Nacional+Los+Alerces+Chubut"
        }
    ]
},
{
    destino: "Santa Cruz 🏔️",
    excursiones: [
        {
            nombre: "Monte Fitz Roy 🏕️",
            descripcion: "Senderismo entre paisajes de montañas y glaciares.",
            descripcionDetallada: "El Monte Fitz Roy es una de las montañas más icónicas de la Patagonia, famosa por su imponente figura. Ofrece rutas de senderismo que permiten disfrutar de vistas espectaculares de sus glaciares y paisajes agrestes.",
            imagen: "https://tse1.mm.bing.net/th?q=Monte+Fitz+Roy+Santa+Cruz"
        },
        {
            nombre: "Cueva de las Manos ✋",
            descripcion: "Arte rupestre milenario en un cañón impresionante.",
            descripcionDetallada: "La Cueva de las Manos es un sitio arqueológico único en el mundo, conocido por sus pinturas rupestres, algunas de las cuales datan de 13,000 años. Las huellas de manos en las paredes de este cañón son testimonio de las antiguas civilizaciones patagónicas.",
            imagen: "https://tse1.mm.bing.net/th?q=Cueva+de+las+Manos+Santa+Cruz"
        },
        {
            nombre: "Navegación por el Lago Argentino 🚢",
            descripcion: "Explora los glaciares desde un barco.",
            descripcionDetallada: "Una navegación por el Lago Argentino te permitirá explorar sus aguas cristalinas mientras te aproximas a los majestuosos glaciares, como el Perito Moreno, y disfrutas de un paisaje impresionante en la región patagónica.",
            imagen: "https://tse1.mm.bing.net/th?q=Navegación+por+el+Lago+Argentino+Santa+Cruz"
        }
    ]
},
{
    destino: "Tierra del Fuego ❄️",
    excursiones: [
        {
            nombre: "Tren del Fin del Mundo 🚂",
            descripcion: "Un paseo histórico por paisajes inigualables.",
            descripcionDetallada: "El Tren del Fin del Mundo es una histórica travesía en el sur de Argentina, donde podrás recorrer paisajes patagónicos únicos, pasando por bosques y montañas, y conociendo la historia del primer ferrocarril en la región.",
            imagen: "/imagenes/tren_del_fin.jpg"
        },
        {
            nombre: "Excursión a la Laguna Esmeralda 🏔️",
            descripcion: "Trekking hasta una laguna de aguas turquesas.",
            descripcionDetallada: "La Laguna Esmeralda es un pequeño pero impresionante cuerpo de agua en Tierra del Fuego. El trekking hacia la laguna ofrece vistas panorámicas de montañas y glaciares, con la recompensa de un paisaje natural de aguas turquesas.",
            imagen: "https://tse1.mm.bing.net/th?q=Excursión+a+la+Laguna+Esmeralda+Tierra+del+Fuego"
        },
        {
            nombre: "Navegación hasta la Isla Martillo 🐧",
            descripcion: "Camina entre pingüinos en su hábitat natural.",
            descripcionDetallada: "La Isla Martillo es famosa por ser hogar de una colonia de pingüinos de Magallanes. Esta excursión te permitirá caminar entre ellos y disfrutar de su comportamiento en un entorno natural espectacular.",
            imagen: "https://tse1.mm.bing.net/th?q=Navegación+hasta+la+Isla+Martillo+Tierra+del+Fuego"
        }
    ]
},
{
    destino: "San Luis 🏜️",
    excursiones: [
        {
            nombre: "Parque Nacional Sierra de las Quijadas 🏜️",
            descripcion: "Caminatas entre cañones y formaciones geológicas únicas.",
            descripcionDetallada: "El Parque Nacional Sierra de las Quijadas ofrece un paisaje de cañones y formaciones rocosas únicas, donde puedes realizar caminatas y disfrutar de vistas panorámicas de la región, rodeado de la fauna autóctona.",
            imagen: "https://tse1.mm.bing.net/th?q=Parque+Nacional+Sierra+de+las+Quijadas+San+Luis"
        },
        {
            nombre: "Salto del Chispiadero 💦",
            descripcion: "Una cascada oculta en medio de la sierra.",
            descripcionDetallada: "El Salto del Chispiadero es una cascada espectacular que se encuentra en un rincón de las Sierras de San Luis, rodeado de un paisaje agreste y natural. Es un lugar perfecto para los amantes de la aventura y el ecoturismo.",
            imagen: "https://tse1.mm.bing.net/th?q=Salto+del+Chispiadero+San+Luis"
        },
        {
            nombre: "Dique Nogolí 🚣",
            descripcion: "Un lugar ideal para deportes acuáticos y relax.",
            descripcionDetallada: "El Dique Nogolí es un embalse rodeado de un hermoso paisaje montañoso. Es perfecto para practicar deportes acuáticos como el kayak, además de ser un lugar tranquilo para relajarse y disfrutar de la naturaleza.",
            imagen: "https://tse1.mm.bing.net/th?q=Dique+Nogolí+San+Luis"
        }
    ]
},
{
    destino: "Jujuy 🏞️",
    excursiones: [
        {
            nombre: "Hornocal - Cerro de los 14 colores 🌈",
            descripcion: "Una de las vistas más impresionantes del norte argentino.",
            descripcionDetallada: "El Hornocal, o Cerro de los 14 colores, es una de las maravillas naturales más impresionantes de Jujuy. Su mezcla de tonos rojos, naranjas y amarillos crea una vista deslumbrante que se ha convertido en uno de los destinos más fotografiados de Argentina.",
            imagen: "https://tse1.mm.bing.net/th?q=Hornocal+Cerro+de+los+14+colores+Jujuy"
        },
        {
            nombre: "Purmamarca y el Cerro de los Siete Colores ⛰️",
            descripcion: "Un pueblo pintoresco con un cerro multicolor.",
            descripcionDetallada: "Purmamarca es un pintoresco pueblo en Jujuy, famoso por su Cerro de los Siete Colores. Este cerro se distingue por las capas de colores que lo cubren, que van desde el rojo hasta el verde, creando un paisaje único.",
            imagen: "https://tse1.mm.bing.net/th?q=Purmamarca+Jujuy+Cerro+de+los+Siete+Colores"
        },
        {
            nombre: "Termas de Reyes ♨️",
            descripcion: "Aguas termales en medio de un valle rodeado de montañas.",
            descripcionDetallada: "Las Termas de Reyes se encuentran en un hermoso valle rodeado de montañas, ofreciendo aguas termales curativas. Es el lugar perfecto para relajarse y disfrutar de un entorno natural en plena cordillera de los Andes.",
            imagen: "https://tse1.mm.bing.net/th?q=Termas+de+Reyes+Jujuy"
        }
    ]
  }

];

const ExcursionesPage = () => {
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);
  const [excursionSeleccionada, setExcursionSeleccionada] = useState(null);

  return (
    <Container>
      <Title>Excursiones & Inspiración 🌍</Title>
      <Subtitle>Explora nuestras excursiones y encuentra la mejor experiencia para tu viaje.</Subtitle>
      <DestinosContainer>
        {destinosConExcursiones.map((destino, index) => (
          <DestinoCard key={index} onClick={() => {
            setDestinoSeleccionado(destino);
            setExcursionSeleccionada(null); // Agregado: reinicia la excursión al cambiar de destino
          }}>
            {destino.destino}
          </DestinoCard>
          
        ))}
      </DestinosContainer>

      {destinoSeleccionado && (
        <ExcursionesList>
          <h2>Excursiones en {destinoSeleccionado.destino}</h2>
          {destinoSeleccionado.excursiones.map((excursion, index) => (
            <ExcursionCard key={index} onClick={() => setExcursionSeleccionada(excursion)}>
              <h3>{excursion.nombre}</h3>
              <p>{excursion.descripcion}</p>
            </ExcursionCard>
          ))}
        </ExcursionesList>
      )}

{excursionSeleccionada && (
  <ExcursionDetalle>
    <h2>{excursionSeleccionada.nombre}</h2>
    <p>{excursionSeleccionada.descripcionDetallada}</p>
    {excursionSeleccionada.imagen && (
      <img src={excursionSeleccionada.imagen} alt={excursionSeleccionada.nombre} style={{ width: "100%", borderRadius: "10px" }} />
    )}
  </ExcursionDetalle>
)}
    </Container>
  );
};

export default ExcursionesPage;

const Container = styled.div`
  position: relative;
  background-image: url(${fondoExcursiones});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Ajusta la opacidad del fondo */
    z-index: 0;
    pointer-events: none; /* Permite clics en los elementos encima */
  }
`;

const Content = styled.div`
  position: relative; /* Para que esté sobre el overlay */
  z-index: 1;
  max-width: 800px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2); /* Leve fondo para resaltar el texto */
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* Hace que el texto resalte */
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 20px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5); /* Mejora la visibilidad */
`;

const DestinosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  position: relative; /* Para mantenerlo por encima del overlay */
  z-index: 1;
`;

const DestinoCard = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    background: #0056b3;
  }
`;

const ExcursionesList = styled.div`
  margin-top: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Para mantenerlo por encima del overlay */
  z-index: 1;
`;

const ExcursionCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ExcursionDetalle = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #e3f2fd;
  border-radius: 10px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;



