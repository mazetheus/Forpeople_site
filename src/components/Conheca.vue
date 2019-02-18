<template>
	<section class="conheca container">
		<div class="columns is-vcentered is-variable is-8">
			<div class="column" style="float: center !important ; text-align: center ; ">
				<figure class="image is-vcentered">
					<img src="../assets/totem.png"/>
				</figure>
			</div>
			<div class="column has-text-left">
				<h1 class="title">Nossa motivação é resolver problemas!</h1>
				<p class="content">
					Criamos nossos produtos para ajudar empreendimentos a fomentar vendas dentro do próprio estabelecimento, servindo como um vendedor 2.0, automatizando o processo de informações, permitindo modificações em tempo real e chamando mais atenção para a real necessidade da organização.
				</p>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	@import "../assets/scss/start";

	$title-size: 3.6rem;

	.title {
		padding-right: 2rem;
	}

	.image {
		margin: auto;
		width: 60vh;
		padding: 36px 0px 36px 30px;
	}

	.content {
		padding-top: 0.8rem;
	}

	@media (max-width: 768px) {
		.title {
			text-align: center;
		}

		.image {
			/*padding: 50px 0.75rem;*/
			padding: 0px 0rem;
			float: center;
		}

		.content {
			padding: 0 2.4rem 42px;
		}
	}

	@import "../assets/scss/end";
</style>
