<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
    <meta charset="utf-8">
        <title>Document</title>
        <link rel="stylesheet" href="{{asset("css/app.css")}}">
    </head>
<body>
<div id="app">

    <Myheader></Myheader>
    <div class="container">
        <router-view></router-view>
    </div>

    <Myfooter></Myfooter>

</div>

<script src="{{asset("js/app.js")}}"></script>
</body>
</html>