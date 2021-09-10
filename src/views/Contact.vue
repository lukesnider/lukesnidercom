<template>
    <div class="flex flex-col justify-start p-4 mt-6">
        <div class="flex p-2" >
            
        </div>
        <div class="flex p-2 my-10 pl-10" >
            <router-link :to="{path:'/'}" class="before-arrow relative flex items-center">
                Back
                <div class="line"></div>
                <div class="arrow"></div>
            </router-link>
        </div>
    </div>
</template>
<script>
//transform transition duration-150 ease-in-out hover:scale-125 focus:scale-125
export default {
  name: 'Contact',
   setup () {
   },
  components: {
  }
}
</script>

<style>
</style>