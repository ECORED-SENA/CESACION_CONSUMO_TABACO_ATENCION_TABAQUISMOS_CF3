<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Exámenes complementarios para la evaluación del paciente fumador

    p.mb-5(data-aos="fade-right" data-aos-offset="500" data-aos-duration="500") Durante la valoración clínica del paciente fumador deben considerarse algunos exámenes complementarios, sobre todo porque ayudan a la identificación temprana de comorbilidades o precisan más el grado de exposición al humo de tabaco.

    figure.image-with-color-bottom.right.p-4.mb-5(data-aos="fade-left" data-aos-offset="500" data-aos-duration="500")
      img(src="@/assets/curso/tema7-imagen1.jpg")

    p.mb-5(data-aos="fade-right" data-aos-offset="500" data-aos-duration="500") En la siguiente tabla se describen los datos mínimos, pruebas necesarias y opcionales que se pueden realizar en el paciente fumador como parte de la valoración clínica y que orientarán el tratamiento a seguir:

    .titulo-sexto.color-acento-contenido(data-aos="fade-left" data-aos-offset="500" data-aos-duration="500")
      h5 Tabla 6
      span Datos mínimos para abordar al paciente
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left" data-aos-offset="500" data-aos-duration="500")
      table
        caption Nota. Tomada del Ministerio de Salud y Protección Social (2020).
        thead
          tr
            th Categoría por evaluar
            th Test o pregunta a utilizar
            th Aplicación
        tbody
          tr
            td Averiguar sobre consumo de tabaco o derivados.
            td Preguntas:<br>¿Usted fuma o utiliza algún producto de tabaco o derivados (incluidos los cigarrillos electrónicos)?<br>¿Ha estado expuesto al humo de segunda mano?
            td Necesario
          tr
            td Grado de tabaquismo (índice tabáquico).
            td IPA (Índice Paquetes-Año).
            td Necesario
          tr
            td Valoración etapas de cambio.
            td Etapas de cambio de Prochaska.
            td Necesario
          tr
            td Valoración de la dependencia física del tabaquismo.
            td Prueba de Fagerström (versión completa o versión breve).
            td Necesario
          tr
            td Nivel de motivación para dejar de fumar.
            td Prueba de Richmond o escala visual análoga de motivación.
            td Opcional
          tr
            td Otros aspectos sobre historia de consumo de tabaco e intentos de cesación.
            td Edad de inicio de consumo, consumo de tabaco en familia y amigos, otros consumos, antecedentes, intentos previos de cesación y motivos de recaídas.
            td Opcional
          tr
            td Valoración de la dependencia psicológica del tabaquismo.
            td Prueba de Glover Nilsson.
            td Opcional
          tr
            td Valoración de la dependencia física del tabaquismo.
            td Prueba razones por las que fumo.
            td Opcional          

    p.mb-5(data-aos="fade-right" data-aos-offset="500" data-aos-duration="500") Esta tabla servirá como resumen y guía al momento de abordar un paciente fumador; en esta categorización se identifican algunas pruebas como opcionales, sin embargo, es recomendable que siempre se realice una valoración completa.

    h3.titulo-tercero(data-aos="fade-left" data-aos-offset="500" data-aos-duration="500") Evaluación del nivel de CO en el aire espirado: cooximetría

    p.mb-5(data-aos="fade-right" data-aos-offset="500" data-aos-duration="500") Es una prueba sencilla para evaluar el nivel de monóxido de carbono (CO) en el aire espirado de una persona. Los niveles mayores de 7 ppm (partículas por millón) de CO, se relacionan con el consumo de tabaco fumado y permite medir de manera objetiva el consumo de tabaco y, de manera indirecta, reflejar posibilidad de enfermedades atribuidas al tabaquismo.

    .row.justify-content-center.mb-5(data-aos="fade-left" data-aos-offset="500" data-aos-duration="500")
      .col-lg-9.col-12
        .cajon.color-primario.p-4
          .row.px-5.align-items-center
            .col-2
              figure
                img(src="@/assets/curso/tema7-imagen2.svg")
            .col-10
              p.mb-0 Su resultado puede servir como motivación para dejar de fumar, al evidenciar que el consumo de tabaco si genera alteraciones en los niveles de monóxido de carbono, haciendo tangible la posibilidad de riesgos para la salud como consecuencia del consumo. 

    p.mb-5(data-aos="fade-right" data-aos-offset="500" data-aos-duration="500") No es un examen necesario para la valoración clínica del paciente fumador, no obstante, si se tiene disponible, permite correlacionar sus niveles con el grado de tabaquismo y evaluar niveles reales de abstinencia en el seguimiento del paciente en proceso de cesación, al ser una prueba sencilla, fácil e inocua de realizar.
      br
      br
      | Se mide en partículas por millón y en términos generales, el resultado de la cooximetría se puede interpretar así:
    
    .row.justify-content-center.mb-5(data-aos="fade-left" data-aos-offset="500" data-aos-duration="500")
      .col-lg-9.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7
          span Interpretación de la cooximetría
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Categoría
                th Nivel de monóxido de carbono (CO)
                th 
            tbody
              tr
                td No fumadores 
                td CO < 6 ppm
                td(rowspan="3")
                  img(src="@/assets/curso/tema7-imagen3.svg")
              tr
                td Fumadores esporádicos 
                td CO 6 a 10 ppm
              tr
                td Fumadores 
                td CO > 10 ppm

    p.mb-5(data-aos="fade-right" data-aos-offset="500" data-aos-duration="500") La vida media del nivel CO en aire espirado es corta (entre 2-5 horas), por lo que esta es una de las causas más frecuentes de falsos negativos. 
      br
      br
      | Existe una correlación entre los niveles de cooximetría y el grado de tabaquismo, es decir, un grado leve de tabaquismo mediante cooximetría indica que la persona tiene menos de 15 ppm de monóxido de carbono en el aire espirado y así sucesivamente. 
      br
      br
      | En la siguiente tabla se muestra esa correlación y además se compara con el grado de tabaquismo usando el Índice Paquete-Año (IPA).
    
    .row.justify-content-center.mb-5(data-aos="fade-left" data-aos-offset="500" data-aos-duration="500")
      .col-lg-7.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8
          span Correlación entre los niveles de cooximetría y el grado de tabaquismo
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Relación IPA/CO
                th IPA<br>(Índice de Paquetes al Año)
                th CO (ppm)
            tbody
              tr
                td Leve
                td < 5
                td < 15
              tr
                td Moderado
                td 5-15
                td 15-20
              tr
                td Grave
                td 16-25
                td 21-30
              tr
                td Muy grave
                td > 25
                td > 30
    
    .row.justify-content-center.mb-5(data-aos="fade-right" data-aos-offset="500" data-aos-duration="500")
      .col-lg-9.col-12
        .cajon.color-acento-contenido.p-4
          .row.px-5.align-items-center
            .col-2
              figure
                img(src="@/assets/curso/tema7-imagen4.svg")
            .col-10
              p.mb-0 Las pruebas de detección temprana son muy importantes, pues permitirán la realización de tratamientos oportunos y más eficientes. 

    p.mb-5(data-aos="fade-left" data-aos-offset="500" data-aos-duration="500") A continuación, se presentan los tipos de tamizajes de detección temprana en pacientes fumadores:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.px-5(titulo="Detección temprana de depresión")
        .col-lg-3.mb-lg-0.mb-4
          figure
            img(src="@/assets/curso/tema7-imagen5.png")
        .col-lg-9
          p.mb-0
            span Con frecuencia el tabaquismo puede presentarse como un síntoma de depresión, por lo tanto, su identificación temprana es clave para tratar la enfermedad de base y no el síntoma. Para ello, se recomienda evaluar en los pacientes fumadores mayores de 18 años la presencia de depresión mediante la aplicación de la prueba de Whooley o test de dos preguntas:
            br
            br
            strong 1. ¿Durante los últimos 30 días se ha sentido a menudo desanimado, deprimido o con pocas esperanzas?
            br
            strong 2. ¿Durante los últimos 30 días ha sentido a menudo poco interés o placer al hacer cosas que habitualmente disfrutaba?
            br
            br
            span Si la respuesta a alguna de las dos preguntas es afirmativa, es necesario aplicar criterios para descartar un diagnóstico de trastorno depresivo. 
      .row.px-5(titulo="Detección temprana de ansiedad")
        .col-lg-3.mb-lg-0.mb-4
          figure
            img(src="@/assets/curso/tema7-imagen6.png")
        .col-lg-9
          p.mb-0
            span Varios estudios han demostrado, en adolescentes y adultos, la relación entre ansiedad y fumar.
            br
            br
            span Es importante considerar que el tabaquismo puede preceder el inicio de trastornos de ansiedad; los adolescentes con ansiedad social tienen mayor riesgo de desarrollar dependencia nicotínica y el fumar exacerba la sintomatología ansiosa comparada con los no fumadores.
            br
            br
            span Se recomienda, en pacientes fumadores con factores de riesgo para ansiedad, realizar la tamización para trastorno de ansiedad  utilizando el test de ansiedad de Goldberg, que es corto y de fácil aplicación con el propósito de disminuir las posibles recaídas en el proceso de cesación.

      .row.px-5(titulo="Detección temprana de EPOC")
        .col-lg-3.mb-lg-0.mb-4
          figure
            img(src="@/assets/curso/tema7-imagen7.png")
        .col-lg-9
          p.mb-0
            span El tabaquismo es uno de los principales factores de riesgo para desarrollar Enfermedad Pulmonar Obstructiva Crónica (EPOC), por tanto, se recomienda la búsqueda activa de esta enfermedad en todos los sujetos fumadores o con antecedente de tabaquismo con un IPA ≥ 20 paquetes/año, aunque no tengan síntomas, y en adultos expuestos a tabaquismo de segunda mano donde la exposición fue o es frecuente a una persona que fume en el hogar o en el sitio de trabajo.

      .row.px-5(titulo="Detección temprana de cáncer pulmonar")
        .col-lg-3.mb-lg-0.mb-4
          figure
            img(src="@/assets/curso/tema7-imagen8.png")
        .col-lg-9
          p.mb-0
            span Otra de las enfermedades a considerar como sospechosa para identificar tempranamente, es el cáncer de pulmón, sobre todo en personas de 55 a 74 años fumadores de 30 paquetes/años o más, fumadores activos o que hayan dejado de fumar hace menos de 15 años.

        
    p.mb-5(data-aos="fade-right" data-aos-duration="200") En el caso de fumadores con antecedentes de trastornos de ansiedad, se recomienda utilizar las mismas estrategias de cesación que en pacientes sin trastornos de ansiedad y tener manejo interdisciplinario con psicología y psiquiatría. 
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema7',
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
