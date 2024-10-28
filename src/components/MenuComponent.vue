<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Home |</router-link></li>
      <li><router-link to="/cinema"> Cine |</router-link></li>
      <li><router-link to="/musica"> Musica |</router-link></li>
      <li><router-link to="/ciclo"> Ciclo |</router-link></li>
      <li><router-link to="/directivas"> Directivas |</router-link></li>
      <li><router-link to="/propiedad"> Propiedad Conmutada |</router-link></li>
      <li><router-link to="/parimpar"> Par o impar | </router-link></li>
      <li><router-link to="/filters"> Metodo filters </router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent"
};
</script>

<style>
ul#menu li {
  display: inline;
}
</style>