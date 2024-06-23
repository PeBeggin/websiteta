var skin = $("body").hasClass("dark") ? "moono-dark" : "moono-lisa";
var editor;

function createEditor(config) {
    CKEDITOR.config.skin = skin;
    editor = CKEDITOR.appendTo('editor', config);
    editor.setData($("#content").val());
}
function createInlineEditor(config) {
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.contentsLangDirection = true;
    
    CKEDITOR.inline('editor-inline', config);
}

var config = {};
config.language = 'en';
if($("html").attr("dir") == "rtl"){
    config.contentsLangDirection = 'rtl';
}


createEditor(config);
createInlineEditor(config);


CKEDITOR.on("instanceReady", function(event)
{
    if($("html").attr("dir") == "rtl" && !$(".cke_top").hasClass("cke_rtl")){        
        $(".cke_top").addClass("cke_rtl");
    }
});