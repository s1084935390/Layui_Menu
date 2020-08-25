
var menu={
    render:function(obj){
        var result =obj.data;
        var result_cooy = result; 
        //一级

        var parent = [];//一级菜单集合
        var child = [];//二级菜单集合
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
        //组合
        for (var i = 0; i < parent.length; i++) {
            str += "<li>"
            str += "<a  " + (parent[i].URL == null ? "" :"href='" +parent[i].URL+"'") + "><i class='" + parent[i].MenuIcon + "'></i><span >" + parent[i].MenuName + "</span></a>"//URL 为null 则不添加 href属性
      
            var dd = "";
            for (var j = 0; j < child.length; j++) {
                if (parent[i].ID == child[j].ParentID) {
                    dd += "<dd><a href='" + child[j].URL + "'><i class='" + child[j].MenuIcon + "'></i>" + child[j].MenuName + "</a></dd>"
                }
            }
            if (dd != "") {
                str +="<dl>"+ dd + "</dl>";
            } 
            str += "</li>"
        }
        document.getElementById(obj.id).innerHTML=str 

    }
}