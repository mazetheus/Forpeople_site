<template>
	<section class="produtos" id="solucoes">
		<div class="columns is-multiline is-mobile produtos-content is-vcentered is-marginless" style="background: #ffcd00">
			<div class="column is-3-desktop is-full-mobile" style="z-index: 1 ; padding: 2rem">
				<p class="title produtos-title has-text-black-bis has-text-left-desktop has-text-left-mobile" style="z-index: 2">Conheça as nossas soluções:</p>
			</div>
			<div class="column is-full-mobile slide-white">
				<carousel-3d :display="3" :controls-visible="true" dir="ltr" :width="500" :height="500" :space="650">
					<slide v-for="(slide, i) in slides" :index="i">
						<div class="" style="height: 100%;" slot-scope="{index, isCurrent}">
							<div class="columns is-mobile is-marginless is-vcentered" :style="{opacity: (isCurrent ? '1' : '0.35'), height: '100%'}">
								<div class="column is-half">
									<figure :class="'image'">
										<img :src="require('@/assets/produtos/'+slide.src)">
									</figure>
								</div>
								<div class="column is-half" v-if="isCurrent">
									<div class="is-vertical-centered">
										<div>
											<p class="titleCarousel has-text-left" style="color: #ffcd00;">{{slide.title}}</p>
											<p class="textCarousel has-text-left">{{slide.text}}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</slide>
				</carousel-3d>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	import {Carousel3d, Slide} from 'vue-carousel-3d';
	export default {
		components: {
			Carousel3d,
			Slide
		},
		data() {
			return {
				slides: [
					{
						title: "Totem Digital",
						src: 'totem.png',
						text: 'Permite um amplo alcance dentro do Ponto de Venda (PDV) e viabiliza uma mídia segmentada para cada departamento/setor ou até mesmo outras unidades e franquias de empresas.'
					},
					{
						title: "Box Digital",
						src: 'rasp.png',
						text: 'O box digital é o software desenvolvido para realizar a comunicação remota entre o totem e a ForPeople. Ideal para empresas que já possuem sistema de TV e que buscam uma solução viável e criativa de inovar.'
					},
					{
						title: "Expositor ForPeople",
						src: 'expositor.png',
						text: 'Monitor com o ForPeople box, pode ser instalado na vitrine da empresa, corredor ou qualquer outro locar que a informação possa ser vista.'
					},
					{
						title: "Video Wall",
						src: 'wall.png',
						text: 'Telas conectadas e mapeadas para exibirem uma informação mais completa e dinâmica.'
					},
				]
			}
		}
	}
</script>

<style type="text/css">

	.slide-white{
		background: white;
	}
	.produtos-content {
		/*padding-left: 128px;*/
		padding-left: 0.8rem;
	}

	.columns {
		transition: opacity 1s ease;
	}

	.image {
		transition: width 1s ease, height 1s ease;
	}

	.produtos-title {
		padding-left: 0px;
		margin-right: 0px;
	}

	.carousel-3d-slide {
		border: none !important;
		border-style: none !important;
		background-color: white !important;
		background: white !important;
		padding-right: 32px;
	}

	.carousel-3d-container {
		padding-right: 15%;
	}

	.is-vertical-centered {
		display: flex;
		align-self: center;
	}

	.next {
		background: #ffcd00;
		border-radius: 32px;
		line-height: 40px !important;
		text-align: center !important;
	}

	.prev {
		display: none;
	}

	@media (max-width: 768px) {

		.produtos-content {
			padding: 0px;
			margin-left: 0;
		}

		.produtos-title {
			padding: 0px;
			margin-left: 0;
			font-size: 20px;
		}
		.titleCarousel{
			font-size: 20px;
		}

		.textCarousel{
			font-size: 15px;
		}
	}

</style>
