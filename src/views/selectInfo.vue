<template>
    <div class="table">
      <div class="search-Box">
        <el-input placeholder="输入文件,自动检索" class="search"  v-model="search_Text" ></el-input>
      </div>
      <el-table :data="tables" style="width: 100%">
        <el-table-column prop="project_Id" label="项目编号" ></el-table-column>
        <el-table-column prop="customer" label="客户名称" ></el-table-column>
        <el-table-column prop="project_Name" label="系统名称"></el-table-column>
        <el-table-column prop="staff_Machinery" label="机械负责人"></el-table-column>
        <el-table-column prop="staff_Electrical" label="电气负责人"></el-table-column>
        <el-table-column prop="staff_Software" label="软件负责人"></el-table-column>
      </el-table>
    </div>
</template>
<script>
    export default{
      data(){
        return {
          search_Text: '',  //搜索
          searchResult: [
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-032',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'sacasvc',staff_Machinery:'savsabvad',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '西门子上辅机',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'savasbebh'},
          {project_Id: 'NEWUBK-2020-44125',project_Name: '20工位小药系统',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '西门子上辅机',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-18441',project_Name: '20工位小药系统',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '西门子上辅机',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '西门子上辅机',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-48419',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-45566',project_Name: '西门子上辅机',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-12255',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-28242',project_Name: '西门子上辅机',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-11111',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-18419',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-12686',project_Name: '西门子上辅机',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '西门子上辅机',customer: '江苏无锡派克',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-03732',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},
          {project_Id: 'NEWUBK-2020-19888',project_Name: '20工位小药系统',customer: '山东华盛集团',staff_Software:'jack',staff_Machinery:'jack',staff_Electrical:'jack'},

        
        
        
        
        
         ]  //文件信息存到这里就行
        }
      },
      computed:{//搜索的计算属性
        tables:function(){
          var searchText=this.search_Text;
          if(searchText){
            return  this.searchResult.filter(function(dataNews){
              return Object.keys(dataNews).some(function(key){
                return String(dataNews[key]).toLowerCase().indexOf(searchText) > -1
              })
            })
          }
          return this.searchResult
        }
      }
    }
</script>
<style scoped>
.search{
    right:2px;
    width: 30%
} 

</style>