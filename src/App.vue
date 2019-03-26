<template>
  <div id="app">
    <Header></Header>
      <conheca></conheca>
      <produtos></produtos>
      <investimento></investimento>
      <sistema></sistema>
      <missao></missao>
      <clientes></clientes>
      <Final></Final>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Conheca from './components/Conheca.vue'
import Produtos from './components/Produtos.vue'
import Investimento from './components/Investimento.vue'
import Sistema from './components/Sistema.vue'
import Missao from './components/Missao.vue'
import Clientes from './components/Clientes.vue'
import Final from './components/Final.vue'

export default {
  name: 'app',
  components: {
    Header,
    Conheca,
    Produtos,
    Investimento,
    Sistema,
    Missao,
    Clientes,
    Final
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans');

#app {
  font-family: 'Noto Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
