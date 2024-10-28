<template>
  <h1>Propiedad conmutada</h1>
  <!-- <ul>
    <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
  </ul> -->
  <button @click="getJuegosAzules()">Juegos Azules</button>
  <div v-html="html"></div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  methods: {
    getJuegosAzules() {
        for(var juego of this.juegos){
            this.html += '<h4 style="color:blue">'+juego+'</h4>'
        }
    },
  },
  computed: {
    juegosRojos() {
      let datos = this.juegos;
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = '<span style="color:green">' + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },
  data() {
    return {
      juegos: ["LoL", "TFT", "Vampire Survivors", "Maincra", "FIFA"],
      html: '',
    };
  },
};
</script>