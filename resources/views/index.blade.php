<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Your Servicely</title>

    @vite('resources/css/main.scss')

</head>

<body>
    <div id="root"></div>

    @viteReactRefresh
    @vite('resources/js/main.jsx')
</body>

</html>