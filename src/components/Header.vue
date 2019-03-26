<template>
	<div class="header" id="header">
		<video controls class=header-video>
			<source src="@/assets/videos/For_People_Video.mp4"/>	
		</video>
		<nav :class="'navbar ' + (navAffix ? 'is-affix' : '')" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a :class="'navbar-item ' + (navAffix ? 'is-affix' : '')" v-scroll-to="'#header'">
					<img src="../assets/logo.png" class=""/>
				</a>
				    <a class="navbar-burger burger is-black" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarItens" class="navbar-menu">
				<div class="navbar-end">
					<a :class="'navbar-item is-uppercase ' + (active == item.to ? 'is-active ' : '') + item.class" v-for="item in menu" :key="'nav-'+item.id" v-scroll-to="item.to">{{item.title}}</a>
				</div>
			</div>
		</nav>
	</div>

</template>

<script type="text/javascript">
//Itens do menu
	export default {
		data() {
			window.onscroll = this.onScroll;
			return {
				menu: [
					{title: 'Quem Somos', to: '#quemsomos', id:'quemsomos'},
					{title: 'Nossas Soluções', to: '#solucoes', id: 'solucoes'},
					{title: 'Sistema for people', to: '#sistema', id: 'sisforpeople'},
					{title: 'Clientes', to: '#clientes', id: 'clientes'},
					{title: 'Contato', to: '#contato', id: 'contato', class: "contato"}
				],
				navAffix: false
			}
		},

		// To make burguer menu open
		

		methods: {
			menuClick(item) {
				this.active = item.to;
			},
			onScroll() {
				let offset = window.pageYOffset;
				if (offset > 50) {
					this.navAffix = true;
				} else {
					this.navAffix = false;
				}
			}
		}
	}

</script>

<style lang="scss" scoped>
	@import '../assets/scss/start';
	@import '~bulma';

	$navbar-item-color: $white;
	$navbar-item-hover-color: #ffdd22;
	$navbar-item-hover-background-color: transparent;
	$navbar-item-active-color: #ffcd00;
	$navbar-item-active-background-color: black;
	$navbar-dropdown-background-color: $black;
	$navbar-dropdown-item-hover-background-color: $blue;

	$anim-speed: 0.4s;

	.header-video {
        width:100%;
		height: auto;
	}

	.navbar {
		height: 3.75rem !important;
		background: transparent !important;
		position: absolute !important;
		top: 50px;
		width: 80%;
		margin: 0 10%;
		transition: width $anim-speed ease,
								background $anim-speed ease,
								margin-left $anim-speed ease;
	}

	.navbar-item img {
		max-height: 5.75rem !important;
		transition: max-height $anim-speed ease;
	}

	.navbar.is-affix {
		background: $black !important;
		height: 2.75rem !important;
		position: fixed !important;
		top: 0px;
		width: 100%;
		margin-left: 0;
		transition: width $anim-speed ease,
								background $anim-speed ease,
								margin-left $anim-speed ease;
	}

	.navbar-item.is-affix img {
		max-height: 2.25rem !important;
	}

	.contato {
		background: #ffcd00;
		color: $black !important;
		border-radius: 8px;
		margin-left: 0px;
	}

	.contato.is-affix {
		border-radius: 20px 0px 0px 20px;
	}

	.contato:hover {
		background: #ffdd22 !important;
		color: $white !important;
	}

	.contato.is-active {
		background: #ffcd00 !important;
		color: $white !important;
	}

	@media (max-width: 768px) {

		$navbar-item-color: $black;

		.navbar {
			height: 3rem !important;
			position: sticky;
		}

		.navbar-item img {
			max-height: 1.75rem !important;
		}
		.navbar-item{
			color: black !important;
		}
		
	}

	@import '../assets/scss/end';
</style>
