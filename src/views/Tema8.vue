<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Registro de información sobre atención en tabaquismo en la historia clínica (códigos CIE-10 y códigos CUPS)

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-sexto.color-acento-contenido
      h5 Tabla 9
      span Reporte de los diagnósticos y procedimiento para atención del tabaquismo CIE-10 y CUPS
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota. Tomada del Ministerio de Salud y Protección Social (2020).
        thead
          tr
            th CIE-10
            th Descripción CIE-10
            th Intervención en el programa
            th Procedimiento/Descripción CUPS
        tbody
          tr
            td Z720
            td Problemas relacionados con el uso de tabaco.
            td Diagnóstico de tabaquismo.
            td No aplica.
          tr
            td Z716
            td Problemas relacionados con el uso de tabaco.
            td Intervención breve programada.
            td 89.0.2 Consulta descrita como global o de primera vez.<br>89.0.3 Consulta de control o seguimiento.
          tr
            td F171
            td Trastornos mentales y del comportamiento debidos al uso de tabaco: uso nocivo.
            td Intervención breve programada y manejo farmacológico.
            td F171 Trastornos mentales y del comportamiento debidos al uso de tabaco: uso nocivo.
          tr
            td F172
            td Trastornos mentales y del comportamiento debidos al uso de tabaco: síndrome de dependencia.
            td Intervención intensiva cognitivo-conductual.
            td(rowspan="2") 89.0.2.01 Consulta de primera vez por medicina general.<br>89.0.3.01 Consulta de control o seguimiento por medicina general.<br>89.0.2.02 Consulta por primera vez por medicina especializada.<br>89.0.3.02 Consulta de control de seguimiento por medicina especializada.<br>89.0.2.08 Consulta por primera vez por psicología.<br>89.0.3.08 Consulta de control de seguimiento por psicología.
          tr
            td F173
            td Trastornos mentales y del comportamiento debidos al uso de tabaco: estado de abstinencia.
            td Intervención intensiva cognitivo-conductual y manejo farmacológico.
          tr
            td Z50.8
            td Atención por otros procedimientos de rehabilitación (rehabilitación por uso de tabaco).
            td Cesación tabaquismo.
            td 89.0.3 Consulta de control o de seguimiento.
        

    p.mb-0 Se debe tener siempre presente que el reporte adecuado y oportuno de esta información les posibilita a los actores del sistema de salud saber si las atenciones prestadas generan un impacto positivo, reservar recursos u orientar las decisiones clínicas y de política pública.
  
</template>

<script>
export default {
  name: 'Tema8',
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
