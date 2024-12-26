"use server";
import { z, type ZodError } from "zod";
// import { waitFor } from "@/utils/tools"; // testing

export interface ContactMeActionType {
  success?: boolean;
  title?: string;
  icon?: "success" | "error";
  validationError?: boolean;
  validationErrors?: {
    [key: string]: string[] | undefined;
  };
}

export const contactMeAction = async (
  _prevState: ContactMeActionType,
  formData: FormData,
): Promise<ContactMeActionType> => {
  // user input validation
  try {
    // zod validation schema
    const schema = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      message: z.string().min(10),
      subject: z.string().min(5),
    });

    // validation check
    schema.parse({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      subject: formData.get("subject") as string,
    });
  } catch (error) {
    console.log((error as ZodError).formErrors.fieldErrors);

    return {
      success: false,
      title: "Validation Error",
      icon: "error",
      validationError: true,
      validationErrors: (error as ZodError).formErrors.fieldErrors,
    };
  }

  // sending data to web3forms
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "2c26e1dd-7daf-4b80-9680-3ccf89d1e72a", // api key from web3forms
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        subject: formData.get("subject"),
      }),
    }).then((res) => res.json());

    console.log("res:", res);

    if (res.success) {
      return {
        success: true,
        title: "Message Sent Successfully",
        icon: "success",
      };
    } else {
      return {
        success: false,
        title: "Message Failed to Send",
        icon: "error",
      };
    }
  } catch (error) {
    console.log("error:", (error as ZodError).message);
    return {
      success: false,
      title: "Message Failed to Send",
      icon: "error",
    };
  }

  // test
  // const success = Math.random() > 0.5;
  // if (success) {
  //   return {
  //     success: true,
  //     title: "Message Sent Successfully",
  //     icon: "success",
  //   };
  // } else {
  //   return {
  //     success: false,
  //     title: "Message Failed to Send",
  //     icon: "error",
  //   };
  // }
};
