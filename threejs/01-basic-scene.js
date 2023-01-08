// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(2, 2, 2, 2, 2, 2)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, -0.6, 1)
mesh.rotation.reorder('YZX')
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(1, 2, 3)
camera.lookAt(0, 0, 0)
camera.position.z = 5
scene.add(camera)

// axios
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Renderer
const canvas = document.querySelector(".canvasdom")
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)

function animate() {
    requestAnimationFrame(animate)

    // mesh.rotation.x += 0.001
    // mesh.rotation.y += 0.001
    // mesh.rotation.z += 0.001

    // mesh.scale.x += 0.01
    // mesh.scale.y += 0.01
    // mesh.scale.z += 0.01

    mesh.quaternion.x += 0.0001
    mesh.quaternion.y += 0.0001
    mesh.quaternion.z += 0.0001

    renderer.render(scene, camera)
}

animate()
