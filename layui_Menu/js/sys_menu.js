
var menu={
    render:function(obj){
        var result =obj.data;
        var result_cooy = result;
        var element=obj.element;
        //一级

        var parent = [];//一级菜单集合
        var child = [];//二级菜单集合
        //可依此逻辑 添加第N个集合 就是比较麻烦
        var str = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i].ParentID == null) {
                parent.push(result[i]);//添加一级菜单
            }
            for (var j = 0; j < result_cooy.length; j++) {
                if (result[i].ID == result_cooy[j].ParentID && result_cooy[j].ParentID != null) {
                    child.push(result_cooy[j]);//添加二级菜单
                }
            }
        }
         //假设第三个菜单集合为 var three =[] ,第三个总菜单数据为 var result_three=result;     
         // 第三级菜单代码则为
        //  for (var i = 0; i < result_cooy.length; i++) { 
        //     if (result_cooy[i].ID == result_three[j].ParentID && result_three[j].ParentID != null) {
        //         child.push(result_three[j]);//添加三级菜单
        //     }
        // }    
         

        //组合
        for (var i = 0; i < parent.length; i++) {
            str += "<li  class='layui-nav-item'>"
            str += "<a   " + (parent[i].URL == null ? "" :"lay-href='" +parent[i].URL+"'") + "><i class='" + parent[i].MenuIcon + "'></i><span >" + parent[i].MenuName + "</span></a>"
      
            var dd = "";
            for (var j = 0; j < child.length; j++) {
                if (parent[i].ID == child[j].ParentID) {
                    dd += "<dd><a lay-href='" + child[j].URL + "'><i class='" + child[j].MenuIcon + "'></i>" + child[j].MenuName + "</a></dd>"
                }
            }
            if (dd != "") {
                str +="<dl class='layui-nav-child'>"+ dd + "</dl>";
            } 
            str += "</li>"
        }
        //合并第三级集合 
        //略 一般系统菜单只有两级
        document.getElementById(obj.id).innerHTML=str
        element.render("nav", obj.filter)//删除此段代码可不渲染为layui侧边菜单

    }
}