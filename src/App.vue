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
      <!-- <a href="https://api.whatsapp.com/send?phone=5584994063182" @click="clickWpp()" class="float-wpp mobile" target="_blank">
        <font-awesome-icon class="my-float-wp" :icon="['fab', 'whatsapp']" size="lg"></font-awesome-icon>
      </a> -->
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
  },
  methods: {
      clickWpp() {
        this.$ga.event({
          eventCategory: 'Social',
          eventAction: 'click',
          eventLabel: 'Whatsapp'
        });
      }
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

.float-wpp{
  position:fixed;
  width:40px;
  height:40px;
  bottom: 100px;
  right:10px;
  background-color:#25d366;
  color:#fff;
  border-radius:50px; 
  font-size: 24px;
  text-align:center;
  box-shadow: 18px 31px 61px 0px rgba(0,0,0,0.43);
  z-index:100000;
}

.mobile{
  display: none;
}

.float-wpp:hover {
  color: #fff;
  opacity: 1;
  box-shadow: 2px 2px 3px #666;
}

.float-wpp:hover {
  background-color: #1ea851;
}

.my-float-wp{
  margin-top:4px;
  margin-left: 1px;
}

@media (max-width: 576px) {
  .mobile{
    display:block;
  }
}

</style>
