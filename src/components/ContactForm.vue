<template>
  <div class="contact-form w-full">
	  <form v-if="form" class="w-full">
		  <div v-for="(item,i) in form.formItems" :key="i" class="">
	  		<component :is="formFields[`${item.fieldType}Field`]" :field="item" @update:field="FieldUpdated" :default_value="submission[item.name]"/>
			<div v-if="messages[item.name]" class="text-red" >
				<p v-for="(messages,i) in messages[item.name]" :key="i">
					{{messages}}
				</p>
			</div>
		  </div>
		  <div class="flex flex-col">
            <button @click="Submit" class="my-4 px-2 rounded md:px-4 md:py-2 bg-white text-black">
                {{form.submitText}}
            </button>
			<p class="my-6">
				{{form_message}}
			</p>
		  </div>
	  </form>
  </div>
</template>

<script>
import Fields from '../fetchforms'
import axios from 'axios'
import { ref,onMounted,markRaw } from 'vue'
import Validation from '../fetchforms/validation'
export default {
  name: 'ContactForm',
  data: () => {
	return {
		submission: {},
		messages: {},
		form_message: '',
	}
  },
  methods: {
	  resetForm() {
		  for(let i in this.submission) {
			  this.submission[i] = ''
		  }
	  },
	  Validate() {
		  this.messages = {}
		  let valid = true
		  for(let i in this.form.formItems) {
			if(this.form.formItems[i].validation) this.messages[this.form.formItems[i].name] = Validation.validate(this.form.formItems[i].validation,this.submission[this.form.formItems[i].name])
		 	if(this.messages[this.form.formItems[i].name].length) valid = false 
		  }
		  return valid
	  },
	  Submit(e) {
		  e.preventDefault()
		  if(!this.Validate()) return
		  axios.post(`https://api.fetchforms.io/v1/form/57a3e57e-ee24-4aea-93a8-e45a50cfbb5f/submission`,{submission:this.submission},{
			  headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer 311f11a5645be331ec164f58fc4abfda`
			  },
		  })
		  .then(()=>{
			  this.form_message = "Success! Form submitted."
			  this.resetForm()
		  })
		  .catch(err => {
			  if(err.response && err.response.data) this.form_message = err.response.data.error
		  })
	  },
	  FieldUpdated(item) {
		this.submission[item.name] = item.value
	  },
  },
  props: [],
  setup() {
	const form = ref(false)
	const formFields = markRaw(Fields)
	const fetchForm = () => {
		axios.get(`https://api.fetchforms.io/v1/form/57a3e57e-ee24-4aea-93a8-e45a50cfbb5f`,{
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer 311f11a5645be331ec164f58fc4abfda`
			},
		})
		.then(re => {
			form.value = re.data.data
		})
		.catch(err => {
			console.log(err)
		})
	}
	onMounted(()=>{
		fetchForm()
	})
	return {
		form,
		formFields,
		fetchForm
	}
  },
}
</script>

<style scoped>
</style>
