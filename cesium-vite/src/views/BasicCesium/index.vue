<template>
    <div class="cesium-container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as Cesium from "cesium"
import "cesium/Source/Widgets/widgets.css"

// 基础地图
const container = ref(null)
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzVjY2VhOS1lYjBiLTRlZTctYmQ5Ny1jODU4NDFjM2EzYjciLCJpZCI6MTA1NTE1LCJpYXQiOjE2Njk3MTQ5OTJ9.JdZkUD1j52XvRSwzErhSsf6EqhsD2dchFkgikRtnoks"
let viewer

const initViewer = () => {
    viewer = new Cesium.Viewer(container.value, {
        animation: false,
        timeline: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        vrButton: false,
        homeButton: false,
        infoBox: false,
        selectionIndicator: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        terrainProvider: Cesium.createWorldTerrain({
            requestWaterMask: true,
            requestVertexNormals: true
        })
    })
}

const addPrimitive = () => {
    viewer.scene.primitives.add(Cesium.createOsmBuildings())
}

const flyCamera = () => {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-15.0),
        }
    })
}

const removeCredit = () => {
    viewer.cesiumWidget.creditContainer.style.display = "none"
}

onMounted(() => {
    initViewer()
    addPrimitive()
    flyCamera()
    removeCredit()
})
</script>

<style scoped>
.cesium-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 95vh;
}
</style> 