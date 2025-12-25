import { Input, InputRange } from "@/shared/ui/Input";
import { calculatorAtom } from "@/widgets/model/calculator/calculator";
import type { CalculatorState } from "@/widgets/model/calculator/calculator.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useCallback, type FC } from "react";
import { useForm, useWatch } from "react-hook-form";
import { calculatorSchema } from "../model/form.contracts";
import { Field } from "./Field";

export const CalculatorForm: FC = () => {
  const [state, setState] = useAtom(calculatorAtom);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CalculatorState>({
    mode: "onChange",
    defaultValues: state,
    resolver: zodResolver(calculatorSchema),
  });

  const [currentCharge, desiredCharge] = useWatch({
    control,
    name: ["currentCharge", "desiredCharge"],
  });

  const onSubmit = useCallback(
    (data: CalculatorState) => {
      setState(data);
    },
    [setState]
  );

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <Field>
        <Input
          {...register("capacity", { valueAsNumber: true })}
          type="number"
          placeholder="For example, 75"
          label="Battery Capacity (kWh)"
          inputMode="numeric"
          pattern="[0-9]*"
          error={errors.capacity?.message}
        />
      </Field>
      <Field>
        <Input
          {...register("price")}
          type="number"
          label="Price"
          inputMode="numeric"
          pattern="[0-9]*"
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
    </form>
  );
};
