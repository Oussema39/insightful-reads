import { Button, ButtonProps, styled } from "@mui/material";

const CustomButton = styled(Button)<ButtonProps>({
  boxShadow: "none",
  textTransform: "lowercase",
});

export default CustomButton;
