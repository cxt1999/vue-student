import {createStore} from 'vuex'
import studentModule from "@/store/modules/student";

export default createStore(
	{
	modules: {
		studentModule,
	},
}
)
