import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="page-shell" style={{ justifyContent: "center", minHeight: "70vh" }}>
      <div className="auth-card">
        <div className="home-node">// ВХОД В КАБИНЕТ</div>
        <h1 className="page-title" style={{ fontSize: "clamp(1.4rem, 5vw, 32px)" }}>
          Личный кабинет
        </h1>
        <p className="auth-lead">
          Здесь можно оставить заявку на ремонт, софт или дрон и следить, как она идёт.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
