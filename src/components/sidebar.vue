<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" background-color="#324157" text-color="#bfcbd9" active-text-·="#20a0ff" router><!--加一个router，就会在点击菜单后，路径追加一个item的id-->
            <template v-for="item in obj.item" :key="item.id">
                <template v-if="item.hasChildren == true">
                    <el-sub-menu :index="item.id+''"><!--必须要是字符串-->
                        <template #title>
                            <span>{{ item.label }}</span>
                        </template>
                        <template v-for="subItem in item.items" :key="subItem.id">
                            <el-sub-menu v-if="subItem.hasChildren == true" :index="subItem.id+''">
                                <template #title>
                                    {{ subItem.label }}
                                </template>
                                <el-menu-item v-for="threeItem in subItem.items" :index="threeItem.id+''">
                                    {{ threeItem.label }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.id+''">
                                {{ subItem.label }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.id+''">
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
import { computed } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';
import  axios from 'axios';
import {reactive} from 'vue'

let obj :any = reactive({
    item:[
    {
        "id": "/",
        "label": "基础信息",
        "icon": "fa fa-send-o",
        "hasChildren": true,
        "items": [
            {
                "id": "/projectInfo",
                "label": "项目信息明细",
                "icon": "fa fa-location-arrow",
                "hasChildren": false,
                "items": [],
                "parentId": "698f872c-407b-471b-a28b-eee69a4e64ba"
            },
            {
                "id": "/fileSource",
                "label": "文件库",
                "icon": "fa fa-desktop",
                "hasChildren": false,
                "items": [],
                "parentId": "698f872c-407b-471b-a28b-eee69a4e64ba"
            },
            {
                "id": "/selectInfo",
                "label": "文件搜索",
                "icon": "fa fa-share-alt-square",
                "hasChildren": false,
                "items": [],
                "parentId": "698f872c-407b-471b-a28b-eee69a4e64ba"
            }
        ],
        "parentId": "0"
    },
    {
        "id": "1",
        "label": "项目管理",
        "icon": "fa fa-desktop",
        "hasChildren": true,
        "items": [
            {
                "id": "7ae94059-9aa5-48eb-8330-4e2a6565b193",
                "label": "项目进度汇报",
                "icon": "fa fa-leaf",
                "hasChildren": false,
                "items": [],
                "parentId": "1"
            }   
        ],
        "parentId": "0"
    },
    {
        "id": "2",
        "label": "BOM管理",
        "icon": "fa fa-coffee",
        "hasChildren": true,
        "items": [
            {
                "id": "8",
                "label": "采购单管理",
                "icon": "fa fa-sitemap",
                "hasChildren": false,
                "items": [],
                "parentId": "2"
            },
            {
                "id": "9",
                "label": "发货单管理",
                "icon": "fa fa-th-list",
                "hasChildren": false,
                "items": [],
                "parentId": "2"
            }
        ],
        "parentId": "0"
    }
    
]
})



//axios.get('http://192.168.3.21:1024/api/SampleData/getmodule').then(res => { 
  //  obj.item = res.data
//})

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
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