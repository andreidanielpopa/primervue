<template>
  <div>
    <h1>Metodo filters</h1>
  </div>
  <ul>
    <li v-for="num in numeros" :key="num">
        Numero: {{ $filters.getNumeroDoble(num)  }}
    </li>
  </ul>
  <ul>
    <li v-for="name in nombres" :key="name">
        Nombre: {{ $filters.mayuscula(name)  }}
    </li>
  </ul>
</template>

<script>
export default {
    name:'MetodoFilters',
    data(){
        return{
            numeros:[2,6,564,234,32,567,12,76,7],
            nombres: ['Adrian','Manolo','Wajvi','Horse Luis', 'Alfredo', 'Adolfo']
        }
    }
};
</script>

<style>
</style>