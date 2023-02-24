<template>
    <div>
        <el-icon size="60px" style="top: 10px;"><Pouring /></el-icon>
        <div class="snowflakes">
            <img class="icon" src="@/assets/snowflake.png" />
        </div>
    </div>
</template>
    
<script>
    export default {
    name: "FreezingRainIcon",
    data() {
        return {
        }
    },
    };
</script>
    
<style scoped>
.snowflakes{
    display: flex;
    position: relative;
    justify-content: center;
    bottom: 38px;
}
.icon{
    width: 20px;
    height: 20px;
}
</style>