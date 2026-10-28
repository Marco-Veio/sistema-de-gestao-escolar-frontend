import Button from "@/components/Button";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.screen}>
      <div className={styles.aside}>
        <p>Gestão Escolar</p>
      </div>
      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.subtitle}>Use seu email institucional</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>E-mail</label>
            <input
              className={styles.input}
              placeholder="E-mail"
              type="email"
              autoComplete="email"
            />
            <p className={styles.inputCaption}></p>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Senha</label>
            <input
              className={styles.input}
              placeholder="Senha"
              type="password"
            />
            <p className={styles.inputCaption}></p>
          </div>

          <Button variant="danger" disabled>Entrar</Button>
        </form>

        <p className={styles.caption}>
          Esqueceu sua senha? Fale com a coordenação.
        </p>
      </div>
    </div>
  );
}
