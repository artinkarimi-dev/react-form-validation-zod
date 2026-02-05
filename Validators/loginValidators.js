import * as z from "zod";

const loginSchema = z.object({
  username: z
    .string({
      required_error: "The username is required.",
      invalid_type_error: "The username must be text only.",
    })
    .min(1, "The username is required.") // handles empty string
    .min(3, "Your username must be at least three characters.")
    .max(30, "Your username must not be more than 30 characters.")
    .regex(
      /^(?!.*[._]{2})[a-zA-Z][a-zA-Z0-9._]{1,28}[a-zA-Z0-9]$/,
      "Usernames may contain only letters, numbers, dots, and underscores, must start with a letter, and cannot contain consecutive dots or underscores."
    ), // regex length aligned with min/max


  email: z
    .string({
      required_error: "The email is required.", // undefined only
      invalid_type_error: "The email must be text only.",
    })
    .min(1, "The email is required.") // empty string
    .email("Invalid email format.")   // RFC format
    .regex(
      /^(?!.*\.\.)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/i,
      "Invalid email structure."     // structural sanity
    ),


  password: z
    .string({
      required_error: "The password is required.",
      invalid_type_error: "The password must be text only.",
    })
    .min(1, "The password is required.") // empty string guard
    .min(8, "Your password must be at least eight characters.")
    .max(64, "Your password must not be more than 64 characters.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,64}$/,
      "The password must be 8–64 characters long and include uppercase and lowercase letters, a number, and a special character."
    ), // single source of complexity
});

export default loginSchema;
