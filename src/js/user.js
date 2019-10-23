var User = (function () {
	var _userInfo;
	const baseUrl = env.baseUrl;

	function _setUserInfo(userInfo) {
		_userInfo = userInfo;
	}

	function login(login_info) {
		return fetch(baseUrl + '/user-login', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(login_info)
		});
	}

	return {
		login,
	};
})();
