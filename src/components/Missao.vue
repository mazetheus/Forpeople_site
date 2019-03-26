<template>
	<section class="missao" id="missao">
		<div class="columns is-marginless is-variable is -8">
			<div :class="'column is-one-third missao-content'" :style="{backgroundColor: (missao.center ? '#ffcd00' : ''), color: (missao.center ? '#555' : '#fff')}" v-for="missao in missoes">
				<p :class="'title has-text-left is-uppercase is-4'" :style="{color: (missao.center ? '#555' : '#fff')}">{{missao.title}}</p>
				<p class="has-text-left">{{missao.content}}</p>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				missoes: [
					{title: 'valores', content: 'Agilidade, comprometimento em resolução de problemas e ética.'},
					{title: 'visão corporativa', content: 'Produzir soluções de mídias que sejam contemporâneas às necessidades de vendas.', center: true},
					{title: 'missão', content: 'Entregas aos nossos clientes uma solução de comunicação interna de forma instantânea.'}
				]
			}
		}
	}
</script>

<style lang="scss">
	.missao {
		background: #848484;
		padding: 0px 72px ;
	}

	.missao-content {
		padding-top: 48px !important;
		padding-bottom: 48px !important;
	}

	@media (max-width: 768px) {
		.missao {
			padding: 0px 0px;
		}
	}
</style>
