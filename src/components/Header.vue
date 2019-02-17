<template>
	<div class="header">
		<figure class="image">
			<img src="../assets/video.jpg"/>
		</figure>
		<nav :class="'navbar ' + (navAffix ? 'is-affix' : '')" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a :class="'navbar-item ' + (navAffix ? 'is-affix' : '')">
					<img src="../assets/logo.png" class=""/>
				</a>
				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarExample" class="navbar-menu">
				<div class="navbar-end">
					<a :class="'navbar-item is-uppercase ' + (active == item.link ? 'is-active ' : '') + item.class + (navAffix ? ' is-affix': '')" v-for="item in menu" :key="'nav-'+item.id" @click="menuClick(item)">{{item.title}}</a>
				</div>
			</div>
		</nav>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			window.onscroll = this.onScroll;
			return {
				menu: [
					{title: 'Quem Somos', link: '#quemsomos', id:'quemsomos'},
					{title: 'Nossas Soluções', link: '#solucoes', id: 'nossassolucoes'},
					{title: 'Sistema for people', link: '#sistema', id: 'sisforpeople'},
					{title: 'Clientes', link: '#clientes', id: 'clientes'},
					{title: 'Contato', link: '#contato', id: 'contato', class: "contato"}
				],
				active: '#quemsomos',
				navAffix: false
			}
		},
		methods: {
			menuClick(item) {
				this.active = item.link;
			},
			onScroll() {
				let offset = window.pageYOffset;
				// console.log(offset); //error
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

//$navbar-height: 5.25rem;
//$navbar-item-img-max-height: 5.75rem;
$navbar-item-color: $white;
$navbar-item-hover-color: #ffcd00;
$navbar-item-hover-background-color: transparent;
$navbar-item-active-color: #ffcd00;
$navbar-item-active-background-color: transparent;

$anim-speed: 0.5s;

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
	margin-left: 14px;
}

.contato.is-affix {
	border-radius: 20px 0px 0px 20px;
}

.contato:hover {
	background: #ffcd00 !important;
	color: $white !important;
}

.contato.is-active {
	background: #d8ae00 !important;
	color: $white !important;
}

@media (max-width: 768px) {
	//$navbar-height: 3.25rem;
	//$navbar-item-img-max-height: 1.75rem;

	.navbar {
		height: 3.25rem !important;
	}

	.navbar-item img {
		max-height: 1.75rem !important;
	}
}

@import '../assets/scss/end';
</style>
