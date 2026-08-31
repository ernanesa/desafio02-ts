import { Input, Stack } from "@chakra-ui/react";
import type { ChangeEvent, SubmitEvent as ReactSubmitEvent } from "react";
import { useState } from "react";
import { Button } from "./Button";

export type LoginFormData = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmit?: (data: LoginFormData) => void;
};

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: ReactSubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit?.({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="4">
        <label htmlFor="email">E-mail</label>
        <Input id="email" name="email" type="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <Button type="submit">Entrar</Button>
      </Stack>
    </form>
  );
}
