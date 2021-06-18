import { Locale } from "../core/Locale";

export class Auth extends Locale {
    
    constructor() {

        super();

        this.name = 'Autenticação';

        this.fields = {
            email: 'E-mail',

            expiresIn: 'Expira em'
        };

        this.messages = {
            successfully_logged_in: 'Login realizado com sucesso!',

            successfully_logged_out: 'Logout realizado com sucesso!',

            user_not_found: 'Usuário não encontrado.'
        };
    }
}