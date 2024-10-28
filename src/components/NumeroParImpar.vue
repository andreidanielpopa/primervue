<template>
  <div>
    <h1>Numero par o impar</h1>
    <label for="">Introduzca un numero</label>
    <input type="number" v-model="numero" />
    <!-- <button @click="metodoParOImpar()">Comprobar</button> -->
    <!-- <div v-html="resultado"></div> -->
    <!-- <div v-html="html"></div> -->
    <h1 v-if="this.numero%2 == 0" style="color:green">Par</h1>
    <h1 v-else style="color:red">Impar</h1>
  </div>
</template>

<script>
export default {
  name: "NumeroParImpar",
  computed: {
    parOImpar() {
      var resultado = this.numero;
      if (this.numero%2 == 0) {
        resultado = "<h1 style='color:green'>Es par</h1>";
      } else {
        resultado = "<h1 style='color:red'>Es impar</h1>";
      }
      return resultado;
    },
  },
  methods:{
    metodoParOImpar(){
        if (this.numero%2 == 0) {
        this.html = "<h1 style='color:blue'>Es par</h1>";
      } else {
        this.html = "<h1 style='color:red'>Es impar</h1>";
      }
    }
  },
  data() {
    return {
      numero: 0,
      html: '',
    };
  },
};
</script>

<style>
</style>