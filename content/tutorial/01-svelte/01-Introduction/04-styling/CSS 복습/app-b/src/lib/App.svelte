<div class="container">
	<h1>Hello, nest!</h1>
	<div>
		A progressive Node.js framework for building efficient, reliable and scalable server-side
		applications.
	</div>
	<div class="btn-container">
		<button class="doc">Documentation</button>
		<button class="git">Source code</button>
	</div>
</div>

<style>
	.container {
		background-color: black;
	}
	h1 + div{
		color: white;
	}
	h1{
		color: white;
		padding-top: 50px;
	}
	h1,
	h1 + div{
		padding-left: 30px;
	}
	.btn-container {
		padding: 50px;
	}

	button {
		border-style: solid;
		border-width: 2px;
		border-radius: 30px;
		text-align: center;
		padding: 14px 28px;
		min-width: 230px;
		color: white;
		margin: 0px 30px;
	}

	.doc {
		background-color: #ea2845;
		border: 2px #ea2845 solid;
	}
	.doc:hover {
		background-color: black;
	}

	.git {
		background-color: black;
		border: 2px white solid;
	}
	.git:hover {
		color: #ea2845;
		border: 2px #ea2845 solid;
	}
</style>
