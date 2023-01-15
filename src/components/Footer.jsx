import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Footer = (props) => {
  const ref = useRef(null);
  const f = props.onF;

  useEffect(() => {
    console.log(f);
    if (f === true) {
      ref.current.focus();
    }
  }, [f]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          bgcolor: "#f8f9fa",
          p: 6,
        }}
        component="footer"
      >
        <Typography ref={ref} variant="h6" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Always you gonna find your febs here...
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
