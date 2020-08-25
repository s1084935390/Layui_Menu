 基于layui侧边栏二级菜单和基于js的二级菜单
 
 1、layui_Menu(layui版本二级菜单)  
   #### (1)html代码
  ```html
 <div class="layui-side layui-side-menu">
    <div class="layui-side-scroll">
        <div class="layui-logo" lay-href="home/console.html">
            <span>测试菜单</span>
        </div>
        <ul class="layui-nav layui-nav-tree" lay-shrink="all" id="menu" lay-filter="menu">
        </ul>
    </div>
```        
#### (2) js代码 调用
 ```javascript 
 <script src="js/sys_menu.js"></script>
<script>
layui.use(["element"],function(){
var $=layui.$,
element=layui.element;
    
    var data=[{"ID":1,"MenuIcon":"layui-icon layui-icon-set","MenuName":"系统设置","URL":null,"ParentID":null,"UserID":""} ]
     menu.render({
        id:"menu",//id
        data:data,//菜单响应数据
        element:element,//layui element 元素
        filter:"menu" //过滤器
     })
})


</script>
```
##响应数据类型
|参数|类型|描述|
|:-------|:-------|:-------|
| ID | number| ID  |
| MenuIcon | string| 图标 |
| MenuName | string| 菜单名 |
|  URL |string  | 菜单路径，最好是相对路径 |
|  ParentID |string  | 菜单上级ID 和ID字段对应 |
| UserID | string| 用户ID 可以和权限管理配合使用，因各项目开发场景不同，暂未开源，在此处无实际意义 |



#2、Menu(js版本二级菜单)  
   #### (1)html代码
  ```html 
        <ul  id="menu">
        </ul> 
```        
#### (2) js代码 调用
 ```javascript 
 <script src="js/sys_menu_min.js"></script>
<script>
 
    var data=[{"ID":1,"MenuIcon":"layui-icon layui-icon-set","MenuName":"系统设置","URL":null,"ParentID":null,"UserID":""} ]
     menu.render({
        id:"menu",//id
        data:data //菜单响应数据 
     }) 


</script>
```
注：js版需要自己手动写css
##响应数据类型
|参数|类型|描述|
|:-------|:-------|:-------|
| ID | number| ID  |
| MenuIcon | string| 图标 |
| MenuName | string| 菜单名 |
|  URL |string  | 菜单路径，最好是相对路径 |
|  ParentID |string  | 菜单上级ID 和ID字段对应 |
| UserID | string| 用户ID 可以和权限管理配合使用，因各项目开发场景不同，暂未开源，在此处无实际意义 |

