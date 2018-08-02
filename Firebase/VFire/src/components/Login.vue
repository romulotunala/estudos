<template>
<div id="loginApp">
	<section class="loginArea">
		<h1 class="logo">Cpxbook</h1>
		<form class="loginForm">
			<!-- <label class="loginForm__label">Username</label> -->
			<input class="loginForm__input" type="text" placeholder="username">
			<!-- <label class="loginForm__label">Password</label> -->
			<input class="loginForm__input" type="password" placeholder="password">
			<button class="loginForm__button">Log in</button>
		</form>
		<!-- <a class="linkJoin" href="#/Login">Sing Up Cpxbook</a> -->
		<router-link class="linkJoin" to="sign-up">Sing Up Cpxbook</router-link>
	</section>
</div>
</template>
<script>
	
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
#loginApp{
	width: 100%;
	height: 100vh;
	background: #eee;
	background-image: linear-gradient(-45deg, #e3e3e3, #eee 50%);
	display: flex;
	justify-content: center;
	align-items: center;
}
h1, input, label,button, a{
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
}
.loginArea{
	width: 20%;
	height: 30%;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px #293e6a;

	background-color: #3b5998;
	background-image: linear-gradient(#4e69a2, #3b5998 50%);
	
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
}
.logo{
	/*margin: 20px 10%;*/
	color: #FFF;
	font-size: 60px;

}
.loginForm{
	width: 50%;
	margin:10px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.loginForm__label{
	/*display: block;*/
}
.loginForm__input{
	max-width: 300px;
	padding: 3px;
	margin:5px;
}
.loginForm__button{
	width: 100px;
	padding: 10px;
	margin:10px;
	background: #293e6a;
	border:none;
	border-radius: 4px;
	color:#fff;
	font-size: 17px;
}
.linkJoin{
	position: absolute;
	bottom: 20px;
	color:#fff;
}
</style>