"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormError from "./forms/error";
import { SignIn, GetSignInErrorMessage } from "@/services/Firebase";
import { AuthErrorCodes } from "firebase/auth";
import { log } from "console";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values: any) => {
    const { email, password } = values;
    try {
      await SignIn(email, password);
      window.location.href = "https://www.youtube.com/";
    } catch (error: any) {
      const message = GetSignInErrorMessage(error.code);
      console.log(message);
      console.log(error.code);
    }
  };

  return <></>;
}
