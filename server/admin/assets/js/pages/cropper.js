$(".cropper-container>img").cropper({aspectRatio:1});


$(".aspectratio-4-3>img").cropper({aspectRatio: 4/3});


$(".cropper-box>img").cropper({
    crop: function(e) {
        $("#crop-x").val(e.detail.x);
        $("#crop-y").val(e.detail.y);
        $("#crop-width").val(e.detail.width);
        $("#crop-height").val(e.detail.height);
    }
});


var $image = $(".cropper-for-modal>img");
var cropBoxData;
var canvasData;
$("#cropper-modal").on("shown.bs.modal", function() {
    $image.cropper({
        autoCropArea: 0.5,
        built: function() {
            $image.cropper("setCanvasData", canvasData);
            $image.cropper("setCropBoxData", cropBoxData);
        }
    });
}).on("hidden.bs.modal", function() {
    cropBoxData = $image.cropper("getCropBoxData");
    canvasData = $image.cropper("getCanvasData");
    $image.cropper("destroy");
});
