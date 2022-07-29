import Head from "next/head";
import { useEffect, useState } from "react";

export default function Login() {
	const [isAuth, setAuth] = useState(false);

	useEffect(() => {
		console.count("oke");
		if (window?.location?.hash) {
			let uri = decodeURI(window.location.hash).replace("#", "?");
			let param = new URLSearchParams(uri);
			var date = new Date();
			date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
			document.cookie = `access_token=${param.get(
				"access_token"
			)}; expires=${date.toUTCString()}; path=/`;
			history.replaceState(null, null, " ");
		}

		let at =
			decodeURIComponent(
				document.cookie.replace(
					new RegExp(
						"(?:(?:^|.*;)\\s*" +
							encodeURIComponent("access_token").replace(
								/[\-\.\+\*]/g,
								"\\$&"
							) +
							"\\s*\\=\\s*([^;]*).*$)|^.*$"
					),
					"$1"
				)
			) || null;

		if (at) {
			setAuth(true);
			getAuth(at);
		}

		async function getAuth(token) {
			try {
				await fetch("http://localhost:8080/sanctum/csrf-cookie", {
					method: "GET",
					credentials: "include",
				});
				const data = await fetch(
					"http://localhost:8080/api/authgoogle",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						credentials: "include",
						body: JSON.stringify({
							access_token: token,
						}),
					}
				);

				const res = await data.json();
			} catch (err) {
				setAuth(false);
				console.log(err);
			}
		}
	}, []);

	function oauth2SignIn() {
		// Google's OAuth 2.0 endpoint for requesting an access token
		var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

		// Create element to open OAuth 2.0 endpoint in new window.
		var form = document.createElement("form");
		form.setAttribute("method", "GET"); // Send as a GET request.
		form.setAttribute("action", oauth2Endpoint);

		// Parameters to pass to OAuth 2.0 endpoint.
		var params = {
			client_id:
				"519993710267-nu52dhidjma2kovkas1495oc5ur46lsp.apps.googleusercontent.com",
			redirect_uri: "http://localhost:3000/login",
			scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
			include_granted_scopes: "true",
			response_type: "token",
		};

		// Add form parameters as hidden input values.
		for (var p in params) {
			var input = document.createElement("input");
			input.setAttribute("type", "hidden");
			input.setAttribute("name", p);
			input.setAttribute("value", params[p]);
			form.appendChild(input);
		}

		// Add form to page and submit it to open the OAuth 2.0 endpoint.
		document.body.appendChild(form);
		form.submit();
	}

	const handleLogin = () => {
		oauth2SignIn();
	};
	return (
		<div>
			<Head>
				<title>LOGIN</title>
			</Head>
			{isAuth || (
				<>
					<h1>Silahkan Auth</h1>
					<button onClick={handleLogin}>Login</button>
				</>
			)}

			{isAuth && <h1>Processing...</h1>}
		</div>
	);
}
