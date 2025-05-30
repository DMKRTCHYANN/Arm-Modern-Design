<template>
  <div class="cross-flicking-container">
    <div class="flex justify-between transition-all duration-500 text-white lg:px-[55px] px-[16px]">
      <div class="flex flex-col">
        <p class="text-xs leading-[18px] font-bold uppercase tracking-widest mb-1.5">{{ images[currentIndex].title }}</p>
        <p class="pb-[30px] font-bold lg:text-5xl text-[26px]">{{ images[currentIndex].description }}</p>
      </div>
      <div class=" pb-[30px] text-gray-400 flex items-end  font-bold lg:text-6xl text-[26px]">
        {{ images[currentIndex].place }}
      </div>
    </div>
    <Flicking
        ref="verticalFlicking"
        class="flicking-viewport"
        :options="{ horizontal: false, align: 'center' }"
        @changed="handleChange"
    >
      <div class="flicking-panel" v-for="(image, index) in images" :key="index">
        <img :src="image.src" class="w-full lg:h-full h-[300px] object-contain" />
      </div>
    </Flicking>
    <div class="content-container">
      <transition name="fade" mode="out-in">
        <div :key="currentIndex" class="content">
          <p class="text-white text-lg">{{ images[currentIndex].content }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import {AutoPlay} from "@egjs/flicking-plugins";

const plugins = [new AutoPlay({duration: 2000, direction: "NEXT", stopOnHover: false})];

const verticalFlicking = ref(null);
const currentIndex = ref(0);

const images = ref([
  {
    src: "/images/flicking-img-3.jpg",
    title: "Living room",
    description: "Dark blue serenity",
    place: "01",
  },
  {
    src: "/images/flicking-img-2.jpg",
    title: "Kitchen",
    description: "Warm stone",
    place: "02",
  },
  {
    src: "/images/flicking-img-1.jpg",
    title: "Bedroom",
    description: "Welcoming beige",
    place: "03",
  },
]);

const handleChange = (e) => {
  console.log('change');
  currentIndex.value = e.index;
};
</script>

<style scoped>
.cross-flicking-container {
  display: flex;
  flex-direction: column;
  background-color: #141313;
}

.flicking-viewport {
  width: 100%;
  height: 750px;
  border: none;
  outline: none;
  overflow: hidden;
}

.flicking-panel {
  width: 100%;
  height: 750px;
}

img {
  width: 100%;
  object-fit: cover;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

@media (max-width: 1024px) {
  .flicking-viewport{
    height: 300px;
  }
  .flicking-panel{
    height: 300px;
  }
}
</style>