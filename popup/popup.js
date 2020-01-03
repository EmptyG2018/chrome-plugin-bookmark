$("#login-sub").on("click", function(){
	var loginEmailVal = $("#login-input-email").val();
	var loginPwdVal = $("#login-input-pwd").val();
	if(!$.trim(loginEmailVal)) { console.log('邮箱不能为空'); return; }
	if(!$.trim(loginPwdVal)) { console.log('密码不能为空'); return; }
	// $.ajax({
	// 	url: config.url+'/api/v1/bookmark/user/getToken',
	// 	type: 'post',
	// 	data: {
	// 		email: loginEmailVal,
	// 		pwd: loginPwdVal
	// 	},
	// 	success: function(res) {
	// 		console.log(res);
	// 	},
	// 	error: function(err) {
	// 		console.log(err);
	// 	}
	// })
	$.ajax({
		url: 'https://admin.punctualcat.com/oauth/token',
		type: 'post',
		data: {
			client_id: '100008',
			client_secret: 'oBAeJKw36sG6ozStfNkhttHrwrVG6L7tYRN55T2T5qKsEhlmCcgzHRcYhhWfJyNP',
			grant_type: 'password',
			username: '17688723510',
			password: '123456'
		},
		success: function(res){
			console(res);
		},
		error: function(err){
			console(err);
		}
	})
})