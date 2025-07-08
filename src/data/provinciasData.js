const provinciasData = {
  misiones: {
    nombre: "Misiones",
    descripcion: "Misiones es conocida por sus paisajes selváticos y las impresionantes Cataratas del Iguazú.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Cataratas_del_Iguaz%C3%BA%2C_Argentina%2C_2012-12-11%2C_DD_46.JPG",
    atractivos: [
      {
        nombre: "Cataratas del Iguazú",
        descripcion: "Una de las maravillas naturales del mundo.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Cataratas_del_Iguaz%C3%BA_-_vista_panor%C3%A2mica.jpg"
      },
      {
        nombre: "Parque Temático de la Cruz",
        descripcion: "Un lugar ideal para disfrutar de la naturaleza.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Parque_Tem%C3%A1tico_de_la_Cruz_Misiones.jpg"
      }
    ]
  },
  salta: {
    nombre: "Salta",
    descripcion: "Conocida como 'La Linda', Salta ofrece una combinación única de historia y paisajes.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/5/54/Cerros_de_Salta.jpg",
    atractivos: [
      {
        nombre: "Cafayate",
        descripcion: "Una región vinícola con paisajes únicos y bodegas artesanales.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Cafayate_valley.JPG"
      },
      {
        nombre: "Tren a las Nubes",
        descripcion: "Uno de los ferrocarriles más altos del mundo.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/4/41/La_Polvorilla_Viaduct_Salta_Argentina.jpg"
      }
    ]
  },
  bariloche: {
    nombre: "Bariloche",
    descripcion: "Famoso por sus montañas, lagos y el turismo de aventura.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bariloche_centro_civico.jpg",
    atractivos: [
      {
        nombre: "Cerro Catedral",
        descripcion: "El centro de esquí más grande de Sudamérica.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Cerro_Catedral_-_San_Carlos_de_Bariloche.jpg"
      },
      {
        nombre: "Circuito Chico",
        descripcion: "Un recorrido con vistas espectaculares.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Lago_Nahuel_Huapi_-_Circuito_Chico.jpg"
      }
    ]
  },
  buenos_aires: {
    nombre: "Buenos Aires",
    descripcion: "La ciudad más grande y vibrante de Argentina, conocida por su cultura, gastronomía y vida nocturna.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Obelisco_Buenos_Aires_2022.jpg",
    atractivos: [
      {
        nombre: "La Casa Rosada",
        descripcion: "La sede del gobierno argentino y un ícono histórico.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/02/Casa_Rosada_-_Buenos_Aires_-_Argentina.jpg"
      },
      {
        nombre: "Teatro Colón",
        descripcion: "Uno de los teatros más importantes del mundo.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Teatro_Colon_-_Buenos_Aires.jpg"
      }
    ]
  },
  cordoba: {
    nombre: "Córdoba",
    descripcion: "Una provincia famosa por sus sierras, historia colonial y vida universitaria.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Cordoba_Argentina.jpg",
    atractivos: [
      {
        nombre: "La Cumbrecita",
        descripcion: "Una aldea peatonal de montaña con arquitectura alpina.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2f/La_Cumbrecita_Cordoba_Argentina.jpg"
      },
      {
        nombre: "Iglesia de los Capuchinos",
        descripcion: "Una iglesia de arquitectura neogótica.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Iglesia_de_los_Capuchinos_Cordoba_Argentina.jpg"
      }
    ]
  },
  tucuman: {
    nombre: "Tucumán",
    descripcion: "La provincia más pequeña de Argentina, conocida por su historia, paisajes montañosos y el Jardín de la República.",
    imagen: "url_tucuman.jpg",
    atractivos: [
      { nombre: "Casa Histórica de la Independencia", descripcion: "El lugar donde se declaró la independencia de Argentina.", imagen: "url_casa_independencia.jpg" },
      { nombre: "Valles Calchaquíes", descripcion: "Un recorrido por paisajes montañosos y antiguos pueblos.", imagen: "url_valles_calchaquies.jpg" }
    ]
  },
  san_juan: {
    nombre: "San Juan",
    descripcion: "Famosa por sus montañas, viñedos y sitios arqueológicos.",
    imagen: "url_san_juan.jpg",
    atractivos: [
      { nombre: "Valle de la Luna", descripcion: "Un paisaje lunar único, patrimonio de la humanidad.", imagen: "url_valle_luna.jpg" },
      { nombre: "Cerro Mercedario", descripcion: "Una de las montañas más altas de Argentina.", imagen: "url_cerro_mercedario.jpg" }
    ]
  },
  neuquen: {
    nombre: "Neuquén",
    descripcion: "Provincia de paisajes montañosos, bosques y lagos, famosa por su turismo de aventura.",
    imagen: "url_neuquen.jpg",
    atractivos: [
      { nombre: "Villa La Angostura", descripcion: "Un pintoresco destino de montaña junto al lago Nahuel Huapi.", imagen: "url_villa_angostura.jpg" },
      { nombre: "Parque Nacional Lanín", descripcion: "Un lugar para el ecoturismo y actividades al aire libre.", imagen: "url_parque_lanin.jpg" }
    ]
  },
  chaco: {
    nombre: "Chaco",
    descripcion: "Famosa por sus parques nacionales y la rica cultura guaraní.",
    imagen: "url_chaco.jpg",
    atractivos: [
      { nombre: "Parque Nacional El Impenetrable", descripcion: "Un santuario natural para flora y fauna autóctona.", imagen: "url_impentrable.jpg" },
      { nombre: "Resistencia", descripcion: "La capital de Chaco, conocida por su arte y esculturas al aire libre.", imagen: "url_resistencia.jpg" }
    ]
  },
  mendoza: {
    nombre: "Mendoza",
    descripcion: "Conocida mundialmente por sus viñedos y la producción de vino, además de sus paisajes montañosos.",
    imagen: "url_mendoza.jpg",
    atractivos: [
      { nombre: "Aconcagua", descripcion: "El pico más alto de América del Sur.", imagen: "url_aconcagua.jpg" },
      { nombre: "Ruta del Vino", descripcion: "Recorrido por bodegas de vino mundialmente famosas.", imagen: "url_ruta_vino.jpg" }
    ]
  },
  catamarca: {
    nombre: "Catamarca",
    descripcion: "Catamarca es conocida por sus montañas, valles y una rica historia cultural.",
    imagen: "url_catamarca.jpg",
    atractivos: [
      { nombre: "Fiesta del Poncho", descripcion: "Una de las celebraciones más importantes de la provincia, dedicada a la cultura y las tradiciones locales.", imagen: "url_fiesta_poncho.jpg" },
      { nombre: "Pucará de La Ciénaga", descripcion: "Un sitio arqueológico preincaico ubicado en las montañas de Catamarca.", imagen: "url_pucara_cienaga.jpg" },
      { nombre: "Laguna Blanca", descripcion: "Un hermoso paisaje natural, ideal para el turismo de aventura y el descanso.", imagen: "url_laguna_blanca.jpg" }
    ]
  },
  entre_rios: {
    nombre: "Entre Ríos",
    descripcion: "Conocida por sus termas, ríos y su arquitectura colonial.",
    imagen: "url_entre_rios.jpg",
    atractivos: [
      { nombre: "Termas de Federación", descripcion: "Un complejo termal de fama internacional.", imagen: "url_termas_federacion.jpg" },
      { nombre: "Parque Nacional El Palmar", descripcion: "Una reserva natural con palmeras y fauna autóctona.", imagen: "url_parque_palmar.jpg" }
    ]
  },
  san_luis: {
    nombre: "San Luis",
    descripcion: "Una provincia con hermosos paisajes serranos y grandes parques nacionales.",
    imagen: "url_san_luis.jpg",
    atractivos: [
      { nombre: "Parque Nacional Sierra de las Quijadas", descripcion: "Un parque con formaciones rocosas únicas.", imagen: "url_sierra_quijadas.jpg" },
      { nombre: "La Florida", descripcion: "Un parque de aventuras en las sierras.", imagen: "url_la_florida.jpg" }
    ]
  },
  jujuy: {
    nombre: "Jujuy",
    descripcion: "Conocida por su cultura andina y paisajes únicos como la Quebrada de Humahuaca.",
    imagen: "url_jujuy.jpg",
    atractivos: [
      { nombre: "Purmamarca", descripcion: "Un pueblo famoso por su cerro de los siete colores.", imagen: "url_purmamarca.jpg" },
      { nombre: "Quebrada de Humahuaca", descripcion: "Un paisaje de montañas de colores vibrantes.", imagen: "url_quebrada_humahuaca.jpg" }
    ]
  },
  la_rioja: {
    nombre: "La Rioja",
    descripcion: "Famosa por sus paisajes montañosos, viñedos y el Parque Nacional Talampaya.",
    imagen: "url_la_rioja.jpg",
    atractivos: [
      { nombre: "Parque Nacional Talampaya", descripcion: "Un impresionante parque de formaciones rocosas y pinturas rupestres, Patrimonio de la Humanidad.", imagen: "url_talampaya.jpg" },
      { nombre: "Cuesta de Miranda", descripcion: "Un espectacular mirador natural donde se puede apreciar la geografía de la región.", imagen: "url_cuesta_miranda.jpg" }
    ]
  },
  santiago_del_estero: {
    nombre: "Santiago del Estero",
    descripcion: "Conocida como la 'Madre de Ciudades', tiene una rica historia cultural y muchos atractivos naturales.",
    imagen: "url_santiago_del_estero.jpg",
    atractivos: [
      { nombre: "Termas de Río Hondo", descripcion: "Famosas por sus aguas termales, ideales para relajarse y disfrutar de la naturaleza.", imagen: "url_termas_rio_hondo.jpg" },
      { nombre: "Dique Frontal", descripcion: "Un embalse de agua que ofrece actividades recreativas y deportes acuáticos.", imagen: "url_dique_frontal.jpg" }
    ]
  },
  santa_cruz: {
    nombre: "Santa Cruz",
    descripcion: "Una provincia de glaciares, lagos y naturaleza virgen.",
    imagen: "url_santa_cruz.jpg",
    atractivos: [
      { nombre: "Perito Moreno", descripcion: "Uno de los glaciares más impresionantes del mundo.", imagen: "url_perito_moreno.jpg" },
      { nombre: "El Calafate", descripcion: "Una ciudad de turismo con vista al lago argentino y glaciares.", imagen: "url_calafate.jpg" }
    ]
  },
  formosa: {
    nombre: "Formosa",
    descripcion: "Conocida por sus humedales y parques naturales.",
    imagen: "url_formosa.jpg",
    atractivos: [
      { nombre: "Parque Nacional Pilcomayo", descripcion: "Un paraíso de fauna y flora autóctona.", imagen: "url_pilcomayo.jpg" }
    ]
  },
  rio_negro: {
    nombre: "Río Negro",
    descripcion: "Famosa por sus paisajes de montaña y la producción de frutas.",
    imagen: "url_rio_negro.jpg",
    atractivos: [
      { nombre: "San Carlos de Bariloche", descripcion: "Una ciudad famosa por sus lagos y montañas.", imagen: "url_san_carlos.jpg" }
    ]
  },
  chubut: {
    nombre: "Chubut",
    descripcion: "Conocida por sus playas, parques nacionales y fauna marina.",
    imagen: "url_chubut.jpg",
    atractivos: [
      { nombre: "Península Valdés", descripcion: "Un sitio natural declarado Patrimonio de la Humanidad, famoso por su fauna marina.", imagen: "url_valdes.jpg" }
    ]
  },
  tierra_del_fuego: {
    nombre: "Tierra del Fuego",
    descripcion: "La provincia más austral de Argentina, conocida por sus paisajes fríos, montañas, bosques y costas marítimas.",
    imagen: "url_tierra_del_fuego.jpg",
    atractivos: [
      { nombre: "Parque Nacional Tierra del Fuego", descripcion: "Un parque natural con senderos, bosques, montañas y costas, ideal para el ecoturismo.", imagen: "url_parque_tierra_del_fuego.jpg" },
      { nombre: "Ushuaia", descripcion: "La ciudad más austral del mundo, conocida por su belleza natural y actividades al aire libre.", imagen: "url_ushuaia.jpg" },
      { nombre: "Canal Beagle", descripcion: "Un canal marítimo que separa la Isla Grande de Tierra del Fuego de otras islas más pequeñas, con excursiones en barco.", imagen: "url_canal_beagle.jpg" }
    ]
  },
};


export default provinciasData;
