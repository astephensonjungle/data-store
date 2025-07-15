export function FormErrorMessage({ errors }: { errors?: (string | { message?: string } | undefined)[] | undefined }) {
	if (!errors || errors.length === 0) {
		return null;
	}

	const errorMessages = errors
		.map((error) => {
			if (typeof error === "string") {
				return error;
			}
			return error?.message;
		})
		.filter(Boolean);

	if (errorMessages.length === 0) {
		return null;
	}

	return <p className="font-medium text-red-500 text-sm">{errorMessages.join(", ")}</p>;
}
