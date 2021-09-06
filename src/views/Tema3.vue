<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Valoración de etapas de cambio (modelo de Prochaska)

    p.mb-5 El proceso de cesación no siempre se manifiesta de forma secuencial, de modo que pueden ocurrir retrocesos o saltos de etapas. Por ello, conocer en qué etapa de cambio se encuentra cada persona puede resultar muy útil para orientar e individualizar el proceso terapéutico y optimizar los recursos disponibles.

    figure.mb-5.image-with-color.p-4
      img(src="@/assets/curso/tema3-imagen1.jpg")

    p.mb-5 En la teoría del modelo transteórico de Prochaska y DiClemente se definieron los estadios que atraviesan las personas consumidoras de productos de tabaco, estableciendo cinco etapas en función de la intención de cesación: <strong>precontemplación, contemplación, preparación, acción y mantenimiento</strong>. 
      br
      br
      | En el siguiente recurso de aprendizaje se describen estas etapas para mayor comprensión:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-primario--borde.p-4(titulo="PASO 1: Precontemplación")
        p.mb-0 Sin intención de dejar de fumar en los próximos 6 meses.
      .tarjeta.color-primario--borde.p-4(titulo="PASO 2: Contemplación")
        p.mb-0 Intención de dejar de fumar en los próximos 6 meses.
      .tarjeta.color-primario--borde.p-4(titulo="PASO 3: Preparación")
        p.mb-0 Intención de cesación en el próximo mes.
      .tarjeta.color-primario--borde.p-4(titulo="PASO 4: Acción")
        p.mb-0 Ha iniciado el proceso de cese. Está dejando de fumar.
      .tarjeta.color-primario--borde.p-4(titulo="PASO 5: Mantenimiento")
        p.mb-0 Ha dejado de fumar por más de 6 meses.
      .tarjeta.color-primario--borde.p-4(titulo="PASO 6: Recaída")
        p.mb-0 Ha vuelto a fumar.
        
    

    p.mb-5 El avance en los estadios de cambio está determinado por la motivación para dejar de fumar o vapear y la percepción de poder hacerlo (autoeficacia). 

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.color-primario.p-4
          .row.px-5.align-items-center
            .col-2
              figure
                img(src="@/assets/curso/tema3-imagen2.svg")
            .col-10
              p.mb-0 Es fundamental identificar, entonces, en qué etapa está el paciente al momento de la consulta para establecer estrategias y conocer el punto de partida del proceso. Las etapas iniciales requerirán de técnicas de carácter motivacional, mientras que las fases posteriores se necesitan abordar con técnicas cognitivo-conductuales para conseguir el cambio.

    p.mb-5 Se debe tener en cuenta que el modelo considera las recaídas como un evento normal en el proceso, por lo cual se debe animar al paciente a seguir trabajando duro en su proceso de cambio y lograr permanecer en la etapa de mantenimiento.

</template>

<script>
export default {
  name: 'Tema3',
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
