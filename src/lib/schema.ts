import { z } from "zod";

export const UserSignUpSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d).+/,
        "Password must contain at least one letter and one number"
      ),
    
  
  });

  export const UserSignInSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters").regex(new RegExp(/^(?=.*[A-Za-z])(?=.*\d).+/), "Password must contain atleast one character and one number")
  });

export type UserSignUpSchemaType = z.infer<typeof UserSignUpSchema>
export type UserSignInSchemaType = z.infer<typeof UserSignInSchema>