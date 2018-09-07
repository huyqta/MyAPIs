<!doctype html>
<html class="no-js" lang="">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><%= documentTitle %></title>
  <link rel="stylesheet" href="/css/material-ui.css">
  <link rel="stylesheet" href="/css/materialdesignicons.css">
  <link rel="stylesheet" href="/css/style.css">
  <script src="/js/vendor/jquery.min.js"></script>
  <script src="/js/vendor/modernizr.js"></script>
  <script src="/js/vendor/fastclick.js"></script>
  <link rel="shortcut icon" href="/favicon.ico" />
</head>
<body>
<!--[if lte IE 8]>
  <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
<%= content %>
<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Roboto::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
</script>
<script src="/js/vendor/foundation.min.js"></script>
<script src="/js/app.js"></script>
<script>
  reactspa.renderToDom(<%= water %>);
</script>
</body>
</html>
