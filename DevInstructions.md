### 开发环境（Development dependencies）

> 处理器：Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz   2.40 GHz
>
> 机带RAM：4.00 GB (3.89 GB 可用)
>
> 系统类型：64 位操作系统, 基于 x64 的处理器
>
> Windows：Windows 10 专业版

### 测试环境（Test dependencies）

> 处理器：Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz   2.40 GHz
>
> 机带RAM：4.00 GB (3.89 GB 可用)
>
> 系统类型：64 位操作系统, 基于 x64 的处理器
>
> Windows：Windows 10 专业版

### 版本信息(Version)

> 系统Vue版本：@vue/cli 5.0.4
>
> 系统Node版本：v16.15.0
>
> package.json里Vue版本："vue": "^3.2.37"
>
> pinia版本："pinia": "^2.0.20"
>
> vite版本："vite": "^3.0.0"



### 安装步骤



### Sidebar.vue的el-menu

#### 侧边栏的数据结构说明：

```json
{
        "id": "/",
        "label": "基础信息",
        "icon": "fa fa-send-o",
        "hasChildren": true,
        "items": [
            {
                "id": "/projectInfo",
                "label": "项目信息明细",
                "icon": "fa fa-location-arrow",
                "hasChildren": false,
                "items": [],
                "parentId": "698f872c-407b-471b-a28b-eee69a4e64ba"
            },
            {
                "id": "/fileSource",
                "label": "文件库",
                "icon": "fa fa-desktop",
                "hasChildren": false,
                "items": [],
                "parentId": "698f872c-407b-471b-a28b-eee69a4e64ba"
            },
            {
                "id": "/selectInfo",
                "label": "文件搜索",
                "icon": "fa fa-share-alt-square",
                "hasChildren": false,
                "items": [],
                "parentId": "698f872c-407b-471b-a28b-eee69a4e64ba"
            }
        ],
        "parentId": "0"
    }
```

#### 参数说明：

{

"`id`":string类型，`”/想要到达的路径”`（在此项目中同时被用作router属性的导航）

"`label`":string类型，选项名

"`icon`": string类型，图标，暂时用不到

"`hasChildren`":boolean类型，判断是否有子级元素

"`items`":数组类型，如果hasChildren为true，数组就有内容，内容为嵌套的同样结构体

"`parentId`":父元素的id,用来判断所属层级，同一级别的元素此属性值应该一样

}

### el-menu el-sub-menu el-menu-item

el-menu el-sub-menu el-menu-item分别为menu整体，一级菜单，二级菜单

el-menu标签要显式声明`router`属性，然后设置每个el-menu-item标签内的`index`属性，即可实现点击el-menu-item实现路由跳转 

> Warning:在此项目里，index属性同时为跳转path,所以点击后直接跳转到对应界面



#### 坑1：label值

`<span>{{ item.label }}</span>`外层要套一对`<template>`，才会正常渲染label值

#### 坑2：= =

`v-if="item.hasChildren = = true"`用来判断是否有子级菜单时，必须用= =

#### 坑3：index属性

el-sub-menu el-menu-item绑定index属性时候，后面必须是字符串！！！在此，我拼接了一个空字符串`<el-sub-menu :index="item.id+''">`

#### 坑4：key值绑定

有v-for的地方，就要有key值绑定！!主要用于dom diff算法，diff算法为同级比较，比较当前标签上的key还有他当前的标签名，如果key和标签名都一样时只移动，不会重新创建元素和删除元素



### selectInfo.vue

#### 自动搜索

实现自动搜索功能，el-table上方放置一个搜索框input，里的v-model绑定search_Text数据项，实现双向绑定（内部数据和搜索框里的键入值实现同步）

然后在el-table绑定`tables`这个计算属性

`:data="tables"`动态和tables绑定

(计算属性是一种可以根据其他属性的值计算得出并且具有缓存功能的属性,它可以方便地对多个属性进行复杂的计算，并且在依赖的属性发生变化时自动更新)

```javascript
computed:{
  tables:function(){
    var searchText=this.search_Text;
    if(searchText){
     return  this.searchResult.filter(function(dataNews){
      return Object.keys(dataNews).some(function(key){
       return String(dataNews[key]).toLowerCase().indexOf(searchText) > -1
          })
         })
       }
     return this.searchResult//searchResult就是最后的筛选结果，演示时候把mock数据放在这里就可以
        }
```

searchResult就是最后的筛选结果，演示时候把mock数据放在这里就可以

### projectInfo.vue

#### 前置图标#prefix

搜索框加了一个前置图标#prefix

```vue
<template #prefix>
	<el-icon><search /></el-icon>
</template>
```

el-input搜索框`v-model="inputInfo"`和内置数据双向绑定！

el-table绑定数据`:data="projectInfo"`

```vue
<el-table class="projectTable" :data="projectInfo">
```

#### 合并同id单元格

el-table里自定义”合并同id单元格“方法`sapnMethod()`

在utils里封装一个工具类use-span-method

```typescript
/**
 * @param {Object} projectInfo
 * @param {Object} rowSpanArray
 */
export function getRowSpanMethod(projectInfo:any, rowSpanArray:any) {
	/**
	 * 要合并列的数据
	 */
	const rowSpanNumObject :any = {};
	//初始化 rowSpanNumObject 
	rowSpanArray.map((item:any) => {
		rowSpanNumObject[item] = new Array(projectInfo.length).fill(1, 0, 1).fill(0, 1);
		rowSpanNumObject[`${item}-index`] = 0;
	});
	for (let i = 1; i < projectInfo.length; i++) {
		rowSpanArray.map((key:any) => {
			const index = rowSpanNumObject[`${key}-index`];
			if (projectInfo[i][key] === projectInfo[i - 1][key]) {
				rowSpanNumObject[key][index]++;
			} else {
				rowSpanNumObject[`${key}-index`] = i;
				rowSpanNumObject[key][i] = 1;
			}
		});
	}
	const spanMethod = function({ row, column, rowIndex, columnIndex }:any) {
		if (rowSpanArray.includes(column['property'])) {
			const rowspan = rowSpanNumObject[column['property']][rowIndex];
			if (rowspan > 0) {
				return { rowspan: rowspan, colspan: 1 }
			}
			return { rowspan: 0, colspan: 0 }
		}
		return { rowspan: 1, colspan: 1 }
	};
	return spanMethod;
}
```

在projectInfo里导入，并且传入参数project_Id，说明project_Id相同时，会合并相同的单元格

```typescript
import {getRowSpanMethod} from '../utils/use-span-method'
const spanMethod = getRowSpanMethod(projectInfo,['project_Id'])
```

> :cry:
>
> 不过，这个projectInfo的实时搜索功能还没实现，逻辑太抽象了（自己写的太乱了）
>
> 按理说直接套用selectInfo的那个搜索框就可以，不过这个projectInfo里自己又封装了合并单元格功能，导致绑定的计算属性computed失效

### fileSource.vue

#### 数据结构实例：

```json
{
   project_Id: 'NEWUBK-2022140-022',
   project_Name: 'Tom',
   customer: 'No. 189, Grove St, Los Angeles',
   is_Installed:'是',
   is_Exported:'否',
   design_Location:'天津',
   process_Location:'天津',
   company_Installation:'北京',
   staff_Market:'jack',
   staff_Machinery:'jack',
   staff_Electrical:'jack',
   date_Sign:'jack',
   date_Send:'jack'
  }
```

#### tree结构

引入一个树结构,导航到各个文件的分类，比如电气专业文件

```vue
<el-tree :data="menuData" :props="defaultProps" @node-click="handleNodeClick" />
```

@node-click的函数handleNodeClick预留，点击节点后会触发的函数，用作请求后台数据用

```vue
<el-tree @node-click="handleNodeClick"></el-tree>
```

规定tree的**interface**接口，children参数可选（无，就是没有子级）

```typescript
  interface Tree {
   label: string
   children?: Tree[]
  }
```

#### 复用搜索组件el-input

然后，实时搜索功能在这里得到了很好的复用，在selectInfo里封装的搜索组件在这应用上了

同样是el-input和el-table相互配合

el-table的数据项data在此很巧妙的绑定到计算属性fileArea

```vue
<el-table :data="fileArea">
```

fileArea计算属性computed和刚才如出一辙，是个动态变化的属性，随着搜索框的检索内容变化而变化

如果搜索内容为空，逻辑默认不检索

```typescript
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
```

关于el-table-column实现下载功能

利用`<template #default="{row}">`插槽功能，实现点击下载图标，下载文件功能

这个文件下载我想了很久怎么实现，后端http请求？后经过询问得知，有url，那就简单多了

其方法的本质是，外层遍历一圈icon图标，被放置在一个个的<a>标签之中，这些<a>标签指向一个个后端传回来的超链接

`:href="row.url"`

href指向row.url

```vue
<el-table-column prop="url" label="下载" >
      <template #default="{row}">
         <a :href="row.url" target="_blank" >
          <el-icon><Download /></el-icon>
         </a>
      </template>
</el-table-column>
```

### request.js
