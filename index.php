<?php
/**
* @author Dijo David	
* Dream code Helper file
*/
?>
<html>
	<head>
		<title>Dream Code</title>
		<link rel="stylesheet" type="text/css" href="template.css" />
		<link rel="stylesheet" type="text/css" href="css/dreamQuery.css" />
	</head>
	<body>
		<div id='wrapper'>
			<div class="classic">
				Hi User, welcome to our new project DreamCode!!
				<form action="" type="POST">
					<div>
						<label for="user_name">Username</label>
						<input type="text" class="required" name="user_name"/>
					</div>
					<div>
						<label for="user_password">Password</label>
						<input type="password" class="required" name="user_password"/>
					</div>
					<div>
						<select class="required">
							<option value="">Please select</option>
							<option value="1">choice 1</option>
							<option value="2">choice 2</option>
							<option value="3">choice 3</option>
						</select>
					</div>
					<div>
						<textarea col="15" class="required"></textarea>
					</div>
					<div>
						<input type="submit" value="Submit"/>
					</div>
				</form>
			</div>
		</div>
		<script type="text/javascript" src="lib/jquery.js"></script>
		<script type="text/javascript" src="lib/dreamQuery.js"></script>
		<script>
			$(document).ready(function(){
				$.dreamQuery.form.validationSettings.isAjax = true;
				$.dreamQuery.form.setup(function(){
					alert('call back ajax fn');
				});
			});
		</script>
	</body>
</html>