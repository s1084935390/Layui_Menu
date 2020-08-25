layui.define(["form","element"], function (exports) {
    var $ = layui.$,
        element = layui.element;

    Get_Menu();

    function Get_Menu() {
        $.ajax({
            type: "post",
            url: "/layuiadmin/Sys/Sys_Menu.ashx?action=Get_menu",
            success: function (res) {
                var result = JSON.parse(res);
                var result_cooy = result;
               //一级

                var parent = [];
                var child = [];
                var str = "";
                for (var i = 0; i < result.length; i++) { 
                    if (result[i].ParentID == null) {
                        parent.push(result[i]);
                    }
                    for (var j = 0; j < result_cooy.length; j++) {
                        if (result[i].ID == result_cooy[j].ParentID && result_cooy[j].ParentID!=null) {
                            child.push(result_cooy[j]);
                        }
                    }
                }
                //组合
                for (var i = 0; i < parent.length; i++) {
                    str += "<li  class='treeview'>"
                    str += "<a href='" + (parent[i].ParentID == null ? "javascript:;" : parent[i].URL) + "' class='nav-link'><i class=" + parent[i].MenuName +">" + parent[i].MenuName + "</i></a>"
                    str += "<dl class='layui-nav-child'>"
                    var dd = "";
                    for (var j = 0; j < child.length; j++) {
                        if (parent[i].ID == child[j].ParentID) {
                            dd += "<dd><a href='" + child[j].URL + "'>" + child[j].MenuName + "</dd>"
                        }
                    }
                    str += dd;
                    str += "</dl>"
                    str+="</li>"
                }
               $("#menu").html(str)
               element.render("nav","menu")

            }
        })
    }


    exports("SysMenu", {})
})