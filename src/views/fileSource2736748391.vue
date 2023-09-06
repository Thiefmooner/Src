<template>
    <el-tree class="fileSideMenu" :data="menuData" :props="defaultProps" @node-click="handleNodeClick" /> 
    <el-input placeholder="请输入关键字" icon="search"  class="search"  v-model="search" />
    <el-table  class="fileArea" :data="fileData"  >
      <el-table-column  prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column   prop="address"  label="地址"></el-table-column>
    </el-table>
  
</template>
<script>
  export default{
    data(){
      return {
        search: '',  //搜索
        menuData:[
        {
        label: ' 机械部门',
        children: [
          {
            label: '上辅机系统',
            children: [
              {
                label: '插板阀'
              },
              {
                label:'除尘器'
              },
              {
                label:'袋滤器'
              },
              {
                label:'切刀供胶机'
              },
              {
                label:'排料阀'
              },
              {
                label:'螺旋加料器'
              },
              {
                label:'粉料称'
              },
              {
                label:'液体称'
              }
            ]
         },
         {
           label:"小药称量系统" ,
           children:[
                {
                  label:"料车自助式小料"
                },
                {
                    label:"圆盘式小料"
                },
                {
                    label:"全自动小药"
                }
           ]
         }
      ],
    },
    {
      label: '电气部门',
      children: [
        {
          label: '流程及规范',
          children: [
            {
              label: '设计流程'
            },
            {
              label:"安装规范"
            }
          ],
        },
        {
          label: '标准化工作',
          children: [
            {
              label: '电气说明书模板'
            },
            {
              label:'标准程序',
              children:[
                {
                    label:'AB'
                },
                {
                    label:'西门子'
                },
                {
                    label:'三菱'
                }
              ]
            },
            {
              label:'图纸',
              children:[
                {
                    label:'表格模板'
                },
                {
                    label:'部件库'
                },
                {
                    label:'标准图纸'
                }
              ]
            }
          ]
        },
        
      ],
    },
    {
      label: '软件部门',
      children: [
        {
          label: '扫描枪',
          
        },
        {
          label: '标准地址表',
          
        },
        {
          label: '说明书',
          
        },
        {
          label: '标准程序',
          
        },
        {
          label: '数据库结构'
        },
      ],
    }],
        tableData: [
          {date: '2016-05-02',name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          {date: '2016-05-04',name: '章小虎',address: '上海市普陀区金沙江路 1517 弄'},
          {date: '2016-05-01',name: '李小虎',address: '上海市普陀区金沙江路 1519 弄'},
        ]  //表格内容
      }
    },
    computed:{
      fileData:function(){
        var search=this.search;
        if(search){
          return  this.tableData.filter(function(dataNews){
            return Object.keys(dataNews).some(function(key){
              return String(dataNews[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.tableData
      }
    }
  }
</script>
<style scoped>
.search{
  display: block;
  position:absolute;
  width: 35%;
  right: 1%;

}
.fileSideMenu{
  display: block;
  position: absolute;
  width: 17%;
  height: 100%;
}
.fileArea{
  display: block;
  position: absolute;
  right: 1%;
  top: 5%;
  width:80%;
  height: 100%;
}
</style>