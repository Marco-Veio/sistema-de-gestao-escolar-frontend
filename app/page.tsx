import Button from "@/components/Button";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-xs bg-background">
      <div>
        <h1 className="text-h1 font-h1 text-text">Login</h1>
        <p className="text-body font-body text-text-muted">
          Use seu email institucional
        </p>
      </div>

      <form>
        <Button variant="danger" disabled>
          Entrar
        </Button>
      </form>

      <p className="text-caption font-caption text-text-muted">
        Esqueceu sua senha? Fale com a coordenação.
      </p>
    </div>
  );
}
