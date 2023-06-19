<template>
		<h2>Action</h2>
		<table>
			<tbody>
			<tr>
				<td>ID</td>
				<td>
					<input v-model="studentInput.id" type="number" placeholder="Id"
					/>
				</td>
			</tr>
			<tr>
				<td>Name</td>
				<td>
					<input v-model="studentInput.name" type="text" placeholder="Name"
					/>
				</td>
			</tr>
			<tr>
				<td>Class</td>
				<td>
					<input v-model="studentInput.class" type="text" placeholder="Class"
					/>
				</td>
			</tr>
			<tr>
				<td colspan="4">
					<button class="btn" @click="ADD_STUDENT(studentInput)">Add</button>
					<button class="btn" @click="Refresh">Refresh</button>
					<button class="btn" @click="CHANGE_STUDENT(studentInput)">Change</button>
				</td>
			</tr>
			</tbody>
		</table>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
import {ref} from 'vue'

export default
{
	name: "MyAction",
	props: ['editedStudent'],

	setup(){
		const studentInput = ref({
			id: '',
			name: '',
			class: '',
		});

		const Refresh = () => {
			studentInput.value.id = '';
			studentInput.value.name = '';
			studentInput.value.class = '';
		};

		return {studentInput, Refresh}
	},

	computed: mapGetters(['studentList']),

	methods: mapMutations(['ADD_STUDENT', 'CHANGE_STUDENT']),

	watch: {
		editedStudent() {
			this.studentInput.id = this.editedStudent.id;
			this.studentInput.class = this.editedStudent.class;
			this.studentInput.name = this.editedStudent.name;
		}
	}
};
</script>

<style scoped>
.btn {
	height: 35px;
	width: 100px;
	background-color: rgba(0, 123, 255, 0.827);
	border-radius: 15px;
	font-weight: 200;
	margin: 10px;
	color: white;
	border: 2px solid brown;
}

.btn:hover {
	background-color: orangered;
}

.btn:active {
	color: brown;
}
</style>