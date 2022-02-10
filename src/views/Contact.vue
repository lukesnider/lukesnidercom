<template>
    <div class="flex flex-col justify-start p-4 mt-6">
        <div v-show="!loading_form"  class="flex p-2" >
            <ContactForm />
        </div>
        <div class="flex p-2 my-10 pl-10" >
            <!-- <router-link :to="{path:'/'}" class="before-arrow relative flex items-center">
                Back
                <div class="line"></div>
                <div class="arrow"></div>
            </router-link> -->
        </div>
    </div>
</template>
<script>
import ContactForm from '../components/ContactForm'
//transform transition duration-150 ease-in-out hover:scale-125 focus:scale-125
export default {
  name: 'Contact',
  data: () => {
      return {
          loading_form: false,
      }
  },
   setup () {
   },
  components: {
      ContactForm,
  }
}
</script>

<style>
</style>