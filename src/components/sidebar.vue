<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" default-active="onRoutes" background-color="#324157" text-color="#bfcbd9" active-text-·="#20a0ff" router><!--加一个router，就会在点击菜单后，路径追加一个item的id-->
            <template v-for="item in obj.item" :key="item.id">
                <template v-if="item.hasChildren == true">
                    <el-sub-menu :index="item.path" :route="{path:item.path}"><!--index必须要是字符串-->
                        <template #title>
                            <span>{{ item.label }}</span>
                        </template>
                        <template v-for="subItem in item.items" :key="subItem.id">
                            <el-sub-menu v-if="subItem.hasChildren == true" :index="subItem.path" :route="{path:subItem.path}">
                                <template #title>
                                    {{ subItem.label }}
                                </template>
                                <el-menu-item v-for="threeItem in subItem.items" :index="threeItem.path" :route="{path:threeItem.path}">
                                    {{ threeItem.label }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.path" :route="{path:subItem.path}">
                                {{ subItem.label }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.path" :route="{path:item.path}">
                        <template #title>
                            {{ item.label }}
                        </template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarStore } from '../store/sidebar'
import { useRoute } from 'vue-router'
import  axios from 'axios'
import {reactive} from 'vue'
import { getSideBarData } from '../api'
    let obj :any = reactive({
        item:[]
    })
    const route = useRoute()
    const onRoutes = computed(() => {
        return route.path
    })
    //渲染侧边栏数据
    const sidebar = useSidebarStore()
    getSideBarData().then(res=>obj.item = res.data)
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>