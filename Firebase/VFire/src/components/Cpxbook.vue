<template>
	<div id="login">
		<header class="telaLogin">
			<section class="menuBar">
				<h1 class="logo">Cpxbook</h1>
				<form class="login">
					<input class="inputUser" placeholder="insira seu nome" v-model="name" @keyup.enter="login=true"></input>
					<button class="buttonLogin" @click="login=false,name=''" v-if="login">Log Out</button>
					<button class="buttonLogin" @click="login=true" v-else>Log In</button>
					
				</form>
			</section>
			<section class="profile" v-show="login" v-for="user in selectUser">
				<div class="containerCover">
					<img class="imgCover" :src="user.imagemCover">
				</div>
				<img class="imgProfile" :src="user.profilePhoto">
				<h1 class="userName">{{ user.name }}</h1>
			</section>
		</header>
		
	</div>
</template>
<script>
import ftRomulo from '../assets/RomuloTunala.jpg'
import coverRomulo from '../assets/capa04.jpg'
import ftAnna from '../assets/AnnaLuiza.jpg'
import coverAnna from '../assets/capaAnna.jpg'
import ftCaio from '../assets/CaioFernandes.jpg'
import coverCaio from '../assets/capa03.jpg'
import ftGuilherme from '../assets/GuilhermeCarvalho.jpg'
import coverGuilherme from '../assets/capa02.jpg'
import ftKarolayne from '../assets/KarolayneDaniel.jpg'
import coverKarolayne from '../assets/capa01.jpg'
import ftRenan from '../assets/RenanCarvalho.jpg'
import coverRenan from '../assets/capaRenan.jpg'
import ftMarco from '../assets/MarcoGomes.jpg'
import coverMarco from '../assets/capa05.jpg'
import ftLuiz from '../assets/LuizRafael.jpg'
import coverLuiz from '../assets/capa06.jpg'
import ftGuilhermeMaria from '../assets/GuilhermeMaria.jpg'
import coverGuilhermeMaria from '../assets/capa07.jpeg'

export default{
	name:'TelaLogin',
	data(){
		return{
			login:false,
			name:'',
			users:[
				{
					userName:'romulotunala',
					name:'Rômulo Tunala',
					imagemCover:coverRomulo,
					profilePhoto:ftRomulo
				},
				{
					userName:'alpaula',
					name:'Anna Luiza',
					imagemCover:coverAnna,
					profilePhoto:ftAnna
				},
				{
					userName:'caiofernandes',
					name:'Caio Fernandes',
					imagemCover:coverCaio,
					profilePhoto:ftCaio
				},
				{
					userName:'guistro22',
					name:'Guilherme Carvalho',
					imagemCover:coverGuilherme,
					profilePhoto:ftGuilherme
				},
				{
					userName:'karolldaniel',
					name:'Karolayne Daniel',
					imagemCover:coverKarolayne,
					profilePhoto:ftKarolayne
				},
				{
					userName:'rocrenan',
					name:'Renan Carvalho',
					imagemCover:coverRenan,
					profilePhoto:ftRenan
				},
				{
					userName:'marcogomes276',
					name:'Marco Gomes',
					imagemCover:coverMarco,
					profilePhoto:ftMarco
				},
				{
					userName:'luizrafs',
					name:'Luiz Rafael Neto',
					imagemCover:coverLuiz,
					profilePhoto:ftLuiz
				},
				{
					userName:'guilhermemaria',
					name:'Guilherme Maria',
					imagemCover:coverGuilhermeMaria,
					profilePhoto:ftGuilhermeMaria
				}
			]
		}
	},
	computed:{
		selectUser(){
			const user = this.users.filter(user => user.userName === this.name)

			if(user){
				return user
			}

			return null
		}

	}
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
#login{

}
.telaLogin{
	min-height: 10vh;
}
.menuBar{
	width: 100%;
	min-height: 10vh;

	background-color: #3b5998;
	background-image: linear-gradient(#4e69a2, #3b5998 50%);
	border-bottom: 1px solid #133783;
	
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.logo{
	margin: 20px 10%;
	color: #FFF;
	font-size: 50px;
}
.login{
	margin: 0 10%;
}
.inputUser{
	width: 250px;
	height: 40px;
	padding: 7px;
	font-size: 17px;
}
.buttonLogin{
	min-width: 60px;
	height: 40px;
	padding: auto 15px;
	border: 1px solid #133783;
	background-color: #3b5998;
	color: #fff;
	font-weight: bold;
}
.profile{
	width: 100%;
	height: 65vh;
	position: relative;
	display: flex;
	align-items: flex-end;
}
.containerCover{
	overflow: hidden;
	width: 100%;
	height: 65vh;
	position: absolute;
}
.imgCover{
	width: 100%;
}
.imgProfile{
	width: 20%;
	margin-left: 100px;
	border-radius: 50%;
	position: absolute;
	bottom: -35%;	
}
.userName{
	margin-left: 500px;
	position: absolute;
	bottom: -15%;
	font-size: 35px;
}
</style>