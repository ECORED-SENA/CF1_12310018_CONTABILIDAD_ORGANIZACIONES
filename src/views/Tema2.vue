<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Concepto de la empresa en Colombia y nociones asociadas 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la empresa es una actividad económica organizada para producir bienes o prestar servicios, diferenciándose del local o la marca. Se entiende como la integración de recursos, personas y procesos orientados a generar valor bajo reglas y controles establecidos.
    
    p.mb-5 Con el fin de profundizar en el concepto de empresa en Colombia y sus nociones relacionadas, se presentarán las principales diferencias entre empresa, comerciante y establecimiento de comercio.

    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9(data-aos="fade-right")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema2/img2.jpg', alt="" ).m-auto
            h4.text-center Empresa
            p.mb-0 Actividad económica organizada. Se refiere a lo que se hace (producir, vender, prestar servicios). Referente: Código de Comercio, Art. 25.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio-sm
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema2/img3.jpg', alt="" ).m-auto
            h4.text-center Comerciante
            p.mb-0 Quien ejerce profesionalmente actividades mercantiles. Puede ser persona natural o jurídica. Referente: Código de Comercio, Art. 25.
      .col-xl-4.col-md-9(data-aos="fade-left").espacio-sm
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema2/img4.jpg', alt="" ).m-auto
            h4.text-center Establecimiento de comercio
            p.mb-0 Conjunto de bienes organizados para desarrollar la empresa (local, mobiliario, inventarios, etc.). Referente: Código de Comercio, Art. 515.

</template>

<script>
export default {
  name: 'Tema2',
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
