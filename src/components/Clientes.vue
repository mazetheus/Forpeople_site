<template>
	<section class="clientes" id="clientes">
		<div class="tile is-ancestor is-vcentered">
			<div class="tile is-3 is-parent">
				<div class="tile is-child is-vertical-centered">
						<p class="title is-1 has-text-left-desktop has-text-centered-desktop" style="white-space: nowrap; font-size: 2.9rem">Clientes:</p>
				</div>
			</div>
			<div class="tile is-parent">
				<div class="tile is-child">
					<div class="columns is-centered is-variable is-mobile">
						<div class="column is-desktop is-mobile">
							<div class="flex-container">
								<div class="flexed-images">
									<img class="flexed-images" :src="require('@/assets/clientes/comjol.jpg')" />
								</div>
								<div class="flexed-images">
									<img class="flexed-images" :src="require('@/assets/clientes/unilever.jpg')" />
								</div>
								<div class="flexed-images">
									<img class="flexed-images" :src="require('@/assets/clientes/multimedical.jpg')" />
								</div>
								<div class="flexed-images">
									<img class="flexed-images" :src="require('@/assets/clientes/favorito.jpg')" />
								</div>
								<div class="flexed-images">
									<img class="flexed-images" :src="require('@/assets/clientes/supershow.jpg')" />
								</div>
								<div class="flexed-images">
									<img class="flexed-images" :src="require('@/assets/clientes/leroymerlin.jpg')" />
								</div>
								<div class="flexed-images">
									<img class="flexed-images" :src="require('@/assets/clientes/ficacomigo.jpg')" />
								</div>
								<div class="flexed-images">
									<img class="flexed-images" :src="require('@/assets/clientes/toyota.jpg')" />
								</div>
							</div>
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
				clientes: [
					"comjol",
					"unilever",
					"multimedical",
					"favorito",
					"supershow",
					"leroymerlin",
					"ficacomigo",
					"toyota"
				]
			}
		}
	}
</script>

<style lang="scss">

	.clientes {
		padding: 2rem 4rem;
	}

	.flexed-images{
		color: white;
		text-align: center;
	}

	.flex-container {
		flex-direction: row;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: baseline;
		align-content: center;
	}

	.is-vertical-centered {
		display: flex;
		align-self: center;
	}

	@media (max-width: 768px) {
		.flexed-images{
			width: 50%;
		}
		.clientes {
			padding-top: 3rem;
		}
	}
</style>
