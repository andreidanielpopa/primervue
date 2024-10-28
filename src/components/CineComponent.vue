<template>
  <div>
    <h1>CineComponent</h1>
    <img src="./../assets/images/cinema.jpg" alt="" />
    <label for="">Introduzca un numero</label>
    <input type="text" v-model="numero">
    <h2 v-if="numero > 0" style="color: green;">Positivo</h2>
    <h2 v-else-if="numero < 0" style="color: red;">Negativo</h2>
    <h2 v-else style="color: blue;">Cero</h2>
  </div>
</template>
  
  <script>
export default {
  name: "CineComponent"
};
</script>
  
  <style>
h1 {
  color: blue;
}
@import "./../assets/css/estilos.css";
</style>
  