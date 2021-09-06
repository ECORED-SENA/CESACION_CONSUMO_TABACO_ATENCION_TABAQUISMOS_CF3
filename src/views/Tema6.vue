<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Valoración de la dependencia del tabaquismo

    p.mb-5 Es importante realizar una aproximación diagnóstica de la dependencia del tabaquismo, pues el consumidor de productos de tabaco o sus derivados, desarrolla una triple dependencia que se puede evaluar a partir de la aplicación de distintos instrumentos.
      br
      br
      | A continuación, se presentan algunas de las pruebas utilizadas para evaluar la triple dependencia del tabaquismo.

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src="@/assets/curso/tema6-imagen1.svg")

    p.mb-5 Ahora, se analizarán cada una de estas dependencias.

    h3.titulo-tercero Dependencia física a la nicotina

    p.mb-5 Para evaluar este tipo de dependencia, existe la prueba de Fagerström, un instrumento estándar validado y utilizado ampliamente en varios países. Se aplica mediante una escala auto o hetero administrada de seis (6) ítems, para evaluar el grado de dependencia física a la nicotina. 
      br
      | En la siguiente tabla se encuentra el instrumento con las preguntas, respuestas y respectivos puntajes.
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 3
      span Preguntas de la prueba Fagerström
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota. Tomada del Ministerio de Salud y Protección Social (2020).
        thead
          tr
            th(style="width: 50%") Pregunta
            th Respuestas
            th Puntos
        tbody
          tr
            td ¿Cuánto tiempo pasa entre que se levanta y fuma su primer cigarrillo?
            td 
              | Hasta 5 minutos.
              br
              | Entre 6 y 30 minutos.
              br
              | 31 -60 minutos.
              br
              | Más de 60 minutos.
            td
              | 3
              br
              | 2
              br
              | 1
              br
              | 0
          tr
            td ¿Encuentra difícil no fumar en lugares donde está prohibido, como la biblioteca o el cine?
            td 
              | Sí
              br
              | No.
            td 
              | 1
              br
              | 0
          tr
            td ¿Qué cigarrillo le molesta más dejar de fumar?
            td
              | El primero en la mañana.
              br
              | Cualquier otro.
            td
              | 1
              br
              | 0
          tr
            td ¿Cuántos cigarrillos fuma cada día?
            td 
              | 10 o menos.
              br
              | 11 – 20.
              br
              | 21 – 30.
              br
              | 31 o más.
            td
              | 0
              br
              | 1
              br
              | 2
              br
              | 3
          tr
            td ¿Fuma con más frecuencia durante las primeras horas después de levantarse que durante el resto del día?
            td 
              | Sí
              br
              | No.
            td 
              | 1
              br
              | 0
          tr
            td ¿Fuma, aunque esté tan enfermo que tenga que guardar cama la mayor parte del día?
            td 
              | Sí
              br
              | No.
            td 
              | 1
              br
              | 0

    p.mb-5 Para la interpretación de esta prueba se debe contabilizar el total de los puntos de acuerdo con la respuesta del paciente, para identificar el nivel de dependencia física a la nicotina: 

    .row.mb-5.justify-content-center
      .col-lg-7
        .row.color-caja-primaria.py-4.px-5
          .col-lg-4.col-12
            .titulo-sexto.color-primario.mb-0
              h5 Menos de 4
              span Baja dependencia física a la nicotina.
          .col-lg-4.col-12
            .titulo-sexto.color-primario.mb-0
              h5 Entre 4 y 7
              span Moderada dependencia física a la nicotina.
          .col-lg-4.col-12
            .titulo-sexto.color-primario.mb-0
              h5 Más de 7
              span Alta dependencia física a la nicotina.

    p.mb-5 La prueba de Fagerström versión breve, con solo dos preguntas, también ayuda a evaluar la probabilidad de dependencia física a la nicotina. La aplicación que puede ser auto o hetero administrada y las preguntas se presentan en la siguiente tabla.

    .row.mb-5.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span Preguntas de la prueba Fagerström versión breve
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption Nota. Tomada del Ministerio de Salud y Protección Social (2020).
            thead
              tr
                th Preguntas
            tbody
              tr
                td
                  | <strong>1.</strong> ¿Cuánto tiempo después de despertar, fuma su primer cigarrillo?
                  br
                  br
                  | Menos de cinco minutos (3 puntos).
                  br
                  | 5 a 30 minutos (2 puntos).
                  br
                  | 31 a 60 minutos (1 punto).
              tr
                td
                  | <strong>2.</strong> ¿Cuántos cigarrillos fuma cada día? 
                  br
                  br
                  | Más de 30 cigarrillos (3 puntos).
                  br
                  | 21 a 30 cigarrillos (2 puntos).
                  br
                  | 11 a 20 cigarrillos (1 punto).

    p.mb-5 Para la interpretación de esta prueba se debe contabilizar el total de los puntos de acuerdo con la respuesta del paciente para identificar el nivel de dependencia física a la nicotina: 

    .row.mb-5.justify-content-center
      .col-lg-7
        .row.color-caja-primaria.py-4.px-5
          .col-lg-4.col-12
            .titulo-sexto.color-primario.mb-0
              h5 5 a 6 puntos
              span Alta dependencia física a la nicotina.
          .col-lg-4.col-12
            .titulo-sexto.color-primario.mb-0
              h5 3 a 4 puntos
              span Moderada dependencia física a la nicotina.
          .col-lg-4.col-12
            .titulo-sexto.color-primario.mb-0
              h5 0 a 2 puntos
              span Baja dependencia física a la nicotina.

    p.mb-5 Es importante tener presente que se consideran factores predictores de alta dependencia física a la nicotina:

    .row.justify-content-center.mb-5
      .col-10
        .row
          .col-lg-6.col-12.mb-4.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema6-imagen2.svg' alt='')
              .tarjeta.color-primario.background-naranja-claro-1
                .py-4.px-5
                  p.mb-0 Identificar oportunamente el consumo de productos de tabaco y sus derivados en cada atención en salud (independiente del motivo de consulta).

          .col-lg-6.col-12.mb-4.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema6-imagen3.svg' alt='')
              .tarjeta.color-primario.background-naranja-claro-2
                .py-4.px-5
                  p.mb-0 Identificar oportunamente el consumo de productos de tabaco y sus derivados en cada atención en salud (independiente del motivo de consulta).

    .row.justify-content-center.mb-5
      .col-lg-7.col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 Los pacientes con alta dependencia física a la nicotina tienen alrededor de 2,5 veces más riesgo de fracaso en el tratamiento del tabaquismo, en comparación con los pacientes con dependencia física baja. 

    h3.titulo-tercero Dependencia psicológica del tabaquismo

    .tarjeta.color-acento-contenido-claro.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema6-imagen4.svg")

        .col-md.col-lg-6
          h3 Prueba de Glover Nilsson
          p.mb-4 Una manera de evaluar la dependencia psicológica del tabaquismo es a través de la prueba de Glover Nilsson, que busca identificar la necesidad de un abordaje terapéutico multicomponente, especialmente de corte psicosocial. A continuación, se presenta el instrumento que podrá ser usado en la práctica.
          
          a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    p.mb-5 Para la interpretación de esta prueba se debe contabilizar el total de los puntos de acuerdo con la respuesta del paciente, para identificar el nivel de dependencia psicológica.

    .row.mb-5.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5
          span Resumen de interpretación de la prueba Glover-Nilsson
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption Nota. Tomada del Ministerio de Salud y Protección Social (2020).
            thead
              tr
                th Dependencia psicológica
                th Puntuación
            tbody
              tr
                td Leve
                td 0 a 11
              tr
                td Moderada
                td 12 a 22
              tr
                td Severa
                td 23 a 33
              tr
                td Muy severa
                td 34 a 44

    h3.titulo-tercero Dependencia social del tabaquismo

    p.mb-5 Para evaluar la dependencia social, se deben considerar otros factores como los patrones de consumo de tabaco por parte de familia, pares y roles modelos en la comunidad. 
      br
      | Una prueba sugerida para evaluar este tipo de dependencia puede ser Razones por las que fumo, la cual puede ser autodiligenciada, permitiendo ampliar la comprensión global de las razones por las que una persona continúa fumando, como refuerzo gestual, estimulación, placer, relajación, reducción de estados negativos, adicción, automatismo, que podrían presentarse al mismo tiempo en diferentes niveles en cada fumador.

    .row.justify-content-center.mb-5
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo</strong>. Prueba Razones por las que no fumo.
          

    p.mb-5 Finalmente, entender la psicopatología de la adicción al tabaco y de las motivaciones para el cambio de conducta permite comprender a los fumadores y brindar un mejor apoyo psicosocial a estas personas, por lo tanto, contar con esta información a partir la aplicación de instrumentos como “Razones por las que fumo”, aumentará el éxito del abordaje para ayudar al paciente a dejar de fumar, siendo necesario que el personal de salud reconozca este tipo se instrumentos y comprenda su uso y utilidad.
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema6',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
