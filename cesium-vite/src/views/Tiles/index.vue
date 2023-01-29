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
}

const addPrimitive = () => {
    viewer.scene.primitives.add(Cesium.createOsmBuildings())
}

const load3DTileset = () => {
    const tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: "https://midgis.zjnydsj.com:18443/gispage/demo/Cesium/ff/tileset.json"
    }))
    const longitude = 119.591668, latitude = 29.296883, heightOffset = 150
    tileset.readyPromise.then((tileset) => {
        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        const offsetvalue = Cesium.Cartographic.fromDegrees(longitude, latitude, heightOffset)
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        const offset = Cesium.Cartesian3.fromRadians(offsetvalue.longitude, offsetvalue.latitude, offsetvalue.height)
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.5, -2, tileset.boundingSphere.radius))
    }).catch((error) => {
        console.log(error)
    })
}

onMounted(() => {
    initViewer()
    addPrimitive()
    load3DTileset()
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