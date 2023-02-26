"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitContactForm } from "../../shared/services/Contact-Form";
import { useGrecaptcha } from "../../shared/hooks/useGrecaptcha";
import { Field } from "@fuego-ui/react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const { grcExecute, setUserAction } = useGrecaptcha(
    `${process.env.recaptchaKey}`
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      request: "",
    },
  });

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    setShowError(false);
    setShowSuccess(false);
    setLoading(true);
    setUserAction("submit");
    grcExecute((token: any) => submitForm(data, token));
  };

  const submitForm = (data: any, token: any) => {
    SubmitContactForm({ ...data, token: token })
      .then((res) => {
        if (res instanceof Error) {
          throw res;
        }
        setLoading(false);
        setShowSuccess(true);
        // reset form
        reset({
          fullName: "",
          email: "",
          phoneNumber: "",
          request: "",
        });
      })
      .catch((e) => {
        console.error(e);
        setShowError(true);
        setLoading(false);
      });
  };

  return (
    <form className="max-w-[300px] flex flex-col gap-5 mx-auto bg-booboo">
      <Field
        floatLabel={true}
        required={true}
        className="input-bordered"
        {...register("fullName", {
          pattern: /[A-Za-z]{3}$/i,
        })}
        fieldErrors={errors.fullName ? true : false}
        errorLabel={errors.fullName && "Please let me know what to call you!"}
      >
        Name
      </Field>

      <Field
        floatLabel={true}
        className="input-bordered"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        fieldErrors={errors.email ? true : false}
        errorLabel={errors.email && "A valid email is required!"}
      >
        Email
      </Field>

      <Field
        floatLabel={true}
        className="input-bordered"
        type="textarea"
        {...register("request", {
          required: true,
          pattern: /^.{20,}$/,
        })}
        fieldErrors={errors.request ? true : false}
        errorLabel={errors.request && "Tell me why you are reaching out!"}
      >
        Request
      </Field>

      <div className="contact-form-footer d-flex justify-content-between align-content-center">
        <div className="grecaptcha-terms mb-md-0">
          <p className="text-xs mt-3 text-left">
            This site is protected by reCAPTCHA and the Google&nbsp;
            <a
              className="link link-hover link-accent"
              href="https://policies.google.com/privacy"
            >
              Privacy Policy
            </a>
            &nbsp;and&nbsp;
            <a
              className="link link-hover link-accent"
              href="https://policies.google.com/terms"
            >
              Terms of Service
            </a>
            &nbsp;apply.
          </p>
        </div>

        <div className="flex flex-row-reverse">
          <button
            className="bg-white text-hip-black min-h-[40px] min-w-[120px] rounded-3xl self-end mt-5"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
