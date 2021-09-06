<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Intentos previos de cesación y motivos de recaídas

    p.mb-4 Las personas con múltiples intentos previos de cesación y que no han logrado dejar de fumar, pueden tener una mayor probabilidad de presentar dependencia física a la nicotina. Así, es relevante preguntar sobre los intentos previos para dejar de fumar y los motivos de recaída, aportando información útil al momento de diseñar un plan de intervención para la cesación del consumo de tabaco. 

    figure.image-with-color-bottom.p-4
      img(src="@/assets/curso/tema5-imagen1.jpg")
    
    p.mb-5 En términos prácticos, es importante indagar con el paciente acerca de sus intentos previos de cesación de consumo de tabaco y los motivos de su recaída. A continuación, se presentan algunas preguntas que se pueden realizar al paciente:

    ol.lista-ol--cuadro
      li.mb-4
        .lista-ol--cuadro__vineta
          span a
        | ¿Alguna vez ha intentado dejar de fumar?
      li.mb-4
        .lista-ol--cuadro__vineta
          span b
        | ¿Cuántas veces lo ha intentado?
      li.mb-4
        .lista-ol--cuadro__vineta
          span c
        | ¿Cuánto tiempo ha logrado pasar sin fumar?
      li.mb-4
        .lista-ol--cuadro__vineta
          span d
        | ¿Qué métodos ha utilizado?
      li.mb-4
        .lista-ol--cuadro__vineta
          span e
        | De estos métodos, ¿cuáles le han ayudado a dejar el consumo?
      li.mb-4
        .lista-ol--cuadro__vineta
          span f
        | ¿Cuál fue el último método utilizado?
      li.mb-4
        .lista-ol--cuadro__vineta
          span g
        | ¿Ha usado algún tipo de medicamento para el tratamiento del tabaquismo?
      li.mb-4
        .lista-ol--cuadro__vineta
          span h
        | ¿En los intentos previos de cesación ha presentado síntomas de abstinencia?
      li.mb-4
        .lista-ol--cuadro__vineta
          span i
        | ¿Cuáles han sido los motivos de recaídas en los intentos previos?
      li.mb-4
        .lista-ol--cuadro__vineta
          span j
        | ¿Cuáles son las motivaciones actuales para dejar de fumar?
      li.mb-5
        .lista-ol--cuadro__vineta
          span k
        | ¿Cuáles son los posibles temores frente al proceso? 


    p.mb-5 Estas preguntas son complementarias al abordaje integral del fumador, facilitando una adecuada comprensión y análisis funcional de la conducta de fumar, lo cual permitirá individualizar el abordaje terapéutico. 

    .row.justify-content-center.mb-5
      .col-lg-9.col-12
        .cajon.color-primario.p-4
          .row.px-5.align-items-center
            .col-2
              figure
                img(src="@/assets/curso/tema3-imagen2.svg")
            .col-10
              p.mb-0 A mayor número de intentos previos para dejar de fumar, mayor posibilidad de lograr la cesación definitiva. 

    p.mb-5 Una persona que ha logrado dejar de fumar ha tenido, en promedio, cinco (5) intentos previos de cesación. En este orden de ideas, uno de los factores predictivos de una menor tasa de éxito para la cesación es la ausencia de intentos previos de dejar de fumar.
  
</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass" scoped></style>
