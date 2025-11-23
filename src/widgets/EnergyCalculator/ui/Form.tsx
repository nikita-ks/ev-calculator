import { Input, InputRange } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Buton";
import { calculatorAtom } from "@/widgets/model/calculator/calculator";
import type { CalculatorState } from "@/widgets/model/calculator/calculator.types";
import { useSetAtom } from "jotai";
import type { FC } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Field } from "./Field";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculatorSchema } from "../model/form.contracts";

const defaultValues = {
  price: 17,
};

export const CalculatorForm: FC = () => {
  const setCalculatorState = useSetAtom(calculatorAtom);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CalculatorState>({
    defaultValues,
    resolver: zodResolver(calculatorSchema),
  });
  const [currentCharge, desiredCharge] = useWatch({
    control,
    name: ["currentCharge", "desiredCharge"],
    defaultValue: { currentCharge: 50, desiredCharge: 50 },
  });

  const onSubmit = (data: CalculatorState) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    setCalculatorState(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Input
          {...register("capacity")}
          type="number"
          placeholder="For example, 75"
          label="Battery Capacity (kWh)"
          error={errors.capacity?.message}
        />
      </Field>
      <Field>
        <Input
          {...register("price")}
          type="number"
          label="Price"
          error={errors.price?.message}
        />
      </Field>
      <Field>
        <InputRange
          {...register("currentCharge", { min: 0, max: 100 })}
          label="Current charge (%)"
          currentValue={currentCharge}
          valueUnit="%"
          error={errors.currentCharge?.message}
        />
      </Field>
      <Field>
        <InputRange
          {...register("desiredCharge", { min: 0, max: 100 })}
          label="Desired charge (%)"
          currentValue={desiredCharge}
          valueUnit="%"
          error={errors.desiredCharge?.message}
        />
      </Field>
      <div className="mt-6 max-w-[min(578px,100%)] mx-auto">
        <Button type="submit">Calculate</Button>
      </div>
    </form>
  );
};
