String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

//查询和标签
function GetXmlByQuery(str) {
    $.ajax({
        url: "xmls/all.xml",
        dataType: 'xml',
        type: 'GET',
        timeout: 2000,
        error: function (xml) {
            alert("加载XML 文件出错！");
        },
        success: function (xml) {
            var infos = "";
            var title;
            var img;
            $(xml).find("page").each(function (i) {
                title = $(this).attr("title");
                img = $(this).attr("img");
                if (str == "") {
                    str = $("#s").val();
                }
                if (title.toLowerCase().indexOf(str) >= 0) {
                    infos += "<li class='article-entry standard'>";
                    infos += "<h4>" + title + "</h4>";
                    infos += "<span class='article-meta'>" + $(this).text() + "</span>";
                    if (img != null) {
                        infos += "<img src='" + img + "' />";
                    }
                    infos += "</li>";
                }
            });
            infos = infos.replaceAll("%t", "<br />");
            $(".articles").html(infos);
        }
    });
}

//Id传参，列表类
function GetXmlByType(tid) {
    $.ajax({
        url: "xmls/" + tid + ".xml",
        dataType: 'xml',
        type: 'GET',
        timeout: 2000,
        error: function (xml) {
            alert("加载XML 文件出错！");
        },
        success: function (xml) {
            var infos = "";
            var type;
            var title;
            var img;
            $(xml).find("page").each(function (i) {
                type = $(this).attr("type");
                title = $(this).attr("title");
                img = $(this).attr("img");
                if (type.toLowerCase().indexOf(tid) >= 0) {
                    infos += "<li class='article-entry standard'>";
                    infos += "<h4>" + title + "</h4>";
                    infos += "<span class='article-meta'>" + $(this).text() + "</span>";
                    if (img != null) {
                        infos += "<img width='150px' height='auto' src='" + img + "' />";
                    }
                    infos += "</li>";
                }
            });
            infos = infos.replaceAll("%t", "<br />");
            $(".articles").html(infos);
        }
    });
}