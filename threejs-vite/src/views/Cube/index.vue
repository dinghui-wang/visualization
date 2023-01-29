<template>
    <div class="canvas-container" ref="canvasdom"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Scene, BufferAttribute, BufferGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, WebGLRenderer, Color } from 'three'

const canvasdom = ref(null)
// 场景
const scene = new Scene()
scene.background = new Color(0.2, 0.5, 0.5)
// 物体
const geometry = new BufferGeometry()
const vertices = new Float32Array([
    -1.0, -1.0, 1.0,
    1.0, -1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,
    -1.0, -1.0, 1.0
])
geometry.setAttribute('position', new BufferAttribute(vertices, 3))
const material = new MeshBasicMaterial({ color: 0xff0000 })
const mesh = new Mesh(geometry, material)
scene.add(mesh)

// 相机
const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)
scene.add(camera)

// 渲染器
const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(innerWidth, innerHeight)
renderer.render(scene, camera)

window.addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(devicePixelRatio)
    camera.updateProjectionMatrix()
})

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