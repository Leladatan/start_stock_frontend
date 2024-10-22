"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/shared/components/ui/alert";

const schema = z.object({
  email: z.string().email({ message: "Неверный формат email" }),
  password: z.string().min(6, { message: "Пароль должен содержать минимум 8 символов" }),
});

type FormData = z.infer<typeof schema>;

const SignInPage = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setLoginSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    console.log(data);
  };

  const handleForgotPassword = async (email: string) => {
    // Simulate sending reset password email
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Ссылка для сброса пароля отправлена на ${email}`);
    setShowForgotPassword(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Авторизация
          </h2>
        </div>
        <AnimatePresence>
          {!showForgotPassword ? (
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
            >
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Электронная почта
                </Label>
                <div className="mt-1">
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`appearance-none relative block w-full px-3 py-2 border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder={"Введите электронную почту"}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Пароль
                </Label>
                <div className="mt-1">
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    className={`appearance-none relative block w-full px-3 py-2 border ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder={"Введите пароль"}
                  />
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600"
                    >
                      {errors.password.message}
                    </motion.p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  variant="link"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-indigo-600 hover:text-indigo-500"
                >
                  Забыли пароль?
                </Button>
              </div>
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : loginSuccess ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : null}
                  {isSubmitting ? 'Вход...' : loginSuccess ? 'Успешно!' : 'Войти'}
                </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="mt-8 space-y-6"
            >
              <Alert>
                <AlertTitle>Забыли пароль?</AlertTitle>
                <AlertDescription>
                  Введите ваш email, и мы отправим вам ссылку для сброса пароля.
                </AlertDescription>
              </Alert>
              <Input
                type="email"
                placeholder="Введите ваш email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <div className="flex justify-between">
                <Button onClick={() => setShowForgotPassword(false)}>
                  Назад
                </Button>
                <Button onClick={() => handleForgotPassword("user@example.com")}>
                  Отправить ссылку
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignInPage;