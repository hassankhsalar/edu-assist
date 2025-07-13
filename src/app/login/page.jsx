"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
    } else {
      setError(null);
      console.log("✅ Logged in:", data.user);
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 w-1/2 mx-auto">
      <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
      <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="btn btn-primary w-full">Login</button>
    </form>
  );
};

export default LoginForm;
