import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="page-shell" style={{ justifyContent: "center", minHeight: "70vh" }}>
      <div className="auth-card">
        <div className="home-node">// РЕГИСТРАЦИЯ</div>
        <h1 className="page-title" style={{ fontSize: "clamp(1.4rem, 5vw, 32px)" }}>
          Новый аккаунт
        </h1>
        <p className="auth-lead">
          Почта и пароль — и можно оставлять заявки. Никаких сложных анкет.
        </p>
        <RegisterForm />
      </div>
    </div>
  );
}
