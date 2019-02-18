<template>
	<section class="investimento">
		<div class="pad" style="background-color: rgba(70, 70, 70, 0.94);">
			<div class="columns is-marginless investimentos is-variable is-8">
				<div class="column" v-for="num in numeros">
					<h1 class="title has-text-left has-text-white is-4">{{num.title}}</h1>
					<p class="subtitle has-text-left has-text-white is-6">{{num.content}}</p>
				</div>
			</div>
		</div>
		<div class="pad" style="background-color: rgba(250, 205, 0, 0.9);">
			<div class="columns is-marginless investimentos is-variable is-8">
				<div class="column" v-for="met in metricas">
					<h1 class="title has-text-left is-uppercase is-4">{{met.title}}</h1>
					<p class="subtitle has-text-left is-6">{{met.content}}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				numeros: [
					{title: "85%", content: "das decisões de compra são feitas no ponto-de-venda (PDV)"},
					{title: "22%", content: "das vendas podem ser aumentadas com anúncio de preços promocionais"},
					{title: "até 15%", content: "de aumento no volume de vendas com uso de nossos produtos"},
					{title: "10%", content: "das vendas são aumentadas com anúncios de branding"}
				],
				metricas: [
					{title: "segmentação", content: "com interesse na região e padrões de compra do cliente"},
					{title: "economia", content: "em peças publicitárias impressas e em distribuição"},
					{title: "dinamismo", content: "com o controle da ferramenta 100% via internet"},
					{title: "qualidade", content: "da exibição dos anúncios superior à mídia"}
				]
			}
		}
	}
</script>

<style lang="scss">
	.investimento {
		background-image: url('../assets/invest_bg.jpg');
		background-size: cover;
	}

	.investimentos {
		padding: 96px 0px;
	}

	.pad {
		padding: 2rem;
	}
</style>
