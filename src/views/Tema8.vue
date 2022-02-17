<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Registro de información sobre atención en tabaquismo en la historia clínica (códigos CIE-10 y códigos CUPS)

    figure.mb-5(data-aos="fade-right" data-aos-duration="500")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qUL5FLa-R74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-sexto.color-acento-contenido(data-aos="fade-down" data-aos-offset="250" data-aos-duration="500")
      h5 Tabla 9
      span Reporte de los diagnósticos y procedimiento para atención del tabaquismo CIE-10 y CUPS
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-down" data-aos-offset="250" data-aos-duration="500")
      table
        caption Nota. Tomada del Ministerio de Salud y Protección Social (2020).
        thead
          tr
            th CIE-10
            th Descripción CIE-10
            th Intervención en el programa

        tbody
          tr
            td Z720
            td Problemas relacionados con el uso de tabaco
            td Usar este codigo cuando se realiza el diagnóstico del tabaquismo. SI se desea ser mas preciso teniendo en cuenta los hallazgos clínicos puede considerarse:

          tr
            td Z716
            td Consulta para asesoría por Usarlo cuando se realizan las consultas programadas de labaco
            td Usarlo cuando se realizan las consultas programadas para el tratamiento del tabaquismo 

          tr
            td Z50.8
            td Atención por otros procedimientos de rehabilitación (rehabilitación por uso de tabaco).
            td Usarlo cuando al paciente dejo el consumo de tabaco o sus derivados, es decir cesación del tabaquismo de más de 6 meses
      .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")
        .col-lg-8
          a.anexo(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-cesacion-consumo-atencion-tabaco.pdf" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p.mb-0 #[b Anexo.] Documento de directrices para la revisión del tema

    p.mb-0(data-aos="fade-down" data-aos-duration="500") Se debe tener siempre presente que el reporte adecuado y oportuno de esta información les posibilita a los actores del sistema de salud saber si las atenciones prestadas generan un impacto positivo, reservar recursos u orientar las decisiones clínicas y de política pública.
  
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
