<template>
	<section class="clientes">
		<div class="tile is-ancestor is-vcentered">
			<div class="tile is-3 is-parent">
				<div class="tile is-child is-vertical-centered">
						<p class="title is-1 has-text-left-desktop has-text-centered-desktop">Clientes:</p>
				</div>
			</div>
			<div class="tile is-parent">
				<div class="tile is-child">
					<div class="columns is-centered is-multiline is-variable is-mobile">
						<div class="column is-3-desktop is-4-mobile" v-for="cliente in clientes">
							<figure class="image is-128x128">
								<img :src="require('@/assets/clientes/'+cliente+'.png')" />
							</figure>
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
		padding: 32px 128px;
	}

	.is-vertical-centered {
		display: flex;
		align-self: center;
	}

	@media (max-width: 768px) {
		.clientes {
			padding: 32px 64px;
		}
	}
</style>