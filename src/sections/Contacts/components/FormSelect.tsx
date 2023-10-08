import { FC } from "react";
import Select, { StylesConfig } from "react-select";
import { ContactsValues } from "../../../d";
import { options } from "../../../constants";

type FormSelectProps = {
  values: ContactsValues,
}

export const FormSelect: FC<FormSelectProps> = ({ values }) => {

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      borderRadius: 40,
      padding: 10
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? "black" : "grey",
      backgroundColor: "transparent",
    }),

    menu: (styles) => ({
      ...styles,
      borderRadius: 40,
      padding: 10,
    }),
  };

  return (
    <>
      <Select
        defaultValue={options[0]}
        options={options}
        styles={colourStyles}
        isSearchable={false}
        // @ts-ignore
        onChange={(newValue: { value: string }) => {
          if (newValue) values.option = newValue.value;
        }}
      />
    </>
  )
}
