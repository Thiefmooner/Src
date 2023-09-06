<template>
      <el-input  placeholder="请输入项目编号" style="width:240px"></el-input>
      <el-input  placeholder="请输入客户名称" style="width:240px"></el-input>
      <el-input  placeholder="请输入负责人" style="width:240px"></el-input>
      <el-button type="primary" >搜索</el-button>
      
      <el-table :data="searchResult"  style="width: 100%"><!--el-table有个属性border，加上后，会随意拖拉宽度，不好，故去掉-->
        <el-table-column prop="project_Id" label="项目编号" ></el-table-column>
        <el-table-column prop="customer" label="客户名称" ></el-table-column>
        <el-table-column prop="project_Name" label="系统名称"></el-table-column>
        <el-table-column prop="staff_Machinery" label="机械负责人"></el-table-column>
        <el-table-column prop="staff_Electrical" label="电气负责人"></el-table-column>
        <el-table-column prop="staff_Software" label="软件负责人"></el-table-column>
      </el-table> 
</template>
    
<script setup lang="ts">
    const searchResult: any[] = [
      {
        project_Id: 'NEWUBK-2020-022',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-0',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-0782',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-787822',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-0785622',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-078765782',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-078777722',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-08882',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-0222222',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-011122',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-132152',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-153248384',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-1838434',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-38782',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-037836842',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-43482',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-43834342',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      },
      {
        project_Id: 'NEWUBK-2020-4354544442',
        project_Name: '20工位小药系统',
        customer: '山东华盛集团',
        staff_Software:'jack',
        staff_Machinery:'jack',
        staff_Electrical:'jack'
      }
    ]

    
</script>