import Button from "@/components/Button";
import Input from "@/components/Input";

import { login } from "./actions";

export default function Login() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex flex-col items-center justify-center px-3xl gap-lg bg-background">
        <div className="w-full">
          <h1 className="text-h1 font-h1 text-text font-title">Login</h1>
          <p className="text-body font-body text-text-muted">
            Use seu email institucional
          </p>
        </div>

        <form className="flex flex-col w-full" action={login}>
          <Input id="email" label="Email" name="email" />
          <Input id="password" label="Senha" name="senha" type="password" />
          <Button type="submit" variant="primary">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
