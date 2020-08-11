var gets = (function() {
    var a = window.location.search;
    var b = new Object();
    a = a.substring(1).split("&");
    for (var i = 0; i < a.length; i++) {
        c = a[i].split("=");
        b[c[0]] = c[1];
    }
    return b;
})();

var uploadOn = (function (){
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }
})();

if(typeof gets['mobile'] !== 'undefined') {
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 100);

        /* Проверка авторизации
         ajaxAPI.shop.client.get()
             .done(function (onDone) { console.log('getClient: ', onDone) });
         Проверка авторизации */

        /* Удаляем блоки */
        $(".header-wrapper").remove();
        $(".footer-wrapper").remove();
        $(".header-menu-wrapper").parent(".grid__cell.palette_1").remove();
        $("a").remove();

        var url = window.location.href;
        if(url.indexOf('client_account/session/new') !== '-1'){

        }else if(url.indexOf('client_account/session') !== '-1'){

        }

        //var a = document.referrer;
        //alert(new URL(a));
    }
}else{
    // Проверяем редирект неверного пароля
    var url = window.location.href;

    if(url.indexOf('client_account/session') !== '-1'){
        var a = document.referrer;
        var url_history = 'client_account/session/new?mobile=Y';

        if (a != '') {
            if(url_history.indexOf(new URL(a)) !== '-1'){
                window.location.href = "http://shop-55201.myinsales.ru/client_account/session/new?mobile=Y";
            }else{
                uploadOn();
            }
        }else{
            uploadOn();
        }
    }else{
        uploadOn();
    }
}