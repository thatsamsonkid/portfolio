import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { SubmitContactForm } from "../../shared/services/Contact-Form";
import { useGrecaptcha } from "../../shared/hooks/useGrecaptcha";
import { Button, Field } from "@unbyte-io/react-fuego";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const ContactFormWrapper = styled.div`
  padding-top: 5rem !important;

  .contact-form {
    &--inner {
      max-width: 90rem;
      border-radius: 1.5rem;
      overflow: hidden;
    }

    &-loader {
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.75);
      z-index: 1000;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;

      &.loading {
        opacity: 100;
        pointer-events: all;
      }

      img {
        width: 45rem;
        left: 50%;
        transform: translate(-50%);
        top: 17%;
      }
    }

    &-footer {
      flex-flow: column;

      @include media-breakpoint-up(md) {
        flex-flow: row;
      }

      .grecaptcha-badge {
        visibility: hidden;
      }

      .grecaptcha-terms {
        margin: 0 0 10px;
        p,
        a {
          line-height: 1.8rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const { grcExecute, setUserAction } = useGrecaptcha(
    `${publicRuntimeConfig.recaptchaKey}`
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
    grcExecute((token) => submitForm(data, token));
  };

  const submitForm = (data, token) => {
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
    <ContactFormWrapper className="p-md-5 bckgrd-sea-green">
      <div className="contact-form--inner bckgrd-white mx-auto p-3 p-md-0 position-relative">
        <div
          className={`contact-form-loader position-absolute ${
            loading ? "loading" : null
          }`}
        >
          <img
            className="position-relative"
            src="./images/am-loader.gif"
            alt="Logo"
          />
        </div>
        <div className="text-center">
          <h3
            style={{ fontSize: "3.2rem", fontWeight: 600, textAlign: "center" }}
            className="royal-blue"
          >
            Get In Touch
          </h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {showSuccess && (
                <div className="alert alert-success" role="alert">
                  Inquiry successfully sent, we will reach out to you as soon as
                  we can!
                </div>
              )}

              {showError && (
                <div className="alert alert-danger" role="alert">
                  Seems we ran into a problem. Please try again later or please
                  contact us by phone or email directly.
                </div>
              )}

              <div className="px-3 text-right">
                <span>
                  Fields with an Asterisk(<span className="text-red">*</span>)
                  are required
                </span>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6">
                <Field
                  floatLabel={true}
                  className="sm-form-field--square"
                  type="text"
                  required={true}
                  {...register("fullName", {
                    pattern: /[A-Za-z]{4}$/i,
                  })}
                  errorLabel={
                    errors.fullName?.type === "pattern" &&
                    "Full Name is required"
                  }
                >
                  Full Name
                </Field>
                <Field
                  floatLabel={true}
                  className="sm-form-field--square"
                  type="text"
                  required={true}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  errorLabel={
                    errors.email?.type === "pattern" &&
                    "Valid email is required!"
                  }
                >
                  Email
                </Field>
                <Field
                  floatLabel={true}
                  className="sm-form-field--square"
                  type="tel"
                  required={true}
                  {...register("phoneNumber", {
                    required: true,
                    pattern:
                      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                  })}
                  errorLabel={
                    errors.phoneNumber?.type === "pattern" &&
                    "Please enter a valid U.S Phone Number!"
                  }
                >
                  Phone Number
                </Field>
                <Field
                  floatLabel={true}
                  className="sm-form-field--square"
                  type="textarea"
                  required={true}
                  {...register("request", {
                    required: true,
                  })}
                  errorLabel={
                    errors.request?.type === "required" &&
                    "Please tell us how we can help!"
                  }
                >
                  Questions &amp; Comments
                </Field>
              </div>

              <div className="col-12 col-md-6">
                <img
                  className="img-fluid"
                  src="/images/SAM_1.svg"
                  alt="Quetzal Flying over Pyramids"
                />
              </div>
            </div>

            <div className="contact-form-footer d-flex justify-content-between align-content-center">
              <div className="grecaptcha-terms mb-md-0">
                <p className="sm-body mt-3">
                  This site is protected by reCAPTCHA and the Google&nbsp;
                  <a href="https://policies.google.com/privacy">
                    Privacy Policy
                  </a>
                  &nbsp;and&nbsp;
                  <a href="https://policies.google.com/terms">
                    Terms of Service
                  </a>
                  &nbsp;apply.
                </p>
              </div>

              <div className="d-flex flex-row-reverse">
                <Button
                  level="secondary"
                  className="hmdva-button hmdva-button--primary"
                  disabled={!isDirty || !isValid}
                  type="submit"
                  data-action="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </ContactFormWrapper>
  );
};

export default ContactForm;
