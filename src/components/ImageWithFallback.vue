<template>
  <!--
    Mặc định giống <img>. 
    - Nhận mọi class/style/attribute từ cha qua $attrs
    - Nếu load lỗi và có props.fallback thì đổi sang fallback
  -->
  <img
    v-bind="$attrs"
    :src="currentSrc"
    :alt="alt"
    @error="onError"
  />
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  fallback: {
    type: String,
    default: '' // có thể set 1 url placeholder nếu muốn
  }
})

const currentSrc = ref(props.src)

watch(
  () => props.src,
  (val) => {
    currentSrc.value = val
  }
)

function onError() {
  if (props.fallback) {
    currentSrc.value = props.fallback
  }
}
</script>
