import Button from "@/components/Button";
import Input from "@/components/Input";
import { Mail, Lock, GraduationCap } from "lucide-react";

import { login } from "./actions";

export default function Login() {
  return (
    <div className="h-screen w-screen flex">
      <aside className="hidden tablet:flex w-1/2 h-full bg-primary px-lg py-3xl flex-col justify-between">
        <div className="flex items-center h-fit gap-md">
          <div className="bg-background rounded-md h-fit">
            <GraduationCap className="w-3xl h-3xl" />
          </div>
          <h2 className="font-title text-h2 text-background font-h2">
            Gestão Escolar
          </h2>
        </div>

        <div>
          <cite className="text-h1 font-h1 text-background font-title">
            “Cadastros, cursos e matrículas organizados em um único lugar para
            toda a equipe”
          </cite>
          <p className="text-h2 font-h2 text-text-muted font-title">
            - Secretária acadêmica
          </p>
        </div>

        <p className="text-body font-body text-text-muted font-text">
          V1.0 - Uso interno
        </p>
      </aside>
      <main className="h-full w-full tablet:w-1/2 flex flex-col items-center justify-center px-3xl gap-lg bg-background">
        <div className="w-full">
          <h1 className="text-h1 font-h1 text-text font-title">Login</h1>
          <p className="text-body font-body text-text-muted">
            Use seu email institucional
          </p>
        </div>

        <form className="flex flex-col w-full gap-sm" action={login}>
          <Input id="email" label="Email" name="email" required icon={Mail} />
          <Input
            id="password"
            label="Senha"
            name="senha"
            type="password"
            required
            icon={Lock}
          />
          <Button type="submit" variant="primary">
            Entrar
          </Button>
        </form>

        <p className="text-caption font-caption text-text-muted">
          Esqueceu sua senha? Fale com a coordenação.
        </p>
      </main>
    </div>
  );
}
