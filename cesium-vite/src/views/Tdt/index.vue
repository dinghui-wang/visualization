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

const loadTdt = () => {
    viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
        url: "https://{s}.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=df15e20b2ffb060c68f21643df2811dc",
        layer: "img",
        style: "default",
        format: "tiles",
        tileMatrixSetID: "w",
        credit: new Cesium.Credit('天地图全球影像服务'),
        subdomains: ['t0', "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        minimumLevel: 0,
        maximumLevel: 18,
        show: true
    }))
}

onMounted(() => {
    initViewer()
    loadTdt()
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