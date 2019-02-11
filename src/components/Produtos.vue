<template>
	<section class="produtos">
		<div class="columns is-multiline is-mobile produtos-content is-vcentered is-marginless" style="background: #ffcd00;">
			<div class="column is-3-desktop is-full-mobile" style="margin-right: -150px ; z-index: 1">
				<p class="title produtos-title is-1 has-text-black-bis has-text-left-desktop has-text-centered-mobile" style="z-index: 5">Conheça as nossas soluções:</p>
			</div>
			<div class="column is-full-mobile has-background-white">
				<carousel-3d :display="3" :controls-visible="true" dir="ltr" :width="500" :height="500" :space="650">
					<slide v-for="(slide, i) in slides" :index="i">
						<div class="" style="height: 100%;" slot-scope="{index, isCurrent, leftIndex, rightIndex}">
							<div class="columns is-mobile is-marginless is-vcentered" :style="{opacity: (isCurrent ? '1' : '0.35'), height: '100%'}">
								<div class="column is-half">
									<figure :class="'image'">
										<img :src="require('@/assets/produtos/'+slide.src)">
									</figure>
								</div>
								<div class="column is-half has-background-white" v-if="isCurrent">
									<div class="is-vertical-centered">
										<div>
											<p class="title has-text-left" style="color: #ffcd00;">{{slide.title}}</p>
											<p class="has-text-left">{{slide.text}}</p>
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
						text: 'O totem Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Cevadis im ampola pa arma uma pindureta. Mé faiz elementum girarzis, nisi eros vermeio. Delegadis gente finis, bibendum egestas augue arcu ut est.'
					},
					{
						title: "Raspberry",
						src: 'rasp.png',
						text: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Cevadis im ampola pa arma uma pindureta. Mé faiz elementum girarzis, nisi eros vermeio. Delegadis gente finis, bibendum egestas augue arcu ut est.'
					},
					{
						title: "Slide 3",
						src: 'totem.png',
						text: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Cevadis im ampola pa arma uma pindureta. Mé faiz elementum girarzis, nisi eros vermeio. Delegadis gente finis, bibendum egestas augue arcu ut est.'
					}
				]
			}
		}
	}
</script>

<style type="text/css">
	.produtos-content {
		padding-left: 128px;
	}

	.columns {
		transition: opacity 1s ease;
	}

	.image {
		transition: width 1s ease, height 1s ease;
	}

	.produtos-title {
		padding-left: 24px;
	}

	.carousel-3d-slide {
		background: transparent;
		border: none;
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
		}

		.produtos-title {
		 padding: 64px 0px;
		}
	}
	/*.produtos-title {
		padding-left: 96px;
	}*/
</style>
