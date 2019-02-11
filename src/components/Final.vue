<template>
	<section class="final">
		<div class="final-content">
			<div class="field is-grouped">
				<div class="control is-expanded">
					<input class="input" type="text" placeholder="DEIXE SEU E-MAIL E RECEBA O PLANO COMERCIAL">
				</div>
				<div class="control">
					<a class="button is-dark is-uppercase">
						Clique Aqui!
					</a>
				</div>
			</div>

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
						<p class="title is-1 has-text-left">Fale com a gente no WhatsApp!</p>
						<a class="button is-success is-large is-rounded">
							+55(84)99406-0202
						</a>
					</div>
				</div>
			</div>

			<div class="copyright">
				<p class="has-text-white">2018. All Rights Reserved. For People</p>
			</div>
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
						end1: "Av. Faria Lima, 4055 - Itaim Bibi",
						end2: "CEP: 04538-133 | São Paulo/SP",
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
		padding: 48px 128px;
	}

	.field {
		border: 4px solid #fff;
		border-radius: 8px;
		padding: 48px;
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
</style>