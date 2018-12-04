import vueCheckboxList from './vue-checkbox-list.vue'

if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(vueCheckboxList); }

const  CheckboxList = {
	install:function (Vue,options) {
		Vue.component(vueCheckboxList.name,vueCheckboxList)
	}
}


export default vueCheckboxList