import { Auth } from "./translations/Auth";
import { SystemErrors } from "./translations/SystemErrors";
import { Users } from "./translations/Users";

export const Dictionary = {
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users()
};

console.log(Dictionary.users.getMessage('invalid_type', {
	field: 'email',
	type: 'number'
}));