<template>
	<section class="final" id="contato">
		<div class="final-content">
			<div class="tile is-ancestor enderecos">
				<div class="tile is-parent is-vertical">
					<div class="is-child has-text-left endereco" v-for="ender in enderecos" v-bind:key>
						<p><strong>{{ender.local}}</strong></p>
						<p class="end1-pad">{{ender.end1}}</p>
						<p v-if="ender.end2">{{ender.end2}}</p>
						<p>{{ender.tel}}</p>
					</div>
				</div>
				<div class="tile is-parent">
					<div class="tile is-child">
						<p class="title is-1 has-text-left">Fale com a gente!</p>
						<h6 class="numero has-text-left">+55 (84) 3301-8085 <a href="https://api.whatsapp.com/send?phone=558433018085" target="_blank"><font-awesome-icon class="fa-icon whats" :icon="['fab', 'whatsapp']"></font-awesome-icon></a></h6>
						<p class="email title is-5 has-text-left"><a href = "mailto: contato@forpeople.com.br"><font-awesome-icon icon="envelope" /></a> &nbsp;&nbsp;  contato@forpeople.com.br</p>
						<p class="download title is-5 has-text-left"><a href="http://www.forpeople.com.br/media/QuemSomos_ForPeople.pdf" target="_blank"><font-awesome-icon icon="file-download" /> &nbsp;&nbsp; Baixe nosso material informativo aqui.</a></p>
					</div>
				</div>
			</div>



		</div>

		<div class="copyright">
			<p class="has-text-white">2019. All Rights Reserved. For People.</p>
		</div>

	</section>

</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				enderecos: [
					{
						local: "Natal",
						end1: "Av. Amintas Barros, 2537 - Loja 06",
						end2: "Lagoa Nova | CEP: 59062-350 | Natal/RN",
						tel: "Tel.: 84.3301-8085"
					},
					{
						local: "São Paulo",
						end1: "Av. Faria Lima, 4055",
						end2: "Itaim Bibi | CEP: 04538-133 | São Paulo/SP",
						tel: "Tel.: 0800 591 2035 (ramal 0654)"
					},
					{
						local: "Nova York",
						end1: "63 Flushing Avenue - Brooklyn NY 11205",
						tel: "pbx: 646-491-9060"
					}
				]
			}
		}
	}
</script>

<style type="text/css" lang="scss">
	.final {
		background: #ffcd00;
		padding: 2rem;
	}

	.whats{
		position:relative;
		width:30px;
		height:30px;
		background-color:#25d366;
		color:#FFF;
		border-radius:50px;
		text-align:center;
		font-size:35px;
		box-shadow: 2px 2px 3px #999;
		z-index:100000;
	}

	.email{
		padding-top: 100px;
	}

	.download{
		padding-left: 5px;
	}

	.whats:hover {
		color: #fff;
		box-shadow: 2px 2px 3px #666;
		background-color: #1ea851;
	}

	.field {
		border: 4px solid #fff;
		border-radius: 12px;
		padding: 32px;
	}

	.numero{
		font-size: 25px;
	}

	.enderecos {
		padding: 32px 0px;
	}

	.endereco {
		padding-bottom: 16px;
	}

	.end1-pad {
		padding-top: 16px;
	}

	.copyright {
		border-top-style: solid;
		border-color: #fff;
		padding-top: 25px;
		border-width: 3px;
		border-radius: 4px;
	}

	@media (max-width: 768px) {
		.form-controller {
			flex-direction: column;
		}

		.form-controller-input {
			margin-bottom: 1rem;
		}

		.copyright {
			margin-top: 70px;
		}
	}
</style>
