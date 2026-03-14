<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Empresa y clasificación empresarial en Colombia.',
      titulo: 'Empresa y clasificación empresarial en Colombia.',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos fundamentales del entorno empresarial colombiano y los criterios normativos de clasificación (actividad, tamaño y origen de capital) para fundamentar el análisis de organizaciones en contextos reales o hipotéticos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'Según el Código de Comercio, la empresa se define como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un establecimiento físico registrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una actividad económica organizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una marca comercial registrada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un contrato entre socios legales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 2,
          texto:
            '¿Qué artículos de la Constitución Política reconocen la función social de la empresa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Artículos 333 y 334.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Artículos 10 y 25.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Artículos 515 y 25.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Artículos 1 y 2.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 3,
          texto: 'El comerciante es definido como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El propietario real del local comercial o establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Quien ejerce profesionalmente actividades mercantiles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Toda persona que vende productos ocasionalmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El administrador del establecimiento de comercio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 4,
          texto: 'El establecimiento de comercio corresponde a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La actividad productiva económicamente realizada con lucro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El nombre comercial o industrial que se designa por decisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El conjunto de bienes organizados para desarrollar la empresa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El registro mercantil con la información requerida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál NO es un criterio principal de clasificación empresarial en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividad económica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tamaño empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Color corporativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Origen del capital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 6,
          texto: 'La CIIU permite principalmente:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar impuestos y contribuciones empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar las actividades económicas de forma estandarizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Clasificar empleados, de una manera organizada y estructurada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar marcas comerciales, patentes y demás información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el nivel más específico dentro de la estructura CIIU?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'División.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Grupo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clase.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 8,
          texto:
            'La clasificación por tamaño empresarial en Colombia se basa principalmente en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de empleados de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Antigüedad de la empresa en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ingresos anuales por actividades ordinarias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cantidad de socios registrados con patrimonio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 9,
          texto:
            'El Decreto que reglamenta la clasificación empresarial por ingresos es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 410 de 1971.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 957 de 2019.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Decreto 2150 de 1995.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 1481 de 1989.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 10,
          texto:
            'Una empresa cuyo capital proviene de particulares se clasifica como:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pública.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mixta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Privada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solidaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 11,
          texto:
            'Las organizaciones sin ánimo de lucro se caracterizan porque:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reinvierten sus excedentes en su objeto social.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Distribuyen utilidades entre socios o propietarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No generan ingresos por motivos de recesión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son siempre públicas y se reportan al estado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál forma jurídica es considerada la más flexible en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sociedad colectiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sociedad anónima.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sociedad por acciones simplificada (S.A.S.).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sociedad limitada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 13,
          texto: 'Una cooperativa pertenece al tipo de organización:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mercantil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pública.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Economía solidaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sociedad anónima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 14,
          texto: 'Las sociedades BIC son:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un tipo societario legal y obligatorio que debe reportar información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una condición voluntaria de propósito social y ambiental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Empresas sin ánimo de lucro, dedicadas a actividades financieras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Empresas públicas, que prestan servicios públicos e intangibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 15,
          texto: 'La clasificación integral de una empresa combina:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividad económica, tamaño y capital/finalidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ubicación y número de empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Marca y publicidad debidamente justificada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción y ventas únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 16,
          texto:
            'La empresa y el establecimiento de comercio significan lo mismo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 17,
          texto:
            'La clasificación empresarial facilita análisis y toma de decisiones económicas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 18,
          texto:
            'El tamaño empresarial oficial en Colombia se determina principalmente por ingresos anuales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 19,
          texto:
            'Las entidades sin ánimo de lucro distribuyen utilidades entre sus miembros.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 20,
          texto:
            'Una sociedad BIC mantiene el ánimo de lucro, pero incorpora impacto social y ambiental.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
