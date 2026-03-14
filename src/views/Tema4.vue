<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Formas de organización jurídica de la empresa 

    .cala-tema1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 Además de clasificar una empresa por actividad económica o por tamaño, también es necesario comprender su organización jurídica. La forma jurídica define cómo se organiza legalmente la empresa y establece reglas sobre responsabilidad, administración y toma de decisiones. En términos generales, una empresa puede desarrollarse por una persona natural comerciante o a través de una sociedad comercial. La elección depende de los objetivos del proyecto, el número de participantes, la necesidad de separar patrimonios y el tipo de riesgo asumido. Articulo 10 (Decreto 410 - Código de Comercio.); (Colombia P. d., Ley 1258, 2008).
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema4/img1.png', alt='').m-auto

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Clasificación según la forma de asociarse 
    
    .bg-1
      .px-5
        
        p.mb-5 Se invita a explorar la siguiente infografía para identificar las formas de organización jurídica y los modelos de asociación permitidos por la normativa legal vigente. 

        TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Unipersonal")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema4/img2.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Unipersonal
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Una persona decide.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Ejemplo: Persona natural, E.U., S.A.S.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Responsabilidad según patrimonio.

          .py-3.py-md-4(titulo="Pluripersonal (societaria)")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema4/img3.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Pluripersonal (societaria)
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Dos o más socios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Sociedades comerciales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Distribución de roles y riesgos.
          
          .py-3.py-md-4(titulo="Asociativa solidaria")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema4/img4.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Asociativa solidaria
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Basada en solidaridad. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Cooperativas y mutuales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Beneficio colectivo
    
        Separador
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Clasificación por la función social y finalidad 
        
        .caja-tema4.mb-5(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.col-md-10.order-2.order-lg-1.espacio-sm
              p.mb-0 La función social y la finalidad permiten diferenciar organizaciones que buscan generar utilidades para distribuirlas entre propietarios, organizaciones sin ánimo de lucro que reinvierten sus excedentes en su objeto social, y modelos híbridos o de propósito que incorporan compromisos verificables con impactos sociales y ambientales. Esta clasificación aporta claridad sobre expectativas de gobierno, destinación de excedentes y tipo de control institucional aplicable. En este punto, se explorará sobre la clasificación por la función social y finalidad.
            .col-xl-auto.col-md-2.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema4/img5.svg', alt='' style="width: 77px").m-auto
    
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Con ánimo de lucro (mercantil)
                p Su finalidad es desarrollar una empresa mercantil y obtener utilidades para los propietarios, según reglas societarias o del comerciante.
                p.mb-0 #[b Ejemplos]: persona natural comerciante; sociedades comerciales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img6.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4.mb-md-0
                h4 Sin ánimo de lucro (ESAL)
                p No distribuye utilidades entre miembros; los excedentes se destinan al objeto social. Se constituye como persona jurídica civil con reglas específicas de reconocimiento/registro.
                p.mb-0 #[b Ejemplos]: fundaciones; asociaciones; corporaciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img7.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4.mb-md-0
                h4 Economía solidaria
                p Organizaciones asociativas de propiedad colectiva o solidaria. Los excedentes se destinan a servicios, reservas y beneficios para asociados conforme a estatutos.
                p.mb-0 #[b Ejemplos]: cooperativas; fondos de empleados; mutuales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img8.png', alt='' style="max-width: 500px").m-auto
            
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4.mb-md-0
                h4 Sociedad BIC (condición de propósito)
                p Cualquier sociedad comercial puede adoptar voluntariamente la condición BIC e incorporar prácticas y compromisos de beneficio e interés colectivo.
                p.mb-0 #[b Ejemplos]: S.A., S.A.S., Ltda. u otra sociedad comercial con condición BIC.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img9.png', alt='' style="max-width: 500px").m-auto

    .bg-2
      .px-5
      
        Separador
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Formas jurídicas mercantiles más comunes 
        
        p.mb-5 La actividad empresarial puede ejercerse como persona natural comerciante o mediante una persona jurídica. Esta última permite separar el patrimonio personal del empresarial y establecer reglas formales de administración y responsabilidad. A continuación, se expondrán las formas jurídicas mercantiles más comunes y rasgos comparados.

        .row.justify-content-center
          .col-xl-10
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
              .row(titulo="Persona natural comerciante").ajuste-cajaAcordion
                .col-xl-7.mb-4
                  ul.fa-ul.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Cómo se asocia / capital? ] Unipersonal. No hay capital social; opera con patrimonio personal afecto al negocio.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Responsabilidad]: en general, ilimitada frente a obligaciones del negocio (responde con su patrimonio).
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Rasgos característicos]: modelo simple para iniciar; exige claridad contable y de obligaciones; el establecimiento de comercio puede registrarse.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Fuente]: código de Comercio (Decreto. 410/1971).
                .col-xl-5
                  figure
                    img(src='@/assets/curso/tema4/img10.png', alt='').m-auto 

              .row(titulo="Empresa unipersonal").ajuste-cajaAcordion
                .col-xl-7.mb-4
                  ul.fa-ul.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Cómo se asocia / capital? ] Unipersonal. Patrimonio de la empresa separado del titular, con reglas de constitución e inscripción.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Responsabilidad]: limitada al monto del aporte afecto a la empresa, salvo casos especiales previstos en la ley.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Rasgos característicos]: figura creada para facilitar emprendimiento con separación patrimonial; se organiza por acto unipersonal.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Fuente]: ley 222/1995.
                .col-xl-5
                  figure
                    img(src='@/assets/curso/tema4/img11.png', alt='').m-auto 

              .row(titulo="Sociedad colectiva").ajuste-cajaAcordion
                .col-xl-7.mb-4
                  ul.fa-ul.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Cómo se asocia / capital? ] Pluripersonal. Aportes en partes de interés.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Responsabilidad]: socios responden solidaria e ilimitadamente.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Rasgos característicos]: relevante cuando existe alta confianza entre socios gestores; la responsabilidad es el elemento determinante.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Fuente]: código de Comercio (Decreto. 410/1971).	
                .col-xl-5
                  figure
                    img(src='@/assets/curso/tema4/img12.png', alt='').m-auto 
              
              .row(titulo="Sociedad en comandita simple").ajuste-cajaAcordion
                .col-xl-7.mb-4
                  ul.fa-ul.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Cómo se asocia / capital? ] Pluripersonal. Dos clases de socios: gestores y comanditarios.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Responsabilidad]: gestores: ilimitada; comanditarios: limitada a aportes.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Rasgos característicos]: separa administración (gestores) de aporte de capital (comanditarios).
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Fuente]: código de Comercio (Decreto. 410/1971).
                .col-xl-5
                  figure
                    img(src='@/assets/curso/tema4/img13.png', alt='').m-auto 

              .row(titulo="Sociedad en comandita por acciones").ajuste-cajaAcordion
                .col-xl-7.mb-4
                  ul.fa-ul.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Cómo se asocia / capital? ] Pluripersonal. Capital representado en acciones; hay gestores y accionistas. 
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Responsabilidad]: gestores: ilimitada; accionistas: limitada a aportes.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Rasgos característicos]: combina acciones con figura de gestores; útil cuando se requiere capital sin ceder dirección total.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Fuente]: código de Comercio (Decreto. 410/1971).
                .col-xl-5
                  figure
                    img(src='@/assets/curso/tema4/img14.png', alt='').m-auto 
              
              .row(titulo="Sociedad de responsabilidad limitada (Ltda.)").ajuste-cajaAcordion
                .col-xl-7.mb-4
                  ul.fa-ul.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Cómo se asocia / capital? ] Pluripersonal. Capital dividido en cuotas.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Responsabilidad]: limitada al monto de aportes.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Rasgos característicos]: reglas más cerradas para cesión de cuotas; tradicional en negocios familiares o de pocos socios.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Fuente]: código de Comercio (Decreto. 410/1971).
                .col-xl-5
                  figure
                    img(src='@/assets/curso/tema4/img15.png', alt='').m-auto 
              
              .row(titulo="Sociedad anónima (S.A.)").ajuste-cajaAcordion
                .col-xl-7.mb-4
                  ul.fa-ul.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Cómo se asocia / capital? ] Pluripersonal. Capital en acciones.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Responsabilidad]: limitada al monto de aportes.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Rasgos característicos]: modelo corporativo; generalmente exige órganos como asamblea, junta directiva y representante legal según estatutos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Fuente]: código de Comercio (Decreto. 410/1971).
                .col-xl-5
                  figure
                    img(src='@/assets/curso/tema4/img16.png', alt='').m-auto 

              .row(titulo="Sociedad por acciones simplificada (S.A.S.)").ajuste-cajaAcordion
                .col-xl-7.mb-4
                  ul.fa-ul.mb-0
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b ¿Cómo se asocia / capital? ] Unipersonal o pluripersonal. Capital en acciones; gran flexibilidad estatutaria.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Responsabilidad]: accionistas responden hasta el monto de sus aportes, salvo excepciones legales.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Rasgos característicos]: es la forma más usada por su flexibilidad: estatutos adaptables, órganos opcionales y posibilidad de un solo accionista.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Fuente]: ley 1258/2008.	
                .col-xl-5
                  figure
                    img(src='@/assets/curso/tema4/img17.png', alt='').m-auto 

        Separador
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Formas asociativas de economía solidaria 
        
        p.mb-5 Las organizaciones de economía solidaria priorizan la satisfacción de necesidades colectivas mediante cooperación y ayuda mutua, no la distribución de utilidades, y funcionan bajo reglas democráticas y un marco legal específico. Estas, se presentan a continuación.

        .bg-slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4.mb-md-0.order-2.espacio-sm
                    h4 Cooperativa
                    ul.fa-ul.estilo___ul-1.mb-0
                      li.mb-1
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Finalidad:] asociación de personas para producir, consumir o prestar servicios a sus miembros.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Rasgo distintivo:] propiedad colectiva y gestión democrática; excedentes se destinan según estatutos y reservas.
                  .col-xl-6.order-1
                    figure
                      img(src='@/assets/curso/tema4/img18.png', alt='' style="max-width: 500px").m-auto
                  
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4.mb-md-0.order-2.espacio-sm
                    h4 Fondo de empleados
                    ul.fa-ul.estilo___ul-1.mb-0
                      li.mb-1
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Finalidad:] organización de trabajadores con vínculo común para prestar servicios y beneficios a asociados.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Rasgo distintivo:] vínculo laboral como elemento de asociación; reglas específicas de constitución y control.
                  .col-xl-6.order-1
                    figure
                      img(src='@/assets/curso/tema4/img19.png', alt='' style="max-width: 500px").m-auto
                  
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4.mb-md-0.order-2.espacio-sm
                    h4 Asociación mutual
                    ul.fa-ul.estilo___ul-1.mb-0
                      li.mb-1
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Finalidad:] ayuda recíproca y servicios de previsión, asistencia y solidaridad entre asociados.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | #[b Rasgo distintivo:] constitución por asociados; prestación de servicios mutuales sin fin lucrativo.
                  .col-xl-6.order-1
                    figure
                      img(src='@/assets/curso/tema4/img20.png', alt='' style="max-width: 500px").m-auto

    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Entidades sin ánimo de lucro (ESAL) 

    p.mb-5 Las entidades sin ánimo de lucro (ESAL) son personas jurídicas creadas para fines sociales o comunitarios sin distribuir utilidades, reguladas por normas que establecen su reconocimiento, registro y funcionamiento administrativo. Los tipos más frecuentes se presentarán en la siguiente tabla.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 3.
      span Tipos frecuentes de ESAL: propósito, gobierno y fuente normativa
    .tabla-a(data-aos="zoom-in")
      table
        thead
          tr
            th.ajuste-border-tabla.texto-left Tipo de ESAL
            th.ajuste-border-tabla.texto-left Propósito central
            th.ajuste-border-tabla.texto-left Elementos de constitución y gobierno
            th.texto-left Fuente
        tbody
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Fundación
            td.ajuste-border-tabla.texto-left Afectación de un patrimonio a un fin de interés general.
            td.ajuste-border-tabla.texto-left Se basa en bienes destinados a un propósito; requiere estatutos y órganos de dirección/representación.
            td.texto-left Código Civil (Ley 57/1887, art. 633 y ss.); D. 2150/1995
          tr
            td.ajuste-border-tabla.texto-left Corporación / asociación
            td.ajuste-border-tabla.texto-left Agrupación de personas para un fin común sin reparto de utilidades.
            td.ajuste-border-tabla.texto-left Se soporta en la voluntad asociativa; estatutos; asamblea/órganos; representación legal.
            td.texto-left Código Civil (Ley 57/1887, art. 633 y ss.); D. 2150/1995
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Registro y publicidad de ESAL
            td.ajuste-border-tabla.texto-left Asegura identificación y trazabilidad de la persona jurídica frente a terceros.
            td.ajuste-border-tabla.texto-left Reglas de inscripción y control de homonimia en cámara de comercio; actualización de libros y datos básicos.
            td.texto-left D. 427/1996

    Separador
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.6 Sociedades BIC como condición de propósito 

    .caja-tema4.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.col-md-10.order-2.order-lg-1.espacio-sm
          p.mb-0 Las sociedades comerciales de Beneficio e Interés Colectivo (BIC) no son un tipo societario adicional, sino una condición legal que puede adoptar cualquier sociedad comercial existente o futura. Esta condición implica incorporar en los estatutos compromisos y prácticas de beneficio e interés colectivo, y cumplir con reglas de reporte y verificación definidas por la reglamentación. Su propósito es hacer explícita una gestión empresarial que combine rentabilidad con impacto social y ambiental.
        .col-xl-auto.col-md-2.order-1.order-lg-2(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema4/img5.svg', alt='' style="width: 77px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
