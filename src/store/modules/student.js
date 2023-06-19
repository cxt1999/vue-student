const studentModule = {
	state: {
		studentList: [{
			id: 1,
			name: "a",
			class: "Software Engineer"
		},
			{
				id: 2,
				name: "b",
				class: "Business Analyst"
			},
			{
				id: 3,
				name: "c",
				class: "Data Scientist"
			}],
	},

	getters: {
		studentList: state => state.studentList,
	},

	mutations: {
		ADD_STUDENT(state, student)
		{
			const newStudent = {
				id: student.id,
				name: student.name,
				class: student.class
			};
			state.studentList.push(newStudent);
		},

		DELETE_STUDENT(state, id) {
			for (let i = 0; i < state.studentList.length; i++) {
				if (state.studentList[i].id === id)
					state.studentList.splice(i, 1);
			}
		},

		CHANGE_STUDENT(state, student) {
			for (let i = 0; i < state.studentList.length; i++) {
				if (state.studentList[i].id === student.id) {
					state.studentList[i].name = student.name;
					state.studentList[i].class = student.class;
				}
			}
		},
	}
};

export default studentModule;