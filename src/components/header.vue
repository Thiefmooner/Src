<template>
	<div class="header">
		<div class="NewuLogo"><img src="../assets/img/Newu.png"></div>
		<div class="NewuName">万向新元信息化平台</div>
		<div class="header-right">
			<div class="header-user-con">				
				<!-- 用户头像 -->
				<el-avatar class="user-avator" :size="30" :src="imgurl" />
				<!-- 用户名下拉菜单 -->
				<el-dropdown class="user-name" trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
						{{ username }}
						<el-icon class="el-icon--right">
							<arrow-down />
						</el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item command="user">个人中心</el-dropdown-item>
							<el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRouter } from 'vue-router';
import imgurl from '../assets/img/img.jpg';

const username: string | null = localStorage.getItem('ms_username');
const message: number = 0;
const sidebar = useSidebarStore();


// 用户名下拉菜单选择事件
const router = useRouter();
const handleCommand = (command: string) => {
	if (command == 'loginout') {
		localStorage.removeItem('ms_username');
		router.push('/login');
	} else if (command == 'user') {
		router.push('/user');
	}
};
</script>
<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 70px;
	font-size: 22px;
	color: #fff;
}
.header .NewuLogo{
	margin-top: auto;
}
.header .NewuName {
	align-items: center;
	width: 250px;
	line-height: 70px;
	font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
.header-right {
	padding-right: 50px;
}
.header-user-con {
	display: flex;
	height: 70px;
	align-items: center;
}
.user-name {
	margin-left: 10px;
}
.user-avator {
	margin-left: 20px;
}
.el-dropdown-link {
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
}
.el-dropdown-menu__item {
	text-align: center;
}
</style>
