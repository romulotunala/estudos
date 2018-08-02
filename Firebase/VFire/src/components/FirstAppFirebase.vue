<template>
<div id="appVFire">
	<form>
		<label>Name:</label>
		<input type="text" v-model="name">
		<button @click="submitName()">Add</button>
	</form>
	<div>
		<ul>
			<li v-for="personName in names"
			v-bind:key="personName['.key']">
				<div v-if="!personName.edit">
					<p>{{ personName.name }}</p>
					<button @click="removePerson(personName['.key'])">Remove</button>
					<button @click="setEditPerson(personName['.key'])">Edit</button>
				</div>
				<div v-else>
					<input type="text" v-model="personName.name">
					<button @click="saveEdit(personName)">Save</button>
					<button @click="cancelEdit(personName['.key'])">Cancel</button>
				</div>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
import { namesRef } from '../firebase'

export default{
	data(){
		return{
			name:''
		}
	},
	firebase:{
		names: namesRef
	},
	methods:{
		submitName(){
			namesRef.push({ name: this.name, edit: false})
		},
		removePerson(key){
			namesRef.child(key).remove()
		},
		setEditPerson(key){
			namesRef.child(key).update({edit: true})
		},
		cancelEdit(key){
			namesRef.child(key).update({edit: false})
		},
		saveEdit(person){
			const key = person['.key']
			namesRef.child(key).set({ name: person.name, edit: false})
		}
	}
}
</script>
<style>
	#appVFire{

	}
	h1, h2 {
	  font-weight: normal;
	}
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
	  margin: 0 10px;
	}
	a {
	  color: #42b983;
	}
	button{
		background: transparent;
		border:2px solid #000;
	}
</style>