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
      backgroundColor: "#d8d8d8",
      borderRadius: 10,
      padding: 10
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? "black" : "grey",
      backgroundColor: "transparent",
    }),

    menu: (styles) => ({
      ...styles,
      borderRadius: 10,
      padding: 10,
    }),
  };

  return (
    <>
      <p>How to contact us?</p>
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
