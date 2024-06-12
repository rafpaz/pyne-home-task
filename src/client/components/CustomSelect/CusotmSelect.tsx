import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CustomSelectProps {
  onValueChange: (value: string) => void;
  placeholder: string;
  values: Array<{ value: string; display: string }>;
  selectLabel: string;
}

const CustomSelect = ({
  onValueChange,
  placeholder,
  selectLabel,
  values,
}: CustomSelectProps) => (
  <Select onValueChange={onValueChange}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{selectLabel}</SelectLabel>
        {values.map(({ value, display }) => (
          <SelectItem key={value} className="cursor-pointer" value={value}>
            {display}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default CustomSelect;
