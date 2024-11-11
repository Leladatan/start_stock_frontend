"use client"

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Loader2} from "lucide-react";
import {Button} from "@/shared/components/ui/button";
import {Input} from "@/shared/components/ui/input";
import {Label} from "@/shared/components/ui/label";
import {Progress} from "@/shared/components/ui/progress";
import confetti from "canvas-confetti";

const schema = z.object({
  email: z.string().email({message: "Неверный формат email"}),
  password: z.string().min(8, {message: "Пароль должен содержать минимум 8 символов"}),
  confirmPassword: z.string(),
  firstName: z.string().min(2, {message: "Имя должно содержать минимум 2 символа"}),
  lastName: z.string().min(2, {message: "Фамилия должна содержать минимум 2 символа"}),
  middleName: z.string().min(2, {message: "Отчество должно содержать минимум 2 символа"}),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

const SignUpPage = () => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {register, handleSubmit, formState: {errors}, watch} = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const password = watch("password", "");
  const passwordStrength = password.length >= 12 ? 100 : (password.length / 12) * 100;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {y: 0.6},
    });
    console.log(data);
  };

  const steps = [
    {title: "Учетные данные", fields: ["email", "password", "confirmPassword"]},
    {title: "Личная информация", fields: ["lastName", "firstName", "middleName"]},
  ];

  return (
      <section
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-backgrounds-orange to-backgrounds-blue py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-backgrounds-light p-10 rounded-xl shadow-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-text-indigo">
              Регистрация
            </h2>
            <Progress value={(step / steps.length) * 100} className="mt-4"/>
          </div>
          <AnimatePresence mode="wait">
            <motion.form
                key={step}
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -50}}
                transition={{duration: 0.3}}
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-6"
            >
              {steps[step - 1].fields.map((field) => (
                  <div key={field}>
                    <Label htmlFor={field} className="block text-sm font-medium text-text-gray">
                      {field === "email" ? "Email" :
                          field === "password" ? "Пароль" :
                              field === "confirmPassword" ? "Подтвердите пароль" :
                                  field === "firstName" ? "Имя" :
                                      field === "lastName" ? "Фамилия" : "Отчество"
                      }
                    </Label>
                    <div className="mt-1 relative">
                      <Input
                          id={field}
                          type={field.includes("password") || field.includes("confirmPassword") ? "password" : "text"}
                          {...register(field as keyof FormData)}
                          className={`appearance-none relative block w-full px-3 py-2 border ${
                              errors[field as keyof FormData] ? 'border-backgrounds-red' : 'border-backgrounds-gray'
                          } placeholder-text-gray text-text-indigo rounded-md focus:outline-none focus:ring-backgrounds-blue focus:border-backgrounds-blue focus:z-10 sm:text-sm`}
                          placeholder={field === "email" ? "Введите ваш email" :
                              field === "password" ? "Введите пароль" :
                                  field === "confirmPassword" ? "Подтвердите пароль" :
                                      field === "firstName" ? "Введите ваше имя" :
                                          field === "lastName" ? "Введите вашу фамилию" : "Введите ваше отчество"
                          }
                      />
                      {errors[field as keyof FormData] && (
                          <motion.p
                              initial={{opacity: 0, y: -10}}
                              animate={{opacity: 1, y: 0}}
                              className="mt-2 text-sm text-text-red"
                          >
                            {errors[field as keyof FormData]?.message}
                          </motion.p>
                      )}
                    </div>
                  </div>
              ))}
              {step === 1 && (
                  <div>
                    <Label className="block text-sm font-medium text-text-gray">Надежность пароля</Label>
                    <Progress value={passwordStrength} className="mt-1"/>
                  </div>
              )}
              <div className="flex justify-between">
                {step > 1 && (
                    <Button type="button" onClick={() => setStep(step - 1)} className="bg-backgrounds-gray text-text-light hover:bg-backgrounds-indigo">
                      Назад
                    </Button>
                )}
                {step < steps.length ? (
                    <Button type="button" onClick={() => setStep(step + 1)} className="bg-backgrounds-blue text-text-light hover:bg-backgrounds-indigo">
                      Далее
                    </Button>
                ) : (
                    <Button type="submit" disabled={isSubmitting} className="bg-backgrounds-blue text-text-light hover:bg-backgrounds-indigo">
                      {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                            Регистрация...
                          </>
                      ) : (
                          'Зарегистрироваться'
                      )}
                    </Button>
                )}
              </div>
            </motion.form>
          </AnimatePresence>
        </div>
      </section>
  );
};

export default SignUpPage;