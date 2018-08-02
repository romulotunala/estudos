<template>
<div id="signUpApp">
	<section class="loginArea">
		<h1 class="logo">Cpxbook</h1>
		<form class="loginForm">
			<label class="loginForm__label">Nome
				<input class="loginForm__input" type="text" v-model="firstName" placeholder="username">
			</label>

			<label class="loginForm__label">Sobrenome
				<input class="loginForm__input" type="text" v-model="lastName" placeholder="username">
			</label>

			<label class="loginForm__label">Photo
				<div class="loginForm__input loginForm__input--fileContainer">
					<div class="loginForm__input--btn">
						<span>escolher arquivo</span> 
						<input class="loginForm__input--upload" id="fileAttachment" type="file" placeholder="Test">
					</div>
					<input class="urlFile" id="urlFile" type="text" readonly name="" placeholder="Maximum file size is 200MB">
				</div>
				<!-- @change="onFileSelected" -->
			</label>

			<label class="loginForm__label">Cidade
				<input class="loginForm__input" type="text" v-model="city" placeholder="username">
			</label>

			<label class="loginForm__label">Password
				<input class="loginForm__input" type="password" v-model="password" placeholder="password">
			</label>

			<button class="loginForm__button" @click="submitData()">Sign In</button>
		</form>
		<!-- <a class="linkJoin" href="#/Login">Sing Up Cpxbook</a> -->
	</section>
</div>
</template>
<script>
import axios from 'axios'
import { cpxbook } from '../firebase'
import { stg } from '../firebase'

export default{
	name:'SignUp',
	data(){
		return{
			firstName:'',
			lastName:'',
			city:'',
			password:'',
			uploaderPhoto:''
		}
	},
	firebase:{
		names: cpxbook, stg
	},
	watch: {

	},
	methods:{
		uploadPhoto(e){
			let file = e.target.files[0];
			let storageRef = stg.ref(file.name);

			storageRef.put(file);
			document.getElementById('urlFile').value = document.getElementById('fileAttachment').value
		},
		cleanForm(){
			this.firstName = '';
			this.lastName = '';
			this.city = '';
			this.password = '';
		},
		submitData(){
			cpxbook.push({
				firstName: this.firstName,
				lastName: this.lastName,
				city: this.city, 
				password: this.password, 
				edit: false
			});
			this.uploadPhoto();
			console.log('cpxbook', cpxbook)
			this.cleanForm();
		}
	}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
#signUpApp{
	width: 100%;
	height: 100vh;
	background: #eee;
	background-image: linear-gradient(-45deg, #e3e3e3, #eee 50%);
	display: flex;
	justify-content: center;
	align-items: center;
}
h1, input, label,button, a, span{
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	color:#fff;
}

.loginArea{
	width: 30%;
	min-width: 400px;
	min-height: 30%;
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
	min-width: 50%;
	margin:10px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	/*background: red;*/
}
.loginForm__label{
	width: 100%;
	padding: 5px;
	display: flex;
	justify-content: space-between;
}
.loginForm__input{
	width: 280px;
	padding: 3px;
	margin-left:10px;
	color:#000;
}
.loginForm__input--fileContainer{
	padding: 0;
	display: flex;
	justify-content: flex-end;
}
.loginForm__input--btn{
	width: 35%;
	padding: 5px;

	/*border-radius: 2px;*/
	background: linear-gradient(#67ae55, #578843);
    background-color: #69a74e;
    box-shadow: inset 0 1px 1px #a4e388;
    border-color: #3b6e22 #3b6e22 #2c5115;
    
    font-size: 10px;
    font-weight: 400;
    /*vertical-align: middle;*/

	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}
.loginForm__input--upload{
	position: absolute;
	top:0;
	left: 0;
	display: none;
}
.urlFile{
	width: 65%;
	padding: 3px;
	color: #000;
	display: inline-block;
}
.loginForm__button{
	width: 100px;
	padding: 10px;
	margin:10px;
	margin-bottom: 30px;
	background: #293e6a;
	border:none;
	border-radius: 4px;
	font-size: 17px;

	align-self: center;
}
.linkJoin{
	position: absolute;
	bottom: 20px;
}
</style>