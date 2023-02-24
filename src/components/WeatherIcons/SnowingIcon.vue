<template>
    <div>
        <el-icon size="60px"><MostlyCloudy /></el-icon>
        <div class="snowflakes">
            <img class="icon" src="@/assets/snowflake.png" />
            <img class="icon" src="@/assets/snowflake.png" />
            <img class="icon" src="@/assets/snowflake.png" />
        </div>
    </div>
</template>
    
<script>
    export default {
    name: "SnowingIcon",
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
    flex-direction: row;
    gap: 3px;
    left: 8px;
    bottom: 10px;
}
.icon{
    width: 12px;
    height: 12px;
}
</style>