<template>
    <div class="canvas-container" ref="canvasdom"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Scene, BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, AxesHelper, WebGLRenderer, Color } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let canvasdom = ref(null)
// 场景
const scene = new Scene()
scene.background = new Color('skyblue')

// 物体
const geometry = new BoxGeometry()
const material = new MeshBasicMaterial({ color: 0x00ff00 })
const mesh = new Mesh(geometry, material)
scene.add(mesh)

// 相机
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
camera.position.set(0, 0, 5)
camera.lookAt(0, 0, 0)
scene.add(camera)

// Axes
const axesHelper = new AxesHelper()
scene.add(axesHelper)

// Renderer
const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(innerWidth, innerHeight)

// 监听resize事件
window.addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(devicePixelRatio)
    camera.updateProjectionMatrix()
})

const animate = () => {
    requestAnimationFrame(animate)

    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    mesh.rotation.z += 0.01

    renderer.render(scene, camera)
}

onMounted(() => {
    canvasdom.value.appendChild(renderer.domElement)
    const controls = new OrbitControls(camera, renderer.domElement)

    animate()
    controls.update()
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