<template>
    <div>
        <el-icon size="60px" style="top:5px"><MostlyCloudy /></el-icon>
        <div class="fog">
            <el-icon class="foggy-line" size="50px"><Minus /></el-icon>
            <el-icon class="foggy-line" size="50px"><Minus /></el-icon>
            <el-icon class="foggy-line" size="50px"><Minus /></el-icon>
        </div>
    </div>
</template>
    
<script>
    export default {
    name: "FogIcon",
    data() {
        return {
        }
    },
    };
</script>
    
<style scoped>
.fog{
    display: flex;
    flex-direction: column;
}
.foggy-line{
    margin-top: -22px;
    margin-bottom: -22px;
    left: 5px;
    bottom: 7px;
}
</style>