<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Indagación sobre el consumo de productos del tabaco o derivados

    p.mb-5 En todos los usuarios del sistema de salud, es importante:

    .row.justify-content-center.mb-5
      .col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-imagen1.svg' alt='')
          .tarjeta.color-primario.background-naranja-claro-1
            .py-4.px-5
              p.mb-0 Identificar oportunamente el consumo de productos de tabaco y sus derivados en cada atención en salud (independiente del motivo de consulta).

      .col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-imagen2.svg' alt='')
          .tarjeta.color-primario.background-naranja-claro-2
            .py-4.px-5
              p.mb-0 Identificar oportunamente el consumo de productos de tabaco y sus derivados en cada atención en salud (independiente del motivo de consulta).

      .col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-imagen3.svg' alt='')
          .tarjeta.color-primario.background-naranja-claro-1
            .py-4.px-5
              p.mb-0 Identificar oportunamente el consumo de productos de tabaco y sus derivados en cada atención en salud (independiente del motivo de consulta).



    p.mb-5 Es fundamental realizar un diagnóstico que incluya los datos mínimos que permitan optimizar las intervenciones necesarias para la adecuada atención del tabaquismo. 
      br
      br
      | Es así como en la historia clínica de un paciente fumador se deben registrar los siguientes datos: 
    
    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Indagación")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1-imagen7.svg" style="width: 140px")
            .col-md
              p.text-small Todas las personas que acuden a algún servicio de salud deben ser interrogadas acerca de su relación con el consumo de productos del tabaco o derivados (incluyendo cigarrillos electrónicos y exposición al humo de tabaco ambiental), para establecer su condición de no fumador, fumador, exfumador o fumador pasivo.
          .row.justify-content-center(numero="2" titulo="Historia de consumo")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1-imagen8.svg" style="width: 140px")
            .col-md
              p.text-small Es necesario dejar registro de la historia de consumo de tabaco y grado del tabaquismo del paciente, indicando la cantidad de cigarrillos fumados por día y, además, relacionar el tiempo de consumo, estos datos permitirán valorar el nivel de riesgo y el índice tabáquico.
          .row.justify-content-center(numero="3" titulo="Valoración de etapas de cambio")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1-imagen9.svg" style="width: 140px")
            .col-md
              p.text-small Es importante considerar el nivel de cambio del paciente al momento de la consulta, identificar si presenta resistencia o se muestra accesible a considerar el proceso de cambio al identificar la problemática.
          .row.justify-content-center(numero="4" titulo="Nivel de motivación")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1-imagen10.svg" style="width: 140px")
            .col-md
              p.text-small Se debe valorar el nivel de motivación para el abandono del hábito de consumo de tabaco.
          .row.justify-content-center(numero="5" titulo="Intentos previos")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1-imagen11.svg" style="width: 140px")
            .col-md
              p.text-small Es necesario indagar si el paciente ha tenido intentos previos de cesación y los motivos de recaídas.
          .row.justify-content-center(numero="6" titulo="Grado de dependencia")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1-imagen12.svg" style="width: 140px")
            .col-md
              p.text-small Hay que averiguar acerca de la cantidad y consumo diario, a qué hora consume el primero, si consume estando enfermo y si se le dificulta respetar los lugares donde está prohibido fumar. 

    p.mb-5 Debemos tener presente que toda persona que consulta al sistema de salud, independiente de su motivo de consulta, debe ser interrogada sobre el consumo de productos de tabaco o sus derivados. El profesional de salud debe registrar esta información en la historia clínica de manera sistemática, debido a que la identificación temprana del consumo de tabaco aumenta de manera significativa los índices de intervención en los pacientes fumadores.
      br
      br
      | Esta tamización debe extenderse a todos los servicios de salud, así como también realizarse en los entornos educativos, laborales y comunitarios, siempre que se cuente con los recursos y el personal entrenado para implementarlo. 

    .row.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-imagen4.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la práctica clínica es necesario preguntarles a todos los pacientes, sin importar el motivo de consulta, sobre el consumo de productos de tabaco o sus derivados. 
              br
              br
              | Puede ser una pregunta como:
              br
              strong 
                i ¿Usted fuma o consume algún producto derivado del tabaco (incluyendo cigarrillos electrónicos)? 


    p.mb-5 Ante esta pregunta se puede presentar dos posibles respuestas: 

    .row.mb-5.align-items-center.justify-content-center
      .col-10
        .row.align-items-center.mb-5.caja-clara.color-primario-1.py-5.rounded
          .col-lg-4.col-12.mb-5.md-lg-0
            figure
              img.px-5(src='@/assets/curso/tema1-imagen5.svg')
          .col-lg-8.col-12.px-lg-2.px-5
            .h2
              strong Respuesta negativa
            p.mb-0 Es importante evaluar si se trata de un paciente que nunca ha fumado, para lo cual resulta fundamental aprovechar el contacto con el paciente para felicitarlo y validar su condición de no fumador como una opción de vida saludable; otra posibilidad ante una respuesta negativa es que se trate de un paciente que ha dejado de fumar, por lo que, además de felicitarlo, se recomienda realizar consejería para prevención de recaídas y recomendarle mantenerse libre del consumo de tabaco.
        .row.align-items-center.caja-clara.color-primario-2.py-5.rounded
          .col-lg-4.col-12.mb-5.md-lg-0
            figure
              img.px-5(src='@/assets/curso/tema1-imagen6.svg')
          .col-lg-8.col-12.px-lg-2.px-5
            .h2
              strong Respuesta negativa
            p.mb-0 Es importante evaluar si se trata de un paciente que nunca ha fumado, para lo cual resulta fundamental aprovechar el contacto con el paciente para felicitarlo y validar su condición de no fumador como una opción de vida saludable; otra posibilidad ante una respuesta negativa es que se trate de un paciente que ha dejado de fumar, por lo que, además de felicitarlo, se recomienda realizar consejería para prevención de recaídas y recomendarle mantenerse libre del consumo de tabaco.

    p.mb-5 También es necesario indagar a todos los pacientes sobre exposición al humo de tabaco ambiental, humo de tabaco ajeno o humo de segunda mano, incluyendo exposición a vapor de dispositivos electrónicos, para que se refuerce la importancia de preservar su espacio libre de humo de tabaco, pues le expone a ser un fumador pasivo.
  
</template>

<script>
export default {
  name: 'Tema1',
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
