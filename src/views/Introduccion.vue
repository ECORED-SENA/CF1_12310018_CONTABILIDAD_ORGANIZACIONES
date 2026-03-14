<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La empresa constituye el eje central de la organización económica y social, actuando como el motor que produce bienes y servicios mientras genera relaciones comerciales que impactan el desarrollo nacional. En el contexto colombiano, se reconoce como la base del progreso y posee una función social inherente, lo que implica el cumplimiento de normativas específicas que regulan su interacción con el Estado, sus trabajadores y el mercado en general. 
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender la naturaleza empresarial requiere identificar sus criterios de clasificación estándar, los cuales permiten categorizar a las organizaciones según su actividad económica, su tamaño medido por ingresos y macrosector y el origen de su capital. Estas distinciones no son meramente teóricas, sino que resultan fundamentales para la caracterización empresarial, el acceso a instrumentos de apoyo y el cumplimiento de los procesos de registro legal.

    p.mb-0 Este análisis se desarrolla de manera progresiva para explicar cómo se articulan los conceptos técnicos con las formas jurídicas de constitución. Al dominar estas definiciones y clasificaciones bajo la normativa vigente, es posible interpretar con precisión el entorno económico y las dinámicas organizacionales que rigen la realidad empresarial en el país 
  
</template>

<script>
export default {
  name: 'Introduccion',
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
