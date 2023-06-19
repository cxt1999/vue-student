<template>
			<tr>
				<td>{{ student.id }}</td>
				<td>{{ student.name }}</td>
				<td>{{ student.class }}</td>
				<td>
					<button class='btn' @click="DELETE_STUDENT(student.id)">Delete</button>
				</td>
				<td>
					<button class='btn' @click="editStudent(student)">Edit</button>
				</td>
			</tr>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	name: "MyStudents",
	props: ['student'],
	methods: mapMutations(['DELETE_STUDENT']),
	setup(props, context){
	const editStudent = (student) => {
		context.emit('edit', student)
	};
	return {editStudent}
}}
</script>

<style scoped>
table {
	position: relative;
	border-collapse: collapse;
	border: 2px solid rgba(0, 123, 255, 0.827);
	background-color: #fbe1bb60;
}

td {
	padding: 15px;
	text-align: center;
}

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