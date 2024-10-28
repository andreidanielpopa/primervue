<template>
  <div>
    <h1>Directivas</h1>
    <h2>
      {{ $data }}
    </h2>
    <label for="">Introduzca un numero</label>
    <input type="number" v-model="numero" />
    <h2 v-if="numero > 0" style="color: green">Positivo</h2>
    <h2 v-else-if="numero < 0" style="color: red">Negativo</h2>
    <h2 v-else style="color: blue">Cero</h2>
    <ul v-if="series.length > 0">
        <li v-for="serie in series" :key="serie">
            {{ serie }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      numero: 0,
      nombre: "Alumno",
      edad: 25,
      series: [
        "The wire",
        "Suits",
        "House of the dragon",
        "The Boys",
        "One piece",
      ],
    };
  },
};
</script>