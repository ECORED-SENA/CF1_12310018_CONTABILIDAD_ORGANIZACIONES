<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Clasificación de las empresas 

    p.mb-5 Clasificar una empresa consiste en ubicarla en categorías que permitan describir claramente su actividad, tamaño y condiciones de operación, facilitando su comprensión y comparación dentro del entorno económico.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Entender la clasificación empresarial es fundamental para una gestión exitosa. Se invita a explorar estos criterios clave para optimizar procesos y cumplir con la normativa.

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9(data-aos="fade-right")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema3/img2.jpg', alt="" ).m-auto
            h4.text-center Empresa pequeña
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Operaciones simples.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Decisiones centralizadas.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio-sm
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema3/img3.jpg', alt="" ).m-auto
            h4.text-center Empresa grande
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Procesos complejos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Mayor control interno.
      .col-xl-4.col-md-9(data-aos="fade-left").espacio-sm
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema3/img4.jpg', alt="" ).m-auto
            h4.text-center ¿Para qué sirve clasificar?
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Definir roles.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Organizar procesos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Planear crecimiento.

    .bg-1
      .px-5

        p.mb-5 Las empresas se clasifican mediante criterios complementarios que permiten describirlas integralmente y comprender su funcionamiento dentro del entorno económico.  En esta sección se conocerán las categorías para entender la normativa y realidad organizacional.

        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Actividad económica")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema3/img6.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Actividad económica
                p #[b ¿Qué hace la empresa?]
                p Identifica la actividad principal desarrollada por la organización según la clasificación CIIU del DANE.
                p #[b Ejemplos:]
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Comercio.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Manufactura.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Servicios.

          .py-3.py-md-4(titulo="Tamaño")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema3/img7.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Tamaño
                p #[b ¿Qué tan grande es?]
                p Se determina según los ingresos anuales y el macrosector económico.
                p #[b Clasificación:]
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Microempresa.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Pequeña empresa.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Mediana empresa.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Gran empresa.
          
          .py-3.py-md-4(titulo="Capital y finalidad")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema3/img8.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Capital y finalidad
                p #[b ¿Quién financia y para qué existe?]
                p Identifica la procedencia de los recursos y el propósito económico o social.
                p #[b Tipos:]
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Privada.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Pública.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Mixta.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Con ánimo de lucro.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Sin ánimo de lucro.

        p.mb-5 La clasificación empresarial facilita el cumplimiento normativo y la gestión estratégica. Se invita a explorar estos criterios para comprender su utilidad en el sistema económico.

    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img9.jpg' ).m-auto
        h4.mb-3.estilo-text Análisis empresarial
        p.mb-5 Facilita entender cómo funciona una empresa frente a otras.
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img10.jpg' ).m-auto
        h4.mb-3.estilo-text Planeación empresarial
        p.mb-5 Permite planear el desarrollo empresarial.
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img11.jpg' ).m-auto
        h4.mb-3.estilo-text Toma de decisiones internas
        p.mb-5 Ayuda a mejorar la administración.
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img12.jpg' ).m-auto
        h4.mb-3.estilo-text Apoyo institucional y financiero
        p.mb-5 Facilita acceso a beneficios empresariales.
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema3/img13.jpg').m-auto
        h4.mb-3.estilo-text Análisis estadístico y sectorial
        p.mb-5 Apoya el análisis económico del país.
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Clasificación por actividad económica (CIIU)

    p.mb-5 La CIIU es un sistema estándar que organiza las actividades económicas para identificar el objeto principal de las empresas. En Colombia es oficializada por el DANE y facilita el análisis sectorial, los reportes y la caracterización empresarial.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img14.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender la estructura de la CIIU facilita la ubicación técnica de cualquier actividad económica. Seguidamente, se presentarán los niveles jerárquicos que componen este sistema.
    
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sección (letra)
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué representa?] Grandes agrupaciones de actividades.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Ubicar el sector general (ej. comercio, manufactura, servicios).
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img16.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4.mb-md-0
                h4 División (2 dígitos)
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué representa?] Subconjunto dentro de la sección.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Acotar el tipo de actividad principal.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img17.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4.mb-md-0
                h4 Grupo (3 dígitos)
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué representa?] Mayor especificidad dentro de la división.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Comparar actividades similares.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img18.png', alt='' style="max-width: 500px").m-auto
            
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4.mb-md-0
                h4 Clase (4 dígitos)
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué representa?] Actividad más específica para registro.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Seleccionar la clase que mejor describe la actividad principal.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img19.png', alt='' style="max-width: 500px").m-auto

    .bg-2
      .px-5

        p.mb-5 Por su importancia, a continuación, se presenta la estructura general de la Clasificación Industrial Internacional Uniforme (CIIU), la cual organiza las actividades económicas en secciones y divisiones para facilitar la identificación y clasificación empresarial.

        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Estructura general del CIIU
        .tabla-a(data-aos="zoom-in")
          table
            caption Nota: Fuente (DANE, 2022)
            thead
              tr
                th.ajuste-border-tabla.texto-left Sección
                th.ajuste-border-tabla.texto-left Descripción
                th.texto-left Divisiones
            tbody
              tr
                td.ajuste-border-tabla.texto-left A
                td.ajuste-border-tabla.texto-left Agricultura, ganadería, caza, silvicultura y pesca
                td.texto-left 01 - 03
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left B
                td.ajuste-border-tabla.texto-left Explotación de minas y canteras
                td.texto-left 05 - 09
              tr
                td.ajuste-border-tabla.texto-left C
                td.ajuste-border-tabla.texto-left Industrias manufactureras
                td.texto-left 10 - 33
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left D
                td.ajuste-border-tabla.texto-left Suministro de electricidad, gas, vapor y aire acondicionado
                td.texto-left 35
              tr
                td.ajuste-border-tabla.texto-left E
                td.ajuste-border-tabla.texto-left Distribución de agua; evacuación y tratamiento de aguas residuales, gestión de desechos y actividades de saneamiento ambiental
                td.texto-left 36 - 39
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left F
                td.ajuste-border-tabla.texto-left Construcción
                td.texto-left 41 - 43
              tr
                td.ajuste-border-tabla.texto-left G
                td.ajuste-border-tabla.texto-left Comercio al por mayor y al por menor; reparación de vehículos automotores y motocicletas
                td.texto-left 45 - 47
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left H
                td.ajuste-border-tabla.texto-left Transporte y almacenamiento
                td.texto-left 49 - 53
              tr
                td.ajuste-border-tabla.texto-left I
                td.ajuste-border-tabla.texto-left Alojamiento y servicios de comida
                td.texto-left 55 - 56
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left J
                td.ajuste-border-tabla.texto-left Información y comunicaciones
                td.texto-left 58 - 63
              tr
                td.ajuste-border-tabla.texto-left K
                td.ajuste-border-tabla.texto-left Actividades financieras y de seguros
                td.texto-left 64 - 66
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left L
                td.ajuste-border-tabla.texto-left Actividades inmobiliarias
                td.texto-left 68
              tr
                td.ajuste-border-tabla.texto-left M
                td.ajuste-border-tabla.texto-left Actividades profesionales, científicas y técnicas
                td.texto-left 69 - 75
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left N
                td.ajuste-border-tabla.texto-left Actividades de servicios administrativos y de apoyo
                td.texto-left 77 - 82
              tr
                td.ajuste-border-tabla.texto-left O
                td.ajuste-border-tabla.texto-left Administración pública y defensa; planes de seguridad social de afiliación obligatoria
                td.texto-left 84
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left P
                td.ajuste-border-tabla.texto-left Educación
                td.texto-left 85
              tr
                td.ajuste-border-tabla.texto-left Q
                td.ajuste-border-tabla.texto-left Actividades de atención de la salud humana y de asistencia social
                td.texto-left 86 - 88
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left R
                td.ajuste-border-tabla.texto-left Actividades artísticas, de entretenimiento y recreación
                td.texto-left 90 - 93
              tr
                td.ajuste-border-tabla.texto-left S
                td.ajuste-border-tabla.texto-left Otras actividades de servicios
                td.texto-left 94 - 96
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left T
                td.ajuste-border-tabla.texto-left Actividades de los hogares como empleadores; actividades no diferenciadas de los hogares individuales como productores de bienes y servicios para uso propio
                td.texto-left 97 - 98
              tr
                td.ajuste-border-tabla.texto-left U
                td.ajuste-border-tabla.texto-left Actividades de organizaciones y entidades extraterritoriales
                td.texto-left 99O
              
        Separador
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Clasificación por tamaño empresarial 
        
        p.mb-5 La clasificación por tamaño empresarial en Colombia permite orientar apoyos, análisis y segmentación empresarial. Se basa en el marco MiPymes y el Decreto 957 de 2019, que define categorías según ingresos anuales y macrosector económico y para ello, se abordará el procedimiento para clasificar por tamaños las empresas.

        .row.justify-content-center.mb-5
          .col-lg-10
            PasosA.color-acento-contenido(tipo="n")
              .row
                .col-lg
                  h3 Paso 1
                  ul.fa-ul.estilo___ul-1.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Qué se hace?] Identificar el macrosector (manufactura, servicios o comercio).
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Por qué es importante?] El Decreto 957 de 2019 establece rangos distintos por macrosector.
                .col-auto(data-aos="zoom-in").espacio-sm
                  figure
                    img(src='@/assets/curso/tema3/img21.png', alt='' style="width: 300px").m-auto
              .row
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/tema3/img22.png', alt='' style="width: 300px").m-auto
                .col-lg.ajuste-left.espacio-sm
                  h3 Paso 2
                  ul.fa-ul.estilo___ul-1.mb-0.ajuste-left
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Qué se hace?] Estimar los ingresos por actividades ordinarias anuales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Por qué es importante?] La clasificación se basa en ingresos anuales, no en número de empleados.
              .row
                .col-lg
                  h3 Paso 3
                  ul.fa-ul.estilo___ul-1.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Qué se hace?] Comparar los ingresos con los rangos vigentes en UVT para ese macrosector.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Por qué es importante?] Permite ubicar la empresa como micro, pequeña, mediana o grande.
                .col-auto(data-aos="zoom-in").espacio-sm
                  figure
                    img(src='@/assets/curso/tema3/img23.png', alt='' style="width: 300px").m-auto
              .row
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/tema3/img24.png', alt='' style="width: 300px").m-auto
                .col-lg.ajuste-left.espacio-sm
                  h3 Paso 4
                  ul.fa-ul.estilo___ul-1.mb-0.ajuste-left
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Qué se hace?] Justificar la clasificación y registrar la fuente consultada del rango vigente.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Por qué es importante?] Fortalece hábitos de trazabilidad y consulta normativa.

    .caja-tema3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto.col-md-2(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/img25.svg', alt='' style="width: 77px").m-auto
        .col-xl.col-md-10.espacio-sm
          p.mb-0 Antes de analizar los rangos oficiales, se explorará cómo las empresas evolucionan según su formalización, procesos y organización, comprendiendo los desafíos de gestión que surgen al pasar de microempresa a gran empresa.

    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema3-1(data-aos="zoom-in")
          .col-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema3/img26.svg" style="max-width: 220px").m-auto
          .col.espacio-sm
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="De microempresa a gran empresa: cómo evolucionan las organizaciones según su tamaño"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/img27.png" ).m-auto
    
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Clasificación por tamaño empresarial según ingresos anuales (UVT) y macrosector  

    p.mb-5 La clasificación por tamaño empresarial en Colombia se determina con base en los ingresos por actividades ordinarias anuales y el macrosector económico (manufactura, servicios o comercio). Estos rangos están definidos en UVT, por lo que el valor en pesos cambia cada año, pero los límites en UVT se mantienen como referencia normativa; cuando los ingresos superan el límite máximo de “mediana”, la empresa se clasifica como grande.

    .bg-1
      .px-5

        .row.justify-content-center
          .col-xl-9
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Rangos de clasificación por tamaño empresarial (UVT) según macrosector
            .tabla-a(data-aos="zoom-in")
              table
                caption Nota: fuente normativa (Decreto 957, 2019), que reglamenta la clasificación del tamaño empresarial con criterio de ingresos por actividades ordinarias anuales expresados en UVT.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Macrosector
                    th.ajuste-border-tabla.texto-left Microempresa
                    th.ajuste-border-tabla.texto-left Pequeña empresa
                    th.ajuste-border-tabla.texto-left Mediana empresa
                    th.texto-left Grande empresa
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Manufacturero]
                    td.ajuste-border-tabla.texto-left ≤ 23.563 UVT
                    td.ajuste-border-tabla.texto-left > 23.563 y ≤ 204.995 UVT
                    td.ajuste-border-tabla.texto-left > 204.995 y ≤ 1.736.565 UVT
                    td.texto-left > 1.736.565 UVT
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Servicios]
                    td.ajuste-border-tabla.texto-left ≤ 32.988 UVT
                    td.ajuste-border-tabla.texto-left > 32.988 y ≤ 131.951 UVT
                    td.ajuste-border-tabla.texto-left > 131.951 y ≤ 483.034 UVT
                    td.texto-left > 483.034 UVT
                  tr
                    td.ajuste-border-tabla.texto-left #[b Comercio]
                    td.ajuste-border-tabla.texto-left ≤ 44.769 UVT
                    td.ajuste-border-tabla.texto-left > 44.769 y ≤ 431.196 UVT
                    td.ajuste-border-tabla.texto-left > 431.196 y ≤ 
                    td.texto-left > 2.160.692 UVT

        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Clasificación por origen del capital y finalidad 
        
        p.mb-5 Las empresas también se clasifican según el origen del capital privadas, públicas o mixtas y su finalidad, con o sin ánimo de lucro, lo que permite comprender sus objetivos, control y formas de gestión. A continuación, se presentarán algunos ejemplos.

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img2.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Actividad (CIIU): Venta minorista de alimentos.	").ajuste-cajaAcordion
              .col-xl-7.mb-4
                ul.fa-ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Macrosector]: comercio.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Tamaño (según ingresos)]: micro o pequeña (según ingresos).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Capital/finalidad]: privada; con ánimo de lucro.
              .col-xl-5
                figure
                  img(src='@/assets/curso/tema3/img29.png', alt='').m-auto 

            .row(titulo="Actividad (CIIU): Servicios de alojamiento.").ajuste-cajaAcordion
              .col-xl-7.mb-4
                ul.fa-ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Macrosector]: servicios.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Tamaño (según ingresos)]: pequeña o mediana (según ingresos).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Capital/finalidad]: privada; con ánimo de lucro.
              .col-xl-5
                figure
                  img(src='@/assets/curso/tema3/img30.png', alt='').m-auto 

            .row(titulo="Actividad (CIIU): Prestación de servicios educativos.").ajuste-cajaAcordion
              .col-xl-7.mb-4
                ul.fa-ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Macrosector]: servicios.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Tamaño (según ingresos)]: variable (según ingresos).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Capital/finalidad]: pública o privada; con/sin ánimo de lucro.
              .col-xl-5
                figure
                  img(src='@/assets/curso/tema3/img31.png', alt='').m-auto 
    
    p.mb-5 En el siguiente video se presenta, paso a paso, un ejemplo práctico de clasificación empresarial, aplicando criterios como actividad económica, tamaño empresarial, origen del capital y forma de organización jurídica para comprender su aplicación real.

    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]: 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
