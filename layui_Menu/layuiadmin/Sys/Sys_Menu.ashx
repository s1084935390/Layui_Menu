<%@ WebHandler Language="C#" Class="Sys_Menu" %>

using System;
using System.Web;
using System.Data;
using Newtonsoft.Json;

public class Sys_Menu : IHttpHandler {

    public void ProcessRequest (HttpContext context) {

        string action = context.Request.Params["action"];
        if (action == "Get_menu") {
            Get_Menu();
        }

    }



    protected void Get_Menu() {
        string sql = "select * from Sys_menu";
        DataTable dt = DBMySQL.Query(sql);
            HttpContext.Current.Response.Write(JsonConvert.SerializeObject(dt));
    }




    public bool IsReusable {
        get {
            return false;
        }
    }

}