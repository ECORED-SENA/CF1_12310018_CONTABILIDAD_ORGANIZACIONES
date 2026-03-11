export default {
  global: {
    Name: 'Empresa y clasificación empresarial en Colombia.',
    Description:
      'Este componente formativo explica el concepto de empresa en Colombia y desarrolla los criterios más usados para su clasificación (actividad económica, tamaño empresarial y origen del capital/finalidad). El propósito pedagógico es que el aprendiz pueda reconocer y justificar la clasificación de una empresa real o hipotética con base en la normativa vigente y en estándares oficiales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tema 1',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Subtema 1',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tema 4',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actividad económica',
      significado:
        'Conjunto de acciones organizadas que realiza una empresa para producir bienes o prestar servicios dentro del mercado.',
    },
    {
      termino: 'Ánimo de lucro',
      significado:
        'Finalidad empresarial orientada a obtener utilidades económicas para ser distribuidas entre propietarios o socios.',
    },
    {
      termino: 'Capital',
      significado:
        'Recursos financieros o patrimoniales aportados para el funcionamiento y desarrollo de una empresa.',
    },
    {
      termino: 'CIIU',
      significado:
        'Clasificación Industrial Internacional Uniforme, sistema oficial que organiza las actividades económicas según estándares del DANE.',
    },
    {
      termino: 'Clasificación empresarial',
      significado:
        'Proceso de categorización de las empresas según criterios como actividad económica, tamaño, origen del capital y finalidad.',
    },
    {
      termino: 'Código de Comercio',
      significado:
        'Conjunto de normas que regulan las actividades mercantiles, la empresa y los comerciantes en Colombia.',
    },
    {
      termino: 'Comerciante',
      significado:
        'Persona natural o jurídica que ejerce de manera profesional actividades mercantiles.',
    },
    {
      termino: 'Empresa',
      significado:
        'Actividad económica organizada que integra recursos, personas y procesos para producir bienes o prestar servicios.',
    },
    {
      termino: 'Empresa grande',
      significado:
        'Empresa cuyos ingresos anuales superan el rango máximo establecido para la mediana empresa según el macrosector.',
    },
    {
      termino: 'Empresa mediana',
      significado:
        'Empresa cuyos ingresos anuales se ubican dentro de los rangos definidos para la mediana empresa según el Decreto 957 de 2019.',
    },
    {
      termino: 'Empresa pequeña',
      significado:
        'Empresa con operaciones y estructura organizacional limitada, clasificada según ingresos anuales y macrosector.',
    },
    {
      termino: 'Empresa unipersonal',
      significado:
        'Forma jurídica en la que una sola persona constituye una empresa con patrimonio separado del personal.',
    },
    {
      termino: 'Entidad sin ánimo de lucro (ESAL)',
      significado:
        'Persona jurídica que no distribuye utilidades y reinvierte sus excedentes en su objeto social.',
    },
    {
      termino: 'Establecimiento de comercio',
      significado:
        'Conjunto de bienes organizados para desarrollar la actividad empresarial, como local, inventarios y mobiliario.',
    },
    {
      termino: 'Función social de la empresa',
      significado:
        'Principio constitucional que reconoce la responsabilidad de la empresa frente al bienestar general y el interés público.',
    },
    {
      termino: 'Macrosector económico',
      significado:
        'Empresa con ingresos anuales más bajos dentro de su macrosector, según rangos definidos en UVT.',
    },
    {
      termino: 'MiPymes',
      significado:
        'Conjunto de micro, pequeñas y medianas empresas, objeto de políticas públicas de promoción y apoyo.',
    },
    {
      termino: 'Origen del capital',
      significado:
        'Procedencia de los recursos financieros de la empresa, que puede ser privada, pública o mixta.',
    },
    {
      termino: 'Persona natural comerciante',
      significado:
        'Individuo que desarrolla actividades mercantiles respondiendo con su patrimonio personal.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Entidad creada legalmente con derechos y obligaciones propias, distinta de las personas que la conforman.',
    },
    {
      termino: 'Sociedad comercial',
      significado:
        'Persona jurídica constituida por dos o más socios para desarrollar actividades mercantiles.',
    },
    {
      termino: 'Sociedad BIC',
      significado:
        'Condición voluntaria que puede adoptar una sociedad comercial para integrar propósitos sociales y ambientales verificables.',
    },
    {
      termino: 'Sociedad por acciones simplificada (S.A.S.)',
      significado:
        'Tipo societario flexible que permite uno o varios accionistas y estatutos adaptables.',
    },
    {
      termino: 'Tamaño empresarial',
      significado:
        'Clasificación de la empresa según sus ingresos anuales y el macrosector económico al que pertenece.',
    },
    {
      termino: 'UVT',
      significado:
        'Unidad de Valor Tributario usada como referencia para expresar rangos de ingresos y obligaciones tributarias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Colombia, A. N. (1991). Constitución Política de Colombia, artículos 333 y 334. Gaceta Constitucional 116 del 20 de julio de 1991.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html',
    },
    {
      referencia:
        'Colombia, P. d. (1971). Decreto 410 - Código de Comercio. Obtenido de',
      link:
        'https://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia: 'Colombia, P. d. (1995). Ley 222.',
      link: '',
    },
    {
      referencia: 'Colombia, P. d. (1998). Ley 489.',
      link: '',
    },
    {
      referencia: 'Colombia, P. d. (2000). Ley 590.',
      link: '',
    },
    {
      referencia: 'Colombia, P. d. (2008). Ley 1258.',
      link: '',
    },
    {
      referencia: 'DANE. (2022). CIIU REV.4 A.C. Obtenido de',
      link:
        'https://www.dane.gov.co/files/sen/nomenclatura/ciiu/CIIU_Rev_4_AC2022.pdf?utm_source',
    },
    {
      referencia:
        'DANE. (2025). Boletín técnico - Gran Encuesta Integrada de Hogares (GEIH).',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (2020). Resolución 0549. Obtenido de',
      link:
        'https://www.dane.gov.co/files/acerca/Normatividad/resoluciones/2020/Resolucion-0549-de-2020.pdf',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (2021). Resolución 1505. Obtenido de',
      link:
        'https://www.dane.gov.co/files/acerca/Normatividad/resoluciones/2021/Resolucion-1505-de-2021.pdf',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (2022). Resolución 2306. Obtenido de',
      link:
        'https://www.dane.gov.co/files/acerca/Normatividad/resoluciones/2022/Resolucion-2306-de-2022.pdf',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (2022). Resolución 2306 de 2022 (modificación CIIU Rev. 4 A.C. 2021). Obtenido de',
      link:
        'https://www.dane.gov.co/files/acerca/Normatividad/resoluciones/2022/Resolucion-2306-de-2022.pdf',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (2012). Resolución 066. Obtenido de',
      link:
        'https://www.dane.gov.co/files/acerca/Normatividad/Resolucion066_2012.pdf',
    },
    {
      referencia:
        'Patiño, J. S. (2024). Una mirada a las MiPymes en Colombia. Bogotá.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2019). Decreto 957.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
