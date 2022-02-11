<!DOCTYPE html>
{% load static %}
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="{% static '/css/style.css' %}">
	<title>SCHLEICHER Pierre-Nicolas</title>
</head>
<body>
	<div class="container">
		<h1>print("<span class="typed-text"></span><span class="cursor typing">&nbsp;</span>")</h1>
		<p>Bienvenue sur mon site.</p>
		<div class="enter-btn">
			<img src="{% static '/img/enter.png'%}">
		</div>
	</div>
	<script type="text/javascript" src="{% static 'js/main.js' %}"></script>
</body>
</html>