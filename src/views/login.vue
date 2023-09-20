<template>
	<div class="login-wrap">
		<div class="ms-login">
			<div class="ms-title">万向新元信息化系统</div>
			<el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
				<el-form-item prop="username" class="input">
					<el-input v-model="param.username" placeholder="username">
						<template #prepend>
							<el-button :icon="User"></el-button>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password" class="input">
					<el-input type="password" placeholder="password" v-model="param.password" @keyup.enter="submitForm(login)">
						<template #prepend>
							<el-button :icon="Lock"></el-button>
						</template>
					</el-input>
				</el-form-item>
				<div class="login-btn">
					<el-button color="#626aef" type="primary" class="button" @click="submitForm(login)">登录</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useTagsStore } from '../store/tags';
import { usePermissStore } from '../store/permiss';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { Lock, User } from '@element-plus/icons-vue';

interface LoginInfo {
	username: string;
	password: string;
}
const router = useRouter();
const param = reactive<LoginInfo>({
	username: '',
	password: ''
});
const rules: FormRules = {
	username: [
		{
			required: true,
			message: '请输入用户名',
			trigger: 'blur'
		}
	],
	password: [
		{ 
			required: true,
			message: '请输入密码', 
			trigger: 'blur' 
		}
	]
};
const permiss = usePermissStore();
const login = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate((valid: boolean) => {
		if (valid) {
			//先告诉你登录成功
			ElMessage.success('您好 '+param.username);
			//先把输入的用户名存到localStroage中的ms_username
			localStorage.setItem('ms_username', param.username);
			//如果是admin，就把admin的权限作为defaultList的参数；反之user的权限作为参数
			//keys接受一个对应的权限列表
			const keys = permiss.defaultList[param.username == 'admin' ? 'admin' : 'user'];
			//重置用户权限
			permiss.handleSet(keys);
			//存储用户的权限列表到ms_keys
			localStorage.setItem('ms_keys', JSON.stringify(keys));
			router.push('/');
		} else {
			ElMessage.error('你先输入再说');
			return false;
		}
	});
};
const tags = useTagsStore();
tags.clearTags();
</script>

<style>
html,body {
	margin: 0;
	font-family: "PingFang SC","Microsoft Yahei",sans-serif;
}
.login-wrap {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url("../assets/img/back_tiny.jpg") fixed no-repeat , url("../assets/img/back.JPG") fixed no-repeat;
	background-size: cover;
}
.ms-login {
	width: 240px;
	height: 200px;
	display: flex;
	flex-direction: column;
	padding: 40px;
	text-align: center;
	position: relative;
	z-index: 100;
	background: inherit;
	border-radius: 18px;
	overflow: hidden;
}
.ms-login::before{
	content: "";
	width: calc(100% + 20px);
	height: calc(100% + 20px);
	position: absolute;
	top: -10px;
	left: -10px;
	overflow: hidden;
	background: inherit;
	box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.25);
	filter: blur(5px);
	z-index: -1;
}
.ms-title {
	font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	font-size: 20px;
	font-weight: 400;
	color: rgba(rgb(18, 19, 73), green, blue, alpha);
}
.ms-content {
	margin-top: 20px;
}
.ms-login .inpput {
	margin:6px,0;
	height: 36px;
	border: none;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 24px;
	padding: 0 14px;
	color: #3d5245;
}
.el-input__inner{
	border-radius: 24px;
}
.login-btn .button {
	width: 240px;
}


/*
.login-wrap {
	position: relative;
	width: 100%;
	height: 100%;
	background-size: 100%;
}
.ms-title {
	width: 100%;
	line-height: 50px;
	text-align: center;
	font-size: 20px;
	color: #fff;
	border-bottom: 1px solid #ddd;
}
.ms-login {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 350px;
	margin: -190px 0 0 -175px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.3);
	overflow: hidden;
}
.ms-content {
	padding: 30px 30px;
}
.login-btn {
	text-align: center;
}
.login-btn button {
	width: 100%;
	height: 36px;
	margin-bottom: 10px;
}
.login-tips {
	font-size: 12px;
	line-height: 30px;
	color: #fff;
}
*/
</style>
