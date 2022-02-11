<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style type="text/css">
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		body {
			font-family: 'Montserrat', sans-serif;
			background-color: black;
			color: white;
		}
		.container{
			height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.container h1{
			font-size: 5rem;
			font-weight: bold;
			letter-spacing: 0.1rem;
			text-align: center;
			overflow: hidden;
			padding: 0.5rem;
			color: #01a8ca;
		}
		.container p{
			font-size: 2rem;
			text-align: center;
			overflow: hidden;
			padding: 0.5rem;
		}
		.typed-text{
			font-style: normal;
			font-weight: normal;
			color: #56fa65;
		}
		.cursor{
			display: inline-block;
			width: 3px;
			background-color: #ccc;
			margin-left: 0.1rem;
			animation: blink 1s infinite;
		}
		.cursor .typing{
			animation: none;
		}
		.enter-btn{
			display: flex;
			justify-content: center;
		}
		.enter-btn img{
			width: 100px;
		}
		@keyframes blink{
			0% { background-color: #ccc; }
			49% { background-color: #ccc; }
			50% { background-color: transparent; }
			99% { background-color: transparent; }
			100% { background-color: #ccc; }
		}
	</style>
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
	<script type="text/javascript">
		const typedTextSpan = document.querySelector(".typed-text")
		const textArray = ["Hello World !","Bonjour","Portfolio","Réalisations"];
		const typingDelay = 200;
		const erasingDelay = 100;
		const newTextDelay = 2000;

		let textArrayIndex = 0;
		let charIndex = 0;

		function type() {
			if(charIndex < textArray[textArrayIndex].length) {
				typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
				charIndex++;
				setTimeout(type, typingDelay);
			}
			else {
				setTimeout(erase, newTextDelay);
			}
		}

		function erase() {
			if(charIndex > 0) {
				typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
				charIndex--;
				setTimeout(erase, erasingDelay);		
			}
			else {
				textArrayIndex++;
				if(textArrayIndex>=textArray.length) textArrayIndex=0;
				setTimeout(type, typingDelay + 1100);
			}
		}

		document.addEventListener("DOMContentLoaded", function() {
			setTimeout(type, newTextDelay + 1100);
		});
	</script>
</body>
</html>