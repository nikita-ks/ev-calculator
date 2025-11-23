import {
  approximateCostAtom,
  capacityDiffAtom,
  percentageDiffAtom,
} from "@/widgets/model/calculator/calculator";
import { useAtomValue } from "jotai";
import type { FC } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type TProps = {
  label: string;
  value: string;
};

const Field: FC<TProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-md text-text-secondary">{label}</span>
      <span className="text-lg text-text-primary">{value}</span>
    </div>
  );
};

export const Result: FC = () => {
  const percentageDiff = useAtomValue(percentageDiffAtom);
  const capacityDiff = useAtomValue(capacityDiffAtom);
  const approximateCost = useAtomValue(approximateCostAtom);

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-xl font-bold">Result</h2>
      <div className="mt-3 rounded-md bg-secondary p-3 flex items-start gap-x-4 h-full">
        <div className="flex flex-col gap-y-2">
          <Field label="Need to add" value={`${percentageDiff}%`} />
          <Field label="This is in kWh" value={`${capacityDiff} kWh`} />
          <Field label="Approximate cost" value={`${approximateCost} UAH`} />
        </div>
        <div className="grow flex items-center justify-center h-full">
          <div className="w-32 h-36 flex">
            <CircularProgressbar
              value={percentageDiff}
              text={`${percentageDiff}%`}
              strokeWidth={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
