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
          <div class="z-50">
            <div class="social-icon-bg bg-black absolute right-0 bottom-0 h-32 w-32"></div>
            <a class="absolute right-16 z-50 social-icon-wrapper flex justify-center items-center " href="https://twitter.com/lsunkieder" aria-label="Go To My Twitter Page">
              <img class="social-icon" src="twitter-white.png"  alt="Twitter Logo"/>
            </a>
          </div>
          <div class="z-40 absolute social-left"></div>
        </div>
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
  .social-left {
    animation: slideright 3s ease 0s 1 normal forwards;
    border-top: solid 3px white;
    left:0;
  }
  .social-top {
    animation: slidedown 3s ease 0s 1 normal forwards;
    border-right: solid 3px white;
    top: 0;
  }
  .social-icon-wrapper {
    width: 25px;
    height: 25px;
  }
  .social-icon {
    width: 100%;
    animation: scaleUp 2s ease 0s 1 normal forwards;
  }
  </style>