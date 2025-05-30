<template>
  <Flicking
      :plugins="plugins"
      :options="{ circular: true  }"
      class="flicking-viewport"
      style="width: 100%; overflow: hidden; position: relative;"
  >
    <div
        data-aos="fade-up"
        data-aos-delay="300"
        class="plugins-panel" v-for="(image, index) in images" :key="index">
        <img class="panel-image" :src="image" alt="Flicking Image"/>
    </div>
  </Flicking>
</template>
<script setup>
import {AutoPlay} from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";

const images = [
  "/images/partner-1.webp",
  "/images/partner-2.png",
  "/images/partner-3.webp",
  "/images/partner-4.webp",
  "/images/partner-5.webp",
  "/images/partner-6.webp",
];
const plugins = [new AutoPlay({duration: 2000, direction: "NEXT", stopOnHover: false})];
</script>
<style scoped>
.flicking-viewport {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.plugins-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  flex-shrink: 0;
  position: relative;
}

.panel-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  filter: grayscale(100%);
  opacity: 0.2;
}


.panel-image:hover {
  opacity: 1;
}
</style>
