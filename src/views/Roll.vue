<template>
    <div class="flex flex-col justify-start p-2">
        <div class="flex p-2 my-10" >
            <button title="Contact me via sniderwebdev@gmail.com" @click="Contact" class="px-2 rounded md:px-4 md:py-2 bg-white text-black">
                Contact
            </button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Roll',
   setup () {
   },
   methods: {
       Contact() {
            window.open('mailto:sniderwebdev@gmail.com?subject=Contact');
       },
   },
  components: {
  }
}
</script>

<style>
</style>