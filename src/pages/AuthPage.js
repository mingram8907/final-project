import { useState } from "react";

import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LogInForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <h1>Auth Page</h1>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "New User? Create Account" : "Already have an account? Log In"}
      </button>
    </main>
  );
}

export default AuthPage;
