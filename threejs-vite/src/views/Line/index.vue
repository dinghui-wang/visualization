<template>
    <div class="canvas-container" ref="canvasdom"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Scene, Vector3, PerspectiveCamera, BufferGeometry, WebGLRenderer, LineBasicMaterial, Line, Color } from 'three'

const canvasdom = ref(null)
const scene = new Scene()
scene.background = new Color(0.1, 0.5, 0.4)
const points = []
points.push(new Vector3(- 10, 0, 0))
points.push(new Vector3(0, 10, 0))
points.push(new Vector3(10, 0, 0))

const geometry = new BufferGeometry().setFromPoints(points)
const material = new LineBasicMaterial({ color: 0x0000ff })
const line = new Line(geometry, material)
scene.add(line)

const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)
scene.add(camera)

const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(innerWidth, innerHeight)
renderer.render(scene, camera)

onMounted(() => {
    canvasdom.value.appendChild(renderer.domElement)
})
</script>

<style scoped>
.canvas-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 95vh;
    overflow: hidden;
}
</style> 