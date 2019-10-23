/**
 *	cache DOM
 */
const $loginBtn = $('#btn-login');
const $username = $('#username');
const $password = $('#password');

/**
 *	bind event
 */
$loginBtn.on('click', login);

/**
 *	init
 */
console.log('57a130a38880eaf2467aed1ffa337c88c61e319b26cdb25faaed22b7b422192b');
console.log(sha256('hms5232'));


async function login() {
	let username = $username.val();
	let password = sha256($password.val());
	let login_info = {
		username: username,
		password: password
	};

	try {
		const response = await User.login(login_info);
		if(!response.ok){
			throw response;
		}
	} catch (e) {
		if (e.status && e.status === 401) {
			alert('請登入。');
			location.href = "./index.html";
		} else {
			e.json && e.json().then((data) => {
				console.error(data);
				alert(`ERROR: \n${data.messages[0]}`);
			})
		}
	}
}