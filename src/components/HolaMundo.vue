<template>
  <div>
    <h1>Mi primera App de Vue, que ilusion</h1>
    <h2>Su nombre es {{ nombre }}</h2>
    <h2>El numero es {{ numero }}</h2>
  </div>
</template>

<script>
export default {
  name: "HolaMundo",
  data() {
    return {
      nombre: "Alumno",
      numero: 14,
      miArray: [],
    };
  },
};
</script>

<style>
h1 {
  color: blue;
}

  @import  './../assets/css/estilos.css';
</style>
