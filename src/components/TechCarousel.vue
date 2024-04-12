<template>
  <div class="h-[500px] flex flex-col justify-center self-center">
    <TransitionGroup name="fade" appear>
      <template v-for="(image, index) in images" :key="index">
        <img v-if="currentImage == index" :src="image.src" height="500" width="500" />
      </template>

    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import typescript from '../images/typescript.svg'
import react from '../images/react.svg'
import vue from '../images/vue.svg'
import mongodb from '../images/mongodb.svg'
import python from '../images/python.svg'
import mysql from '../images/mysql.svg'
import fastify from '../images/fastify.svg'
import nodejs from '../images/nodejs.svg'
import net from '../images/net.svg'

import { onUnmounted, ref } from 'vue'

const images = [typescript, react, vue, nodejs, mongodb, python, mysql, fastify, net]

const currentImage = ref(0)

const interval = setInterval(() => {
  if (currentImage.value < (images.length - 1)) currentImage.value += 1
  else currentImage.value = 0
}, 4000)

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
  display: none;
}
</style>