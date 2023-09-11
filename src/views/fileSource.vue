<template>
  <el-scrollbar class="fileSideMenu">
    <el-tree :data="menuData" :props="defaultProps" @node-click="handleNodeClick" />
  </el-scrollbar>
  <div class="search-Box">
    <el-input placeholder="输入文件,自动检索" class="search"  v-model="search" icon="Edit"></el-input>
  </div>
  <el-table class="fileArea" :data="fileArea">
    <el-table-column type="selection" />
    <el-table-column fixed prop="name" label="文件名称" />
    <el-table-column prop="size" label="文件大小" />
    <el-table-column prop="level" label="文件级别" />
    <el-table-column prop="url" label="下载" >
      <template #default="{row}">
         <a :href="row.url" target="_blank" >
          <el-icon><Download /></el-icon>
         </a>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref,computed } from 'vue'
    interface Tree {
      label: string
      children?: Tree[]
    }
    let search =ref('')
    //暂时mock数据，等后台处理好，将数据扔tableData数组即可
    const tableData = [
    {
      name: 'Tom',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'rheshdxfdh',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/5ce1bf6a-2e92-4a5a-98a5-f33b7c185abe/20200320/1134f99e-8855-42cc-ad87-f5503f386166.docx'
    },
    {
      name: 'sgesgx',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'esgdfrgrjhrjdt',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'reshrtjrtktkth',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'shrsjhtrsjtrkjs',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'stjstrjstrkstkjs',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'trsjstrjstrjt',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'stjstkjtsktk',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'rtkjsrtkjtsk',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'srhtrthtrsjtrjsrt',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'wstrjsjstrhsh',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'shtshtrhstrtr',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'srhtrhrsh',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'srhrtshrth',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    },
    {
      name: 'gshgahrhsehr',
      size: '19.5',
      level: 'all',
      url:'http://117.107.159.130:1063/Resource/DocumentFile/bba48ba0-fce5-4544-8fb5-5f036badc227/20230720/5ccfc908-dbfb-4999-9e61-231bb40bce1e.pdf'
    }
    ]
    const menuData: Tree[] = [
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
    },
    ] 
    const defaultProps = {
    children: 'children',
    label: 'label',
    }
    //点击节点后会触发的函数，可以用作请求后台数据
    const handleNodeClick = (data: Tree) => {
    }
    const fileArea = computed(()=>{
      var searchArg = search
      if(searchArg.value){
        return tableData.filter(function(dataNews:any){
          return Object.keys(dataNews).some(function(key){
            return String(dataNews[key]).toLowerCase().indexOf(searchArg.value)> -1
          })
        })
      }
      return tableData
    })
</script>

<style scoped>
.fileSideMenu{
  position: absolute;
  width: 17%;
  height: 100%;
}
.search-Box{
  position: absolute;
  top:3.5%;
  right:20%;
  height:8%;
  width: 50%
}
.search{
  height: 80%;
}
.fileArea{
  position: absolute;
  top:15%;
  right: 1%;
  width:80%;
  height: 100%;
}
</style>

  