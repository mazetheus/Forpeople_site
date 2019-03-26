<template>
	<section class="sistema has-background-light" id="sistema">
		<div class="tile is-marginless is-ancestor has-background-white">
			<div class="tile is-parent is-4 content-description">
				<div class="tile is-child sis-cont-head">
					<p class="title is-1 has-text-left" style="z-index: 2">Entenda como funciona o nosso sistema:</p>
					<p class="has-text-left content" style="padding-top: 50px">Digamos que você é um diretor comercial ou gerente de uma loja em que há produtos que necessitam desafogar o estoque. <strong>Como dar notoriedade para eles sem gastos exorbitantes em propagandas?</strong></p>
				</div>
			</div>
			<div class="tile is-parent has-background-light tile-master">
				<div class="tile is-child sis-cont-etap">
					<div class="columns is-marginless is-multiline is-variable is-6-desktop is-4-mobile is-mobile">
						<div :class="'column ' + (etapa.flex ? '' : 'is-one-third-desktop is-6-mobile')" v-for="etapa in sistema" :key="etapa.title">
							<p :class="'title'" :style="{width: (etapa.flex ? '40%' : '100%')}">{{etapa.title}}</p>
							<img :src="require('@/assets/'+etapa.img)" :style="{height: (etapa.flex ? '160px' : '96px'), margin: (etapa.flex ? '0px' : '32px 0px')}"/>
							<p :style="{width: (etapa.flex ? '40%' : '100%')}">{{etapa.content}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				sistema: [
				{title: "[08:00]", img: "vistoria.png", content: "Gerente faz vistoria de estoque e percebe a proximidade da validade de alguns produtos"},
				{title: "[08:30]", img: "solicita.png", content: "O gerente solicita as peças promocionais através de nosso sistema de solicitações"},
				{title: "[09:00]", img: "criacao.png", 	content: "Nossa equipe criativa começa o seu processo e reproduz as peças solicitadas"},
				{title: "[09:50]", img: "deploy.png", 	content: "As peças são colocadas no nosso software através da nossa central de TI"},
				{title: "[10:00]", img: "exibir.png", 	content: "O consumidor já poderá adquirir o produto em preço promocional!", flex: true}
				]
			}
		}
	}
</script>

<style lang="scss">
@import '../assets/scss/start';

.sis-cont-head {
	padding: 96px 64px 96px 128px;
}

.sis-cont-etap {
	padding: 96px 32px 96px 96px;
}

.content-description {
	z-index: 1 ;
	margin-right: 0px;
}

.tyle-master {
	padding-left: 50px;
}

@media (max-width: 768px) {
	.sis-cont-head {
		padding: 96px 32px;
	}

	.sis-cont-etap {
		padding: 96px 8px;
	}

	.content-description {
		padding: 2rem;
		margin: 0;
	}

	.tile-master {
		padding-left: 0;
	}
}

@import '../assets/scss/end';
</style>
