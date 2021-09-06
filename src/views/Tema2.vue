<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Historia de consumo de tabaco y grado de tabaquismo (índice tabáquico)

    p.mb-5 La valoración del estatus del fumador comienza con la identificación de la intensidad del consumo, parámetro de obligatorio registro en historia clínica. Se puede utilizar el índice de aquetes de cigarrillos anuales (denominado IPA); y para calcular este índice se requiere conocer el número de cigarrillos diarios y el tiempo que lleva fumando, calculándolo de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-lg-8.col-12
        img(src='@/assets/curso/tema2-imagen1.svg' alt='')
    
    p.mb-5 De acuerdo con este indicador, se pueden clasificar a los fumadores según su intensidad de consumo, como grado de tabaquismo leve, moderado, grave y muy grave, como se presenta a continuación:

    .row.justify-content-center.mb-5 
      .col-lg-6.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Grado de tabaquismo o índice tabáquico
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Grado de tabaquismo
                th Índice Paquetes-Año (IPA)
            tbody
              tr
                td Leve
                td < 5
              tr
                td Moderado
                td 5-15
              tr
                td Grave
                td 16-25
              tr
                td Muy Grave
                td > 25

    p.mb-5 El conocimiento de este parámetro ayudará a valorar la probabilidad de:

    .row.justify-content-center.mb-5
      .col-lg-4.col-12.mb-5.mb-lg-0
        img(src='@/assets/curso/tema2-imagen2.svg' alt='').mb-3
        p.mb-0
          strong Desarrollar enfermedades relacionadas con el tabaquismo. 
      .col-lg-4.col-12.mb-5.mb-lg-0
        img(src='@/assets/curso/tema2-imagen3.svg' alt='').mb-3
        p.mb-0
          strong Identificar una posible dependencia física a la nicotina.
      .col-lg-4.col-12.mb-5.mb-lg-0
        img(src='@/assets/curso/tema2-imagen4.svg' alt='').mb-3
        p.mb-0
          strong Lograr el objetivo terapéutico: dejar de fumar. 
      
    p.mb-5 En términos generales, a mayor puntaje en el IPA, mayor posibilidad de dependencia física a la nicotina. <strong>El consumo de menos de 10 cigarrillos/día podría asociarse con una mayor probabilidad de éxito en el proceso de cesación.</strong> Dentro del abordaje del fumador es significativo conocer otros elementos clave relacionados con la historia del tabaquismo, y por ejemplo, se pueden realizar las siguientes preguntas:
    
    .row.mb-5
      .col-lg-6.col-12.mb-5.d-flex
        .row.caja-enumerada.w-100
          .col-auto
            p.mb-0 1
          .col.py-4
            p.mb-0
              strong Tabaquismo de los padres o convivientes.
              br
              | Ejemplo: <i>¿Alguien más fuma en su casa?</i>
      .col-lg-6.col-12.mb-5.d-flex
        .row.caja-enumerada.w-100
          .col-auto
            p.mb-0 2
          .col.py-4
            p.mb-0
              strong Tabaquismo en amigos o círculo social cercano.
              br
              | Ejemplo: <i>¿Tiene amigos o compañeros de trabajo fumadores?</i>
      .col-lg-6.col-12.mb-5.d-flex
        .row.caja-enumerada.w-100
          .col-auto
            p.mb-0 3
          .col.py-4
            p.mb-0
              strong Edad de inicio del consumo.
              br
              | Ejemplo: <i> ¿Cuándo probó por primera vez un cigarrillo o un cigarrillo electrónico?</i>
      .col-lg-6.col-12.mb-5.d-flex
        .row.caja-enumerada.w-100
          .col-auto
            p.mb-0 4
          .col.py-4
            p.mb-0
              strong Comorbilidades o antecedentes médicos.
              br
              | Ejemplo: <i>¿Sufre de alguna enfermedad?</i>
      .col-lg-6.col-12.mb-5.d-flex
        .row.caja-enumerada.w-100
          .col-auto
            p.mb-0 5
          .col.py-4
            p.mb-0
              strong Historia de otro consumo de sustancias.
              br
              | Ejemplo: <i> ¿Consume bebidas alcohólicas o algún otro tipo de sustancias psicoactivas?</i>
      .col-lg-6.col-12.mb-5.d-flex
        .row.caja-enumerada.w-100
          .col-auto
            p.mb-0 6
          .col.py-4
            p.mb-0
              strong Otros antecedentes médicos.
              br
              | Indagar historia personal de epilepsia, trastornos psiquiátricos, trastornos digestivos, cardiovasculares, que son importantes a la hora de seleccionar tratamiento farmacológico.
      

    p.mb-5 También se han identificado algunos factores predictores de éxito para la cesación del consumo de tabaco, como: 
    
    .row.justify-content-center
      .col-lg-8.col-12
        ImagenInfografica.color-primario.mb-5

          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2-imagen5.svg', alt='')

          .tarjeta.color-acento-botones.p-3(x="11.4%" y="82%")
            p.mb-0 El temor a las consecuencias para la salud.
          
          .tarjeta.color-acento-botones.p-3(x="5%" y="56%")
            p.mb-0 Percepción de nocividad del tabaquismo.
          
          .tarjeta.color-acento-botones.p-3(x="8%" y="30%")
            p.mb-0 No convivir con personas fumadoras.

          .tarjeta.color-acento-botones.p-3(x="20%" y="7%")
            p.mb-0 Mayor edad de inicio del consumo.

          .tarjeta.color-acento-botones.p-3(x="80.5%" y="7%")
            p.mb-0 Nivel educativo alto.

          .tarjeta.color-acento-botones.p-3(x="91.5%" y="30.5%")
            p.mb-0 No exposición ambiental al tabaco.

          .tarjeta.color-acento-botones.p-3(x="94%" y="56.2%")
            p.mb-0 Tener una pareja no fumadora.

          .tarjeta.color-acento-botones.p-3(x="87%" y="82%")
            p.mb-0 Juega un papel fundamental el círculo de amigos si son, en la mayoría, no fumadores.

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

<style lang="sass" scoped></style>
