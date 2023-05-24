import { useState } from "react";

export function useValidate() {
	const [error, setError] = useState({});
	const patternName = /^[A-ZА-ЯЁ'][a-z-а-яё' ]+[a-zа-яё']?$/g;
	const patternPhone = /^\+375\(\d{2}\)\d{7}$/;
	const patternStreet = /[A-Za-z0-9 a-zA-Zа-яА-ЯёЁ]/g;
	const patternHouse = /^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i;
	const patternFlat = /^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i;
	const patternEntrance = /[1-9][0-9]{0,2}/;
	const patternFloor = /[1-9][0-9]{0,2}/;

	function validate(name, value) {
		switch (name) {
			case "name": {
				if (value.length < 4 || value.length > 8) {
					setError({ ...error, name: "Incorrect length" });
				} else if (!patternName.test(value)) {
					setError({ ...error, name: "Incorrect name" });
				} else {
					setError({ ...error, name: "" });
				}
				break;
			}
			case "phone": {
				if (!patternPhone.test(value)) {
					setError({ ...error, phone: "Please enter valid mobile number" });
				} else {
					setError({ ...error, phone: "" });
				}
				break;
			}
			case "street": {
				if (value.length < 4) {
					setError({ ...error, street: "Incorrect length" });
				} else if (!patternStreet.test(value)) {
					setError({ ...error, street: "Incorrect name of street" });
				} else {
					setError({ ...error, street: "" });
				}
				break;
			}
			case "house": {
				if (!patternHouse.test(value)) {
					setError({ ...error, house: "Incorrect number of house" });
				} else {
					setError({ ...error, house: "" });
				}
				break;
			}
			case "flat": {
				if (!patternFlat.test(value)) {
					setError({ ...error, flat: "Incorrect value of flat" });
				} else {
					setError({ ...error, flat: "" });
				}
				break;
			}
			case "entrance": {
				if (!patternEntrance.test(value)) {
					setError({ ...error, entrance: "Incorrect value of entrance" });
				} else {
					setError({ ...error, entrance: "" });
				}
				break;
			}
			case "floor": {
				if (!patternFloor.test(value)) {
					setError({ ...error, floor: "Incorrect value of floor" });
				} else {
					setError({ ...error, floor: "" });
				}
				break;
			}
			case "agreement": {
				if (value === false) {
					setError({ ...error, agreement: "You must accept the terms" });
				} else {
					setError({ ...error, agreement: "" });
				}
				break;
			}

			default:
				break;
		}
	}

	return { error, validate };
}
