<template>
	<v-header />
	<v-sidebar />
	<div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">		
		<div class="content">
			<router-view v-slot="{ Component }">
				<transition name="move" mode="out-in">
					<keep-alive :include="tags.nameList">
						<component :is="Component"></component>
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '../store/sidebar';
import { useTagsStore } from '../store/tags';


//以下三个vHeader,vSidebar,vTags报错，显示没有默认导出
//解决，vetur.validation.script 设置为 false
import vHeader from '../components/header.vue';
import vSidebar from '../components/sidebar.vue';
//import vTags from '../components/tags.vue';

const sidebar = useSidebarStore();
const tags = useTagsStore();
</script>
