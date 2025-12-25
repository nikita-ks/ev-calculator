import { z } from "zod";

export const calculatorSchema = z
  .object({
    capacity: z.coerce
      .number<number>("Enter capacity")
      .min(10, { error: "Should be more than 10" })
      .max(300, { error: "Should be less than 300" }),
    price: z.coerce.number<number>().min(0),
    currentCharge: z.coerce.number<number>().min(0).max(100),
    desiredCharge: z.coerce.number<number>().min(0).max(100),
  })
  .refine(
    (data) => {
      return data.currentCharge <= data.desiredCharge;
    },
    {
      error: "Desired % should be more than current %",
      path: ["desiredCharge"],
    }
  );
