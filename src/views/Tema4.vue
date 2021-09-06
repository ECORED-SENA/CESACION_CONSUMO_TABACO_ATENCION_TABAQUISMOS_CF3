<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Nivel de motivación para dejar de fumar

    .row.mb-5
      .col-lg-6.text-offset-box
        .h3 El deseo de cambio por parte del paciente es muy importante, por eso se debe conocer el estado motivacional en el que se encuentra para evaluar la motivación de los pacientes que quieren dejar de fumar.
      .col-lg-6
        p.mb-0 Se pueden aplicar las siguientes pruebas que son frecuentemente usadas: la de Richmond o la escala visual análoga de motivación. A continuación, se explica cada una de ellas:
    
    p.mb-4
      strong La prueba de Richmond

    ol.lista-ol.lista-ol--separador.mb-5
      li.mb-4 
        span.text-bold a. 
        | Consta de un cuestionario de cuatro preguntas que tiene un puntaje total de 10 puntos.
      li.mb-4
        span.text-bold b. 
        | El objetivo es valorar el grado de motivación para dejar de fumar. 
      li.mb-4
        span.text-bold c. 
        | La aplicación se da mediante un cuestionario auto o hetero administrado, como el que se muestra en la siguiente tabla.
    

    .row.mb-5.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span Preguntas de la prueba Richmond
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="2") Pregunta
                th Puntaje
            tbody
              tr
                td(colspan="2") 1. ¿Le gustaría dejar de fumar si pudiera hacerlo fácilmente?
                td
                  | Sí: 1 punto.
                  br
                  | No: 0 puntos.
              tr
                td(colspan="2")  2. ¿Cuánto interés tiene en dejarlo?
                td
                  | Mucho: 3 puntos.
                  br
                  | Bastante: 2 puntos.
                  br
                  | Algo: 1 punto.
                  br
                  | Nada: 0 puntos.
              tr
                td(colspan="2")  3. ¿Intentará dejar de fumar en las próximas dos semanas?
                td
                  | Sí: 3 puntos.
                  br
                  | Probablemente: 2 puntos.
                  br
                  | Dudoso: 1 punto.
                  br
                  | No: 0 puntos.
              tr
                td(colspan="2")  4. ¿Cree que dentro de 6 meses no fumará?
                td
                  | Sí: 3 puntos.
                  br
                  | Probablemente: 2 puntos.
                  br
                  | Dudoso: 1 punto.
                  br
                  | No: 0 puntos.
              
    p.mb-5 Para la interpretación de los resultados, hay que tener presentes las siguientes puntuaciones que indicarán el nivel de motivación que tiene el paciente para dejar de fumar:

    .row.mb-5.justify-content-center
      .col-lg-7
        .row.color-caja-primaria.py-4.px-5
          .col-lg-6.col-12.mb-4
            .titulo-sexto.color-primario
              h5 Menos de 3 puntos
              span Muy baja motivación para dejar de fumar. 
          .col-lg-6.col-12.mb-4
            .titulo-sexto.color-primario
              h5 6 a 7 puntos
              span Moderada motivación para dejar de fumar.
          .col-lg-6.col-12
            .titulo-sexto.color-primario
              h5 4 a 5 puntos
              span Baja motivación para dejar de fumar.
          .col-lg-6.col-12
            .titulo-sexto.color-primario
              h5 8 a 10 puntos
              span Alta motivación para dejar de fumar.

    h3.titulo-tercero La escala visual análoga

    .row
      .col-lg-6
        p.mb-0 Consiste en una línea horizontal que puede graficarse en 10 centímetros, y en ella se presentan los niveles de motivación: en el extremo izquierdo inicia con el nivel leve y en el extremo derecho con el nivel intenso. Al paciente se le realiza una pregunta y de acuerdo con su respuesta se podrá determinar el nivel de motivación.
          br
          br
          | Pregunta: en una escala de 0 a 10, donde 0 es la menor motivación y 10 es la máxima, <strong>¿qué tan motivado se siente para dejar de fumar?</strong>
          br
          br
          | Para la interpretación de los resultados, se debe tener presente que las personas que se acerquen a un puntaje de 7 o más, tienen mayor motivación, y las que se acerquen a un puntaje de 4 o menos, tienen menor motivación.
      .col-lg-6
        .color-caja-acento-contenido.p-5
          .titulo-sexto.color-primario
            span Escala visual análoga
          figure
            img(src="@/assets/curso/tema4-imagen1.svg")
  
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
