<template>
    <div class="flex flex-col justify-start p-4 mt-6">
        <!--
        <div class="flex p-2" >
            <h2 class="transform transition duration-500 hover:scale-110">
            <a href="#">- Why Supabase?</a>
            </h2>
        </div>
        <div class="flex p-2" >
            <h2 class="transform transition duration-500 hover:scale-110">
            <a href="#">- Why Supabase?</a>
            </h2>
        </div>
        -->
        <div class="flex p-2 my-10 pl-10" >
            <button @click="Contact" class="px-4 py-2 bg-white text-black">
                Contact
            </button>
        </div>
        <!--
        <div class="flex p-2 my-10 pl-10" >
            <router-link :to="{path:'/contact'}" class="after-arrow relative flex items-center">
                Contact
                <div class="line"></div>
                <div class="arrow"></div>
            </router-link>
        </div>
        -->
    </div>
</template>
<script>
//transform transition duration-150 ease-in-out hover:scale-125 focus:scale-125
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