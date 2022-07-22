import { useAppDispatch, useAppSelector } from "../../storeHooks";

import { FormContainer } from "../StyledComponents";
import TextField from "@mui/material/TextField";
import { colors } from "../StyledComponents";
import { updateEmail, updateName } from "../../features/user";
import React from "react";

const Contact = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const setName = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateName({ name: e.target.value }));
  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateEmail({ email: e.target.value }));

  return (
    <FormContainer>
      <TextField
        label="Név - kötelező"
        type="Text"
        variant="outlined"
        fullWidth
        value={user.name}
        onChange={setName}
        sx={textfieldSx}
        InputLabelProps={textInputLabelProps}
        InputProps={textInputProps}
      />
      <TextField
        label="E-mail cím - kötelező"
        type="Text"
        variant="outlined"
        fullWidth
        value={user.email}
        onChange={setEmail}
        sx={textfieldSx}
        InputLabelProps={textInputLabelProps}
        InputProps={textInputProps}
      />
    </FormContainer>
  );
};

const textfieldSx = {
  marginTop: "24px",
  ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
    color: colors.dark,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: colors.dark,
    },
  },
  input: {
    color: colors.dark,
  },
};

const textInputProps = {
  sx: {
    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      color: "red",
      border: `2px solid ${colors.dark}`,
    },
    "&:hover": {
      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${colors.dark}`,
      },
    },
    "&:focused": {
      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${colors.dark}`,
      },
    },
  },
};

const textInputLabelProps = {
  style: { color: colors.dark },
};

export default Contact;
