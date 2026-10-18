// 29.10
import AuthForm from "@/components/AuthForm";
import { loginAction } from "@/actions/auth";

export default function LoginPage() {
  return <AuthForm action={loginAction} />;
}