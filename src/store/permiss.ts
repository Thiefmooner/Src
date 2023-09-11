import { defineStore } from 'pinia'
	interface ObjectList {
		[key: string]: string[]
	}
export const usePermissStore = defineStore('permiss', {
	state:() => {
		//取出键为ms_keys的值keys
		const keys = localStorage.getItem('ms_keys')
		return {
			//keys如果存在的话，就转为JSON格式，否则初始化为空字符串数组
			key: keys ? JSON.parse(keys) : <string[]>[],
			//defaultList存储用户的权限列表
			defaultList: <ObjectList>{
				admin: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
				user: ['1', '2', '3', '11', '13', '14', '15']
			}
		}
	},
	actions: {
		handleSet(val: string[]) {
			this.key = val
		}
	}
});