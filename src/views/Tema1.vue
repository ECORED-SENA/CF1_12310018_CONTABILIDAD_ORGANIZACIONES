<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Marco normativo base para comprender la empresa en Colombia 

    .cala-tema1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 El marco normativo explica la regulación y responsabilidad de la empresa en Colombia. La Constitución garantiza la libertad económica, reconoce su función social y permite la intervención del Estado para proteger el interés general. Además, el Código de Comercio define la empresa como una actividad económica organizada y diferencia los conceptos de empresa, comerciante y establecimiento de comercio.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema1/img1.png', alt='').m-auto

    p.mb-5 A continuación, se presentan las principales normas jurídicas que fundamentan y orientan el desarrollo del presente componente formativo, las cuales permiten comprender el marco legal aplicable al estudio de la empresa en Colombia.

    .bg--img_03.mb-0
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img2.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Constitución Política").ajuste-cajaAcordion
              .col-xl-7.mb-4
                ul.fa-ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Artículo / acto]: Arts. 333-334.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué establece?] Libertad económica; función social de la empresa; intervención del Estado.  
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Explica por qué existen obligaciones y controles empresariales. 
              .col-xl-5
                figure
                  img(src='@/assets/curso/tema1/img3.png', alt='').m-auto 

            .row(titulo="Código de Comercio (Decreto. 410/1971)").ajuste-cajaAcordion
              .col-xl-7.mb-4
                ul.fa-ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Artículo / acto]: Art. 25.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué establece?] Concepto legal de empresa como actividad económica organizada.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Define empresa y diferencia empresa vs. lugar o nombre.
              .col-xl-5
                figure
                  img(src='@/assets/curso/tema1/img4.png', alt='').m-auto 

            .row(titulo="Código de Comercio (Decreto. 410/1971)").ajuste-cajaAcordion
              .col-xl-7.mb-4
                ul.fa-ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Artículo / acto]: Art. 10.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué establece?] Concepto de comerciante.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Ubica quién ejerce profesionalmente actividades mercantiles.
              .col-xl-5
                figure
                  img(src='@/assets/curso/tema1/img5.png', alt='').m-auto 

            .row(titulo="Código de Comercio (Decreto. 410/1971)").ajuste-cajaAcordion
              .col-xl-7.mb-4
                ul.fa-ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Artículo / acto]: Art. 515.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué establece?] Definición de establecimiento de comercio.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Aclara que el establecimiento no es sinónimo de empresa.
              .col-xl-5
                figure
                  img(src='@/assets/curso/tema1/img6.png', alt='').m-auto 

            .row(titulo="Ley 590/2000 y Ley 905/2004").ajuste-cajaAcordion
              .col-xl-7.mb-4
                ul.fa-ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Artículo / acto]: MIPYMES.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Qué establece?] Marco para promover MiPymes y su enfoque de clasificación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b ¿Cómo se usa?] Justifica la categoría micro/pequeña/mediana como referencia de política pública.
              .col-xl-5
                figure
                  img(src='@/assets/curso/tema1/img7.png', alt='').m-auto  

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
