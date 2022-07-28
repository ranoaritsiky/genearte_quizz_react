import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";






function AppBarTodo() {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{textAlign:'center'}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <b>
            Question Form
            </b>
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch   defaultChecked />} />
          </FormGroup>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarTodo;
