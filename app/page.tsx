import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.main}>
      <div>
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
          <input className={styles.input} placeholder="Senha" type="password" />
          <p className={styles.inputCaption}></p>
        </div>

        <button className={styles.button}>Entrar</button>
      </form>

      <p className={styles.caption}>
        Esqueceu sua senha? Fale com a coordenação.
      </p>
    </div>
  );
}
