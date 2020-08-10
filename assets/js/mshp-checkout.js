var gets = (function (){
    var a = window.location.search;
    var b = new Object();
    a = a.substring(1).split("&");
    for (var i = 0; i < a.length; i++){
        c = a[i].split("=");
            b[c[0]] = c[1];
    }
})();

if(typeof gets['mobile'] !== 'undefined'){
    $(".header-wrapper").remove();
    $(".fotter-wrapper").remove();
    $(".grid__cell .palette_1").remove();
}