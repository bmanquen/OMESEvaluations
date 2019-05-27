$(function () {
    var url = window.location.href.split('/');
    var loc = url[url.length - 1];
    var link = document.querySelectorAll('nav a');

    for (var i = 0; i < link.length; i++) {
        var path = link[i].href.split('/');
        var page = path[path.length - 1];
        if (page == loc || page == 'home.cshtml' && loc == '') {
            link[i].parentNode.className += ' ' + 'active';
            document.body.className += ' ' + page.substr(0, page.lastIndexOf('.'));
        }
    }
});

