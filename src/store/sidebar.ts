/**
 * 控制侧边栏的打开，关闭，这个功能鸡肋，删之 
 */
import { defineStore } from 'pinia'
export const useSidebarStore = defineStore('sidebar', {
	state: () => {
		return {
			collapse: false//折叠属性值collapse为false,意思为默认打开，不折叠
		}
	},
	getters: {},
	actions: {
		handleCollapse() {
			this.collapse = !this.collapse
		}
	}
});
