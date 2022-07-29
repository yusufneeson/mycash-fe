import Input from "../components/Input";

export default function Home() {
	return (
		<>
			<div className="min-h-full flex items-center justify-center">
				<div className="max-w-md w-full space-y-8">
					<div>
						<h2 className="mt-6 text-center text-3xl font-bold text-gray-800">
							Sign in to your account
						</h2>
					</div>
					<div className="rounded-md shadow-sm py-6 px-5 border border-gray-100">
						<div className="grid gap-6">
							<button className="h-12 px-6 border border-blue-50 rounded-lg bg-blue-50">
								<div className="flex items-center space-x-4 justify-center">
									<span className="block w-max font-medium tracking-wide text-sm text-blue-700">
										with Google
									</span>
								</div>
							</button>
						</div>

						<div className="mt-12 border-t">
							<span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
								OR
							</span>
						</div>

						<form className="mt-8 space-y-6">
							<div>
								<label
									htmlFor="email"
									className="text-gray-600"
								>
									Email
								</label>
								<Input id="email" type="email" />
							</div>
							<div className="mt-4">
								<label
									htmlFor="password"
									className="text-gray-500"
								>
									Password
								</label>
								<Input id="password" type="password" />
							</div>
							<div className="mt-8">
								<button className="w-full rounded-lg px-6 py-2 bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-700">
									<span className="text-white font-medium text-lg">
										Login
									</span>
								</button>
								<a
									href="#"
									className="text-sm tracking-wide mt-3 block text-sky-600"
								>
									Create new account
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
