import { useAppSelector } from "../../storeHooks";

import { FormContainer, StyledTextField } from "../StyledComponents";
import TextField from "@mui/material/TextField";
import { colors } from "../StyledComponents";

const Contact = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <FormContainer>
      <TextField
        label="Név - kötelező"
        type="Text"
        variant="outlined"
        fullWidth
        sx={textfieldSx}
        InputLabelProps={textInputLabelProps}
        InputProps={textInputProps}
      />
      <TextField
        label="E-mail cím - kötelező"
        type="Text"
        variant="outlined"
        fullWidth
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
