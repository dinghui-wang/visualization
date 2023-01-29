<template>
    <div class="cesium-container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as Cesium from "cesium"
import "cesium/Source/Widgets/widgets.css"

// Cesium内部实体
const container = ref(null)
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzVjY2VhOS1lYjBiLTRlZTctYmQ5Ny1jODU4NDFjM2EzYjciLCJpZCI6MTA1NTE1LCJpYXQiOjE2Njk3MTQ5OTJ9.JdZkUD1j52XvRSwzErhSsf6EqhsD2dchFkgikRtnoks"
let viewer
const initViewer = () => {
    viewer = new Cesium.Viewer(container.value, {
        infoBox: false,
        terrainProvider: Cesium.createWorldTerrain({
            requestWaterMask: true,
            requestVertexNormals: true
        })
    })

    viewer.scene.primitives.add(Cesium.createOsmBuildings())
}

// box
const addEntity = () => {
    viewer.entities.add({
        name: "Box",
        position: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 4000),
        box: {
            dimensions: new Cesium.Cartesian3(4000.0, 3000.0, 5000.0),
            material: Cesium.Color.BLUE,
            fill: false,
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    })
}

// 
const flyToEntity = () => {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-15.0),
        }
    })
}



onMounted(() => {
    initViewer()
    addEntity()
    flyToEntity()
})
</script>

<style scoped>
.cesium-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 98vh;
}
</style> 