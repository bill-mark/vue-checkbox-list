import vueCheckboxList from './vue-checkbox-list.vue'
if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(paykeyboard); }

const  CheckboxList = {
	install (Vue,options){
		Vue.component(vueCheckboxList.name,vueCheckboxList)
	}
}

export default CheckboxList