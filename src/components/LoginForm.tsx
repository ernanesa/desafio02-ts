import { Field, Input, Stack } from "@chakra-ui/react";
import type { ChangeEvent, SubmitEvent as ReactSubmitEvent } from "react";
import { useState } from "react";
import { Button } from "./Button";
import { validateLogin, type LoginErrors, } from "../services/validation";

export type LoginFormData = {
  name: string;
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmit?: (data: LoginFormData) => void;
};

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>,): void => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (
    event: ReactSubmitEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();

    const validationErrors = validateLogin({
      email,
      password,
    });

    setErrors(validationErrors);

    if (
      validationErrors.email ||
      validationErrors.password
    ) {
      return;
    }

    onSubmit?.({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Stack gap="6">
        <Field.Root required>
          <Field.Label color="dio.text">
            Nome
          </Field.Label>

          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Digite seu nome"
            autoComplete="name"
            color="dio.text"
            bg="dio.canvas"
            borderColor="dio.border"
            onChange={handleNameChange}
          />
        </Field.Root>
        <Field.Root
          required
          invalid={Boolean(errors.email)}
        >
          <Field.Label color="dio.text">
            E-mail
          </Field.Label>

          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="voce@exemplo.com"
            autoComplete="email"
            color="dio.text"
            bg="dio.canvas"
            borderColor="dio.border"
            onChange={handleEmailChange}
          />

          {errors.email && (
            <Field.ErrorText>
              {errors.email}
            </Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root
          required
          invalid={Boolean(errors.password)}
        >
          <Field.Label color="dio.text">
            Senha
          </Field.Label>

          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="Digite sua senha"
            autoComplete="current-password"
            color="dio.text"
            bg="dio.canvas"
            borderColor="dio.border"
            onChange={handlePasswordChange}
          />

          {errors.password && (
            <Field.ErrorText>
              {errors.password}
            </Field.ErrorText>
          )}
        </Field.Root>

        <Button type="submit">Entrar</Button>
      </Stack>
    </form>
  );
}
