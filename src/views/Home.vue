<template>
  <div class="bg-black text-white font-raleway flex flex-col">  
    <main id="main" class="w-full flex-grow min-h-screen">
      <div class="mr-10 md:mr-24">
        <div class="flex justify-center mt-10">
          <img class="w-16 md:w-36 rounded-full" src="lukesnider.jpeg" alt="Luke Snider " />
        </div>
        <div class="flex flex-col w-full justify-center items-center p-6">
          <h1 class="text-2xl md:text-4xl">
            Luke Snider
          </h1>
          <p>
            Web Developer
          </p>
        </div>
        <div class="slideRight opacity-0 md:my-10 flex justify-center w-full">
          <router-view v-slot="{ Component }">
            <transition name="slideLeft">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </main>
    <footer class="flex h-32 fixed bottom-0 right-0 left-0">
      <div class="absolute social-top right-10 md:right-24"></div>
      <div class="flex w-full justify-end p-6 h-full">
        <div class="z-50 w-full flex items-center justify-end mr-16 md:mr-32 lg:mr-64">
          <a target="_blank" class="mx-2 z-50 social-icon-wrapper flex justify-center items-center " href="https://github.com/lukesnider" aria-label="Go To My Github Profile">
            <img class="social-icon" src="github-white.png"  alt="Github Logo"/>
          </a>
          <!-- <a target="_blank" class="mx-2 z-50 social-icon-wrapper flex justify-center items-center " href="https://twitter.com/lsunkieder" aria-label="Go To My Twitter Profile">
            <img class="social-icon" src="twitter-white.png"  alt="Twitter Logo"/>
          </a> -->
          <a target="_blank" class="mx-2 z-50 social-icon-wrapper flex justify-center items-center " href="https://www.linkedin.com/in/luke-snider-814335255/" aria-label="Go To My Linkedin Profile">
            <img class="social-icon" src="linkedin-white.png"  alt="Linkedin Logo"/>
          </a>
        </div>
      </div>
      <div class="z-40 absolute social-left"></div>
    </footer>
  </div>
</template>

<script>
//transform transition duration-150 ease-in-out hover:scale-125 focus:scale-125
export default {
  name: 'Home',
   setup () {
   },
  components: {
  }
}
</script>

<style>
@keyframes slideright {
    0.0%{
        width: 0px;
    }
    100%{
        width:100%;
    }
}
@keyframes slidedown {
    0.0%{
        height: 0px;
    }
    100%{
        height:100%;
    }
}
@keyframes scaleUp {
    0.0%{
        transform: scale(1);
    }
    70%{
        transform: scale(2);
    }
    90%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(2);
    }
}
@keyframes slideRight {
    0.0%{
        transform: translate(100px,0px);
        opacity: 0;
    }
    100%{
        transform: translate(0px,0px);
        opacity: 1;
    }
}
.slideRight {
  animation: slideRight 3s ease 0s 1 normal forwards;
}
.social-left {
  /* animation: slideright 2.5s ease 0s 1 normal forwards; */
  border-top: solid 3px white;
  left:0;
  bottom: 16%;
}
.social-top {
  /* animation: slidedown 3s ease 0s 1 normal forwards; */
  border-right: solid 3px white;
  top: 0;
}
.social-icon-wrapper {
  width: 25px;
  height: 25px;
}
.social-icon {
  width: 100%;
  /*animation: scaleUp 2s ease 0s 1 normal forwards;*/
}
</style>