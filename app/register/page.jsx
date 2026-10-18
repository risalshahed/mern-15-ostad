// 29.9
import AuthForm from "@/components/AuthForm";
import { registerAction } from "@/actions/auth";

export default function RegisterPage() {
  return <AuthForm action={registerAction} isRegister />;
}