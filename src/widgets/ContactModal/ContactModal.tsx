import React, { useState } from "react";
import { X, Phone, Mail, User, MessageSquare, Loader2 } from "lucide-react";
import { Button, Input } from "antd";
import { ContactModalWrapper } from "./ContactModalWrapper";
import { sendFeedback } from "./api/sendFeedback";
import Lottie from "lottie-react";
import animation from "../../shared/constants/animations/success.json";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactModal({
  isOpen,
  onClose,
  title = "Обратная связь",
}: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обязателен для заполнения";
    } else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState("loading");

    // Имитация отправки формы
    try {
      await sendFeedback(formData);
      setFormState("success");

      // Автоматически закрываем через 3 секунды после успеха
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.log(error);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", phone: "", email: "", message: "" });
    setErrors({});
    setFormState("idle");
    onClose();
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <ContactModalWrapper className="fixed inset-0 z-50 flex items-center justify-center animate-bounce-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-[30px] shadow-2xl max-w-md w-full mx-4 overflow-hidden border-0 animate-bounce-in z-100000">
        {/* Premium accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600" />

        {/* Close button */}
        <div className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 group">
          <Button onClick={handleClose}>
            <X className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
          </Button>
        </div>

        {formState === "success" ? (
          // Success State
          <div className="p-8 text-center">
            {/* <CheckCircle className="h-8 w-8 text-white" /> */}

            <Lottie animationData={animation} loop autoplay />
            <h3 className="font-['Montserrat'] font-semibold text-2xl text-[#0f0449] mb-2">
              Спасибо за обращение!
            </h3>
            <p className="text-gray-600 mb-4">
              Мы свяжемся с вами в ближайшее время
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
          </div>
        ) : (
          // Form State
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="font-['Montserrat'] font-semibold text-2xl text-[#0f0449] mb-2">
                {title}
              </h2>
              <p className="text-gray-600">
                Заполните форму, и мы свяжемся с вами
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-3 rounded-full" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 font-['Montserrat'] font-medium text-[#0f0449]"
                >
                  <User className="h-4 w-4 text-green-600" />
                  Имя *
                </label>

                <div className="relative">
                  <Input
                    allowClear
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`
                      w-full px-4 py-3 rounded-[15px] border-2 transition-all duration-200
                      ${
                        errors.name
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }
                      bg-white/50 backdrop-blur-sm
                      focus:shadow-lg focus:shadow-green-500/20
                    `}
                    placeholder="Введите ваше имя"
                    disabled={formState === "loading"}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 font-['Montserrat'] s12">
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 font-['Montserrat'] font-medium text-[#0f0449]"
                >
                  <Phone className="h-4 w-4 text-green-600" />
                  Телефон *
                </label>
                <div className="relative">
                  <Input
                    allowClear
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    pattern="^[+]?[0-9\s\-()]{10,}$"
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`
                      w-full px-4 py-3 rounded-[15px] border-2 transition-all duration-200 s12
                      ${
                        errors.phone
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }
                      bg-white/50 backdrop-blur-sm
                      focus:shadow-lg focus:shadow-green-500/20
                    `}
                    placeholder="+7 (___) ___-__-__"
                    disabled={formState === "loading"}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 font-['Montserrat'] s12">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 font-['Montserrat'] font-medium text-[#0f0449]"
                >
                  <Mail className="h-4 w-4 text-green-600" />
                  Почта
                </label>
                <div className="relative">
                  <Input
                    allowClear
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`
                      w-full px-4 py-3 rounded-[15px] border-2 transition-all duration-200 s12
                      ${
                        errors.email
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }
                      bg-white/50 backdrop-blur-sm
                      focus:shadow-lg focus:shadow-green-500/20
                    `}
                    placeholder="example@email.com"
                    disabled={formState === "loading"}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 font-['Montserrat'] s12">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 font-['Montserrat'] font-medium text-[#0f0449]"
                >
                  <MessageSquare className="h-4 w-4 text-green-600" />
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={3}
                  className="
                    w-full px-4 py-3 rounded-[15px] border-2 border-gray-200 
                    focus:border-green-500 transition-all duration-200
                    bg-white/50 backdrop-blur-sm resize-none
                    focus:shadow-lg focus:shadow-green-500/20
                    font-['Montserrat']
                  "
                  placeholder="Расскажите о ваших пожеланиях..."
                  disabled={formState === "loading"}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="primary"
                  onClick={handleSubmit}
                  disabled={formState === "loading"}
                  className="send"
                >
                  {formState === "loading" ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Отправляем...
                    </div>
                  ) : (
                    "Отправить заявку"
                  )}
                </Button>
              </div>

              {/* Error State */}
              {formState === "error" && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-[15px] text-center">
                  <p className="text-red-600 font-['Montserrat']">
                    Произошла ошибка. Попробуйте позже.
                  </p>
                </div>
              )}
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 font-['Montserrat']">
                * - обязательные для заполнения поля
              </p>
            </div>
          </div>
        )}
      </div>
    </ContactModalWrapper>
  );
}
