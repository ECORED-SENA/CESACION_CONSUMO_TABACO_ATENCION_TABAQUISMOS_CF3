export default {
  global: {
    componenteFormativo:
      'Valoración clínica para la cesación del consumo de tabaco',
    descripcionCurso:
      'El contenido de este componente muestra cómo se realiza la valoración clínica del paciente fumador o consumidor de productos de tabaco, a partir de la elaboración de la historia clínica, examen físico y aplicación de instrumentos que ayudarán a determinar el grado de consumo y cómo abordar su tratamiento.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Indagación sobre el consumo de productos del tabaco o derivados',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Historia de consumo de tabaco y grado de tabaquismo (índice tabáquico)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Valoración etapas de cambio (modelo de Prochaska)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Nivel de motivación para dejar de fumar',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Intentos previos de cesación y motivos de recaídas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Valoración de la dependencia del tabaquismo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Exámenes complementarios para la evaluación del paciente fumador',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo:
          'Registro de información sobre atención en tabaquismo en la historia clínica (códigos CIE-10 y códigos CUPS)',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). Directrices para desarrollar programas para la cesación del consumo de tabaco y atención del tabaquismo. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-cesacion-consumo-atencion-tabaco.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Guía No. 22 - Atención integral de los adultos con diagnóstico de episodio o trastorno depresivos recurrente. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IETS/GPC_Comple_Depre%20(1).pdf',
    },
    {
      referencia:
        'Nerína, I., Crucelaegui, A., Novella, P., Beamonte, A., Sobradiel, N., Bernal, V., y Gargallo, P. (2005). Evaluación de la dependencia psicológica mediante la prueba de Glover-Nilsson en el tratamiento del tabaquismo. Archivos de Bronconeumología, 41(9), 493-498. ',
      link:
        'https://www.archbronconeumol.org/es-evaluacion-dependencia-psicologica-mediante-el-articulo-13078651',
    },
    {
      referencia: 'NCI. (s.f.). Diccionario de cáncer del NCI. ',
      link:
        'https://www.cancer.gov/espanol/publicaciones/diccionarios/diccionario-cancer/def/paquete-ano',
    },
    {
      referencia:
        'OMS. (2015). Glosario de términos utilizados en el convenio y sus instrumentos. ',
      link:
        'https://www.who.int/fctc/reporting/sp_glossary_2015_edition.pdf?ua=1',
    },
    {
      referencia:
        'Prochaska, J. y DiClemente, C. (1983). <i>Stages and process of self-change of smoking: towards an integrative model of change. J Consult Clin Psychol, 51(3), 390-395.</i> ',
    },
  ],
  glosario: [
    {
      termino: 'Abandono del tabaco',
      significado:
        'proceso de detener el consumo de cualquier producto de tabaco, con o sin ayuda (OMS, 2015).',
    },
    {
      termino: 'Adicción al tabaco/dependencia del tabaco',
      significado:
        'conjunto de manifestaciones comportamentales, cognitivas y fisiológicas que se desarrollan tras un consumo repetido, y que suelen consistir en un intenso deseo de consumir tabaco, dificultad para controlar ese consumo, persistencia en este pese a sus consecuencias graves, asignación de mayor prioridad al consumo de tabaco que a otras actividades y obligaciones, aumento de la tolerancia y, en ocasiones, un estado físico de abstinencia (OMS, 2015).',
    },
    {
      termino: 'Consejo o intervención breve',
      significado:
        'asesoramiento para dejar de consumir tabaco, que suele durar solo unos minutos, impartido a todos los consumidores de tabaco, normalmente en el curso de una consulta o encuentro ordinarios (OMS, 2015).',
    },
    {
      termino: 'Consumidor de tabaco',
      significado:
        'persona que hace uso de cualquier producto de tabaco (OMS, 2015).',
    },
    {
      termino: 'Fumar',
      significado:
        'este término debe definirse de manera que incluya el hecho de estar en posesión o control de un producto de tabaco encendido, independientemente de que el humo se esté inhalando o exhalando de forma activa (OMS, 2015).',
    },
    {
      termino: 'Humo de tabaco ajeno',
      significado:
        'el humo que se desprende del extremo ardiente de un cigarrillo o de otros productos de tabaco, generalmente en combinación con el humo exhalado por el fumador (OMS, 2015).',
    },
    {
      termino: 'Índice paquetes-año',
      significado:
        'Forma de medir la cantidad que fumó una persona durante un período largo. Es el resultado de multiplicar el número de paquetes de cigarrillos que una persona fuma cada día por el número de años que ha estado fumando (NCI, s.f.).',
    },
    {
      termino: 'Tratamiento de la dependencia del tabaco',
      significado:
        'provisión a los consumidores de tabaco de apoyo comportamental, de medicamentos o de ambos, para ayudarlos a que abandonen el consumo de tabaco (OMS, 2015).',
    },
  ],
  complementario: [
    {
      texto:
        'Fiore, M. C., Bailey, W. C., & Cohen, S. J. (2015). <i>A Clinical Practice Guideline for Treating Tobacco Use and Dependence: 2008 Update: A U.S. Public Health Service Report.</i>',
      tipo: 'Libro',
      descarga: '/downloads/nihms59469.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social de Colombia. (2020). Directrices para desarrollar programas para la cesación del consumo de tabaco y atención del tabaquismo.',
      tipo: 'Documento',
      descarga: '/downloads/directrices-cesacion-consumo-atencion-tabaco.pdf',
    },
    {
      texto:
        'OMS. (2009). Manual Nacional de Abordaje del Tabaquismo Manual PNA en el Primer Nivel de Atención. OMS.',
      tipo: 'Manual',
      descarga: '/downloads/Annexsixurue.pdf',
    },
    {
      texto:
        'Molina, T., J. (2015). Las fases del cambio: el modelo transteórico de Prochaska y Diclemente. Tejedor de historias.',
      tipo: 'Artículo',
      link:
        'https://tejedordehistorias.wordpress.com/2015/12/10/las-fases-del-cambio-el-modelo-transteorico-de-prochaska-y-diclemente/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yolanda Sandoval',
        cargo: 'Profesional especializado',
        centro: 'Subdirección de enfermedades no transmisibles',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder desarrollo curricular Servicios Personales',
        centro: 'Centro de Servicios de Salud',
      },
      {
        nombre: 'Giovanna Andrea',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Antioquia - Centro de Servicios de Salud.',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de gestión industrial.',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
