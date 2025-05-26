<template>
  <div id="home" class="bg-black min-h-screen relative  bg-[url('/images/bg-image.jpg')]">
    <header class="flex items-center justify-between  px-[55px] py-6">
      <div class="flex items-center space-x-6">
        <img src="/images/logo.png" alt="Logo" class="h-[70px]" />
        <span class="text-white text-xl font-bold">Art Modern Design</span>
        <nav class="space-x-10 text-white text-sm uppercase">
          <a
              href="#home"
              class="text-lg relative inline-block overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-gradient-to-r from-white via-white to-white before:bg-[length:200%_auto] before:transition-transform before:duration-500 before:-translate-x-full hover:before:translate-x-0 hover:before:animate-gradient-89"
          >
            Home
          </a>
          <a
              href="#about-us"
              class="text-lg relative inline-block overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-gradient-to-r from-white via-white to-white before:bg-[length:200%_auto] before:transition-transform before:duration-500 before:-translate-x-full hover:before:translate-x-0 hover:before:animate-gradient-89"
          >
            About us
          </a>
          <a
              href="#service"
              class="text-lg relative inline-block overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-gradient-to-r from-white via-white to-white before:bg-[length:200%_auto] before:transition-transform before:duration-500 before:-translate-x-full hover:before:translate-x-0 hover:before:animate-gradient-89"
          >
            Services
          </a>
          <a
              href="#contact-us"
              class="text-lg relative inline-block overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-gradient-to-r from-white via-white to-white before:bg-[length:200%_auto] before:transition-transform before:duration-500 before:-translate-x-full hover:before:translate-x-0 hover:before:animate-gradient-89"
          >
            Contact Us
          </a>
        </nav>
      </div>
      <div class="flex items-center space-x-6">
        <span class="text-white text-2xl">(818) 212 3078</span>
        <button class="bg-[#A03D40] px-10 py-4 text-white hover:bg-[#8F3236] transition">
          Let's Talk
        </button>
      </div>
    </header>
    <div class="flex pt-[100px] px-[55px] ">
      <div class="pb-[230px]">
        <h1 class="text-white text-9xl font-bold max-w-[1699px] w-full">
          Elevate your space with luxury <span class="text-[#A03D40]">furnishings</span>
        </h1>
      </div>
    </div>
    <div class="px-[55px] text-white cursor-pointer flex pb-[45px] justify-between">
      <h1>Follow Us on Social Media</h1>
      <div class="flex items-center gap-3 group">
        <a
            href="https://www.instagram.com/art.moderndesign"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2"
        >
          <i class="fab fa-instagram text-lg transition-colors"></i>
        </a>
        <span>Instagram</span>
      </div>
    </div>
    <div class="flex justify-center px-[55px]">
      <img src="/images/copyright.jpg" alt="">
    </div>
  </div>
  <div class="pt-[120px] text-white min-h-screen bg-[url('/images/bg-2.jpg')]">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 class="text-5xl font-bold leading-snug">
            Premium furniture<br />for elegance &<br />comfort
          </h1>
        </div>
        <div class="space-y-12">
          <div class="group">
            <h2 class="text-5xl font-semibold hover:text-[#A03D40]">Kitchen</h2>
            <p class="text-white mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div class="group">
            <h2 class="text-5xl font-semibold hover:text-[#A03D40]">Living room</h2>
            <p class="text-gray-400 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div class="group">
            <h2 class="text-5xl font-semibold hover:text-[#A03D40]">Bedroom</h2>
            <p class="text-gray-400 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.group:hover i {
  color: #E4405F;
}
</style>
<script setup lang="ts">
</script>