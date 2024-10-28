<template>
  <div>
    <h1>Ciclos de vida</h1>
    <button @click="cambiarSaludo()">Cambiar Saludo</button>
    <h2>{{ saludo }}</h2>
  </div>
</template>

<script>

export default {
  name: "CicloVida",
  data (){
    return {
        saludo: 'Hoy es lunes... '
    }
  },
  methods:{
    cambiarSaludo(){
        this.saludo = 'Y mañana es martes... ';
    }
  },
  mounted() {
    console.log("Componente montado");
  },
  unmounted() {
    console.log("Componente destruido");
  },
  created() {
    console.log("Componente creado");
  },
  updated() {
    console.log("Componente modificado");
  },
};
</script>

<style>
</style>