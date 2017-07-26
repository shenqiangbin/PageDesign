var Button = function () {
    var btn = this;
    btn.value = "确定";
    btn.width = 72;
    btn.height = 26;
    btn.toHtml = function(){
        return "<input type='button' style='{0}' value='{1}' />"
        .replace("{0}", 'width:' + btn.width + 'px;height:' + btn.height + 'px')
        .replace("{1}", btn.value);
    };
};