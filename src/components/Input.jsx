const Input = ({ disabled = false, className, ...props }) => (
	<input
		disabled={disabled}
		className={`${className} block mt-1 w-full border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
		{...props}
	/>
);

export default Input;
