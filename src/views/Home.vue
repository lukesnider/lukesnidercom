<template>
  <div class="bg-black text-white font-raleway min-h-screen flex flex-col">  
    <header>
      <div class="w-full flex justify-center p-6">
        <h1 class="text-4xl">
          Luke Snider
        </h1>
      </div>
    </header>
    <main class="container m-auto flex-grow">
      <div class="flex justify-center">
        <img class="w-36 rounded-full" src="lukesnider.jpeg" alt="Luke Snider " />
      </div>
    </main>
    <footer class="h-32">
      <div class="flex w-full justify-end p-12 h-full">
        <div class="absolute social-top"></div>
        <div class="relative z-50">
          <div class="social-icon-bg bg-black rounded-full absolute"></div>
          <a class="absolute right-0 md:right-16 z-50 social-icon-wrapper flex justify-center items-center transform transition duration-150 ease-in-out hover:scale-125 focus:scale-125" href="https://twitter.com/lsunkieder" aria-label="Go To My Twitter Page">
            <img class="social-icon" src="twitter-white.png"  alt="Twitter Logo"/>
          </a>
        </div>
        <div class="z-40 absolute social-left"></div>
      </div>
    </footer>
  </div>
</template>

<script>

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
    from{
        width: 0px;
    }
    to{
        width:80%;
    }
}
@keyframes slidedown {
    from{
        height: 0px;
    }
    to{
        height:90%;
    }
}
@keyframes scaleUp {
    0.0%{
        transform: scale(1);
    }
    100%{
        transform: scale(2);
    }
}
.social-left {
  animation: slideright 2s ease 0s 1 normal forwards;
  border-top: solid 3px white;
  left:0;
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
  animation: scaleUp 6s ease 0s 1 normal forwards;
}
.social-icon-bg {
  top: -50%;
  right: -140%;
  width:400%;
  height: 250%;
}
</style>