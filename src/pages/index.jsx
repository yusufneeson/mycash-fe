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
					<form className="mt-8 space-y-6">
						<div className="rounded-md shadow-sm -space-y-px p-5">
							<div>
								<label htmlFor="email">Email</label>
								<Input id="email" type="email" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
