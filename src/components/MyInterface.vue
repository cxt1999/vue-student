<template>
		<h2>List</h2>
		<table>
		<MyStudents v-for="(student,key) in studentList" :key="key" :student="student" @edit="editItem">
		</MyStudents>
		</table>
		<MyAction :editedStudent="editedStudent"></MyAction>
</template>

<script>
import MyStudents from "@/components/MyStudents";
import MyAction from "@/components/MyAction";
import {mapGetters} from "vuex";
import {ref} from 'vue'

export default
{
	name: "MyInterface",
	components: {MyStudents, MyAction},
	computed: mapGetters(['studentList']),
	setup(){
		const editedStudent = ref({});
		const editItem = (student) => {
			editedStudent.value = {
				id: student.id,
				name: student.name,
				class: student.class,
			}
		};
		return {editedStudent, editItem}
	}
}
</script>

<style>
h2 {
	font-size: 22px;
	color: #a52a2a;
	font-family: "Times New Roman", Times, serif;
}
</style>
