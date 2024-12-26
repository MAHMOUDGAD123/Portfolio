"use client";
import Spinner from "@/components/animation/Spinner";
import CustomInput from "@/components/decoration/CustomInput";
import { contactMeAction } from "@/utils/actions";
import { useActionState, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

export default function ContactMeForm() {
  const SubmitBtnEle = useRef<HTMLButtonElement>(null);
  const [canSend, setCanSend] = useState(false);
  const [state, action, isPending] = useActionState(contactMeAction, {});

  const onSubmitBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // submit the form if canSend is true
    if (canSend) return;

    // prevent form submission if canSend is false
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You want to send this message?",
      icon: "warning",
      iconColor: "var(--prm-col-1)",
      color: "var(--prm-col-1)",
      background: "light-dark(#ddddddc0,#222222c0)",
      showCancelButton: true,
      confirmButtonColor: "var(--prm-col-1)",
      cancelButtonColor: "var(--prm-col-2)",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? false
        : true,
    }).then((result) => {
      if (result.isConfirmed) {
        // if user confirms sending message allow form submission
        setCanSend(true);
      }
    });
  };

  // will run if canSend is true (submit the form)
  useEffect(() => {
    if (canSend) {
      SubmitBtnEle.current!.click();
    }
  }, [canSend]);

  // will run if state changes & canSend is true
  // state changes when the form is submitted
  useEffect(() => {
    if (canSend) {
      const { title, icon } = state;

      Swal.fire({
        toast: true,
        position: "bottom-end",
        width: "max-content",
        showConfirmButton: false,
        allowOutsideClick: true,
        allowEscapeKey: true,
        timer: 5000,
        background: "light-dark(#ddddddc0,#222222c0)",
        iconColor: "var(--prm-col-1)",
        color: "var(--prm-col-1)",
        icon: icon,
        title: title,
        draggable: true,
        animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? false
          : true,
      });

      setCanSend(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form
      noValidate
      action={action}
      className="flex w-full animate-settleLeft flex-col gap-[35px] rounded-[20px] bg-[linear-gradient(-90deg,var(--prm-col-3),transparent,var(--prm-col-5))] p-[20px] motion-reduce:animate-none"
    >
      <p className="text-[25px] font-extrabold text-dodgerblue">
        Let&apos;s Connect
      </p>
      <CustomInput
        key="name"
        type="text"
        name="name"
        placeholder="Name"
        errorMessage={state?.validationErrors?.name?.[0]}
      />

      <CustomInput
        key="email"
        type="email"
        name="email"
        placeholder="Email"
        errorMessage={state?.validationErrors?.email?.[0]}
      />

      <CustomInput
        key="subject"
        type="text"
        name="subject"
        placeholder="Subject"
        errorMessage={state?.validationErrors?.subject?.[0]}
      />

      <CustomInput
        isTextArea
        key="message"
        name="message"
        placeholder="Your message"
        errorMessage={state?.validationErrors?.message?.[0]}
      />

      {isPending ? (
        <Spinner />
      ) : (
        <button
          ref={SubmitBtnEle}
          type="submit"
          onClick={onSubmitBtnClick}
          className="mb-[7px] mt-[17px] w-[100px] self-center text-center"
        >
          Send
        </button>
      )}
    </form>
  );
}
