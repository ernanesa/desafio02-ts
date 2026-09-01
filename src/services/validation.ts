export type LoginErrors = {
    email?: string;
    password?: string;
};

type LoginInput = {
    email: string;
    password: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLogin({
    email,
    password,
}: LoginInput): LoginErrors {
    const errors: LoginErrors = {};

    if (!email.trim()) {
        errors.email = "Informe seu e-mail.";
    } else if (!emailPattern.test(email.trim())) {
        errors.email = "Informe um e-mail válido.";
    }

    if (!password) {
        errors.password = "Informe sua senha.";
    } else if (password.length < 6) {
        errors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    return errors;
}