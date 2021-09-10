<template>
  <div class="bg-black text-white font-raleway md:min-h-screen flex flex-col">  
    <main class="container m-auto flex-grow">
      <div class="flex justify-center mt-10">
        <img class="w-36 rounded-full" src="lukesnider.jpeg" alt="Luke Snider " />
      </div>
      <div class="flex flex-col w-full justify-center items-center p-6">
        <h1 class="text-4xl">
          Luke Snider
        </h1>
        <p>
          Web Developer
        </p>
      </div>
      <div class="slideRight opacity-0 my-10 flex justify-center">
        <transition name="slideLeft">
          <router-view></router-view>
        </transition>
      </div>
    </main>
    <footer class="flex h-32">
      <div class="absolute social-top"></div>
      <div class="h-10 flex w-full justify-end p-6 md:h-full">
        <div class="z-50 w-full flex items-center justify-end mr-16 md:mr-32 lg:mr-64">
          <a target="_blank" class="mx-2 z-50 social-icon-wrapper flex justify-center items-center " href="https://twitter.com/lsunkieder" aria-label="Go To My Twitter Page">
            <img class="social-icon" src="twitter-white.png"  alt="Twitter Logo"/>
          </a>
          <a target="_blank" class="mx-2 z-50 social-icon-wrapper flex justify-center items-center " href="https://www.linkedin.com/in/luke-snider-08262871" aria-label="Go To My Linkedin Page">
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
  animation: slideright 2.5s ease 0s 1 normal forwards;
  border-top: solid 3px white;
  left:0;
  bottom: 16%;
}
.social-top {
  animation: slidedown 3s ease 0s 1 normal forwards;
  border-right: solid 3px white;
  top: 0;
  right: 12%;
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