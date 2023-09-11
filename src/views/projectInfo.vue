<template>
     <el-input class="search-box" v-model="inputInfo" placeholder=" 请输入检索信息">
        <template #prefix>
          <el-icon><search /></el-icon>
        </template>
     </el-input>
     <el-table class="projectTable" :data="projectInfo" :span-method="spanMethod" >
        <el-table-column fixed prop="project_Id" label="项目编号" width="150"/>
        <el-table-column  prop="project_Name" label="项目名称" width="150" />
        <el-table-column  prop="customer" label="客户" width="150"/>
        <el-table-column  prop="is_Installed" label="是否安装" width="150"/>
        <el-table-column  prop="is_Exported" label="是否出口" width="150"/>
        <el-table-column  prop="design_Location" label="设计地点" width="150"/>
        <el-table-column  prop="process_Location" label="加工地点" width="150"/>
        <el-table-column  prop="company_Installation" label="安装调试公司" width="150" />
        <el-table-column  prop="staff_Market" label="市场负责人" width="150" />
        <el-table-column  prop="staff_Machinery" label="机械负责人" width="150"/>
        <el-table-column  prop="staff_Electrical" label="电气负责人" width="150"/>
        <el-table-column  prop="date_Sign" label="合同签订时间" width="150"/>
        <el-table-column  prop="date_Send" label="合同发货时间" width="150"/>
    </el-table>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {getRowSpanMethod} from '../utils/use-span-method'
  const inputInfo = ref('')
  //项目基础信息
  let projectInfo: any[] = [
    {
      project_Id: "NEWUBK-2022140-022",
      project_Name: "Tom",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-022",
      project_Name: "Tom",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-022",
      project_Name: "Tom",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-022",
      project_Name: "trsjtr",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-022",
      project_Name: "strjtjsg",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-022",
      project_Name: "srtjtrjty",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-444433-022",
      project_Name: "drhsrjrt",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-143453",
      project_Name: "grehs",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-022453452",
      project_Name: "ewgwehe",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-022",
      project_Name: "wgewgweg",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    },
    {
      project_Id: "NEWUBK-2022140-022",
      project_Name: "egwegw",
      customer: "No. 189, Grove St, Los Angeles",
      is_Installed:"是",
      is_Exported:"否",
      design_Location:"天津",
      process_Location:"天津",
      company_Installation:"北京",
      staff_Market:"jack",
      staff_Machinery:"jack",
      staff_Electrical:"jack",
      date_Sign:"jack",
      date_Send:"jack"
    }
  ]
  //当project_Id相同时，合并，project_Id后的参数可以加
  const spanMethod = getRowSpanMethod(projectInfo,['project_Id'])
</script>
<style scoped> 
.projectTable {
  position: absolute;
  top: 15%;
  left: 0.5%;
  bottom: 2%;
  width: 98%;
  height: 85%;
}
.search-box {
  height: 40px;
  width: 50%;
  margin-top:10px;
}
</style>
  