import { toCapital } from "./utils";

// All regex patterns
const regex = {
	fullname:
		/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
	username: /^[a-zA-Z0-9]+$/,
	email: /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	phone: /^(0|\+?212)[0-9]{7,9}$/,
	password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W]{6,}$/,
	confirmPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W]{6,}$/,
	tags: /^[\w,]*$/,
};
// Check if a field is empty
export function checkEmpty(errors, values) {
	for (const key in values) {
		if (values[key] === "" || values[key] === 0 || !values[key]) {
			errors.empty++;
			errors.errors = [...errors.errors, key];
		}
	}
	return errors;
}
// Check the value of a field against its regex pattern
// and add the field to the errors object if it is invalid + add the error message
function checkValidity(errors, fieldKey, fieldVal) {
	if (!regex[fieldKey].test(fieldVal) && fieldVal !== "") {
		errors.errors = [...errors.errors, fieldKey];
		errors.msgs = [
			...errors.msgs,
			`${
				fieldKey !== "password" && fieldKey !== "tags"
					? `${toCapital(fieldKey)} is not valid`
					: fieldKey === "password"
					? "Password must be at least 6 characters long and contain at least one number"
					: "Tags must be separated by a comma (Tag1,Tag2,Tag3)"
			}`,
		];
	}
	return errors;
}

export function useValidate(values, options) {
	let errors = {
		msgs: [],
		empty: 0,
		errors: [],
	};
	console.log(values);
	errors = checkEmpty(errors, values);
	if (errors.empty !== 0)
		errors.msgs = [...errors.msgs, "Please fill in all fields"];
	if (options === "session" && values.tags !== "" && values.tags)
		errors = checkValidity(errors, "tags", values.tags);
	if (options === "register") {
		for (const key in values) {
			if (key !== "confirmPassword")
				errors = checkValidity(errors, key, values[key]);
		}
		if (values.password !== values.confirmPassword) {
			errors.errors = [...errors.errors, "confirmPassword"];
			errors.msgs = [...errors.msgs, "Passwords do not match"];
		}
	}
	return errors;
}
