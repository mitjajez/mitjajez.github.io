(function() {
    var s = document.createElement('script');
    var t = document.getElementsByTagName('script')[0];

    s.type = 'text/javascript';
    s.async = true;
    s.src = '//api.flattr.com/js/0.6/load.js?mode=auto' +
        '&uid=mitjajez' +
        '&button=compact' +
        '&html5-key-prefix=data-flattr';

    t.parentNode.insertBefore(s, t);
 })();
