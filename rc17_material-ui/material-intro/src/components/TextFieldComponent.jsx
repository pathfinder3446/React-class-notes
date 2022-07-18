import { Container, Box, TextField, Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const TextFieldComp = () => {
  let error = false;
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        align="center"
        color="error"
        sx={{
          background: "#eee",
          mt: 4,
          
        }}
      >
        Textfield
      </Typography>

      <Box
        sx={{
          mt: 4,
          textAlign: "center",
        }}
      >
        <TextField
          margin="normal"
          id="email"
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          fullWidth
          error={error}
          helperText={error && "Invalid email format"}
        />

        <TextField
          margin="normal"
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          fullWidth
          error={error}
          helperText={error && "Invalid password format"}
        />
        <Button 
        
        type="submit" 
        variant="contained"
        fullWidth
        endIcon={<SendIcon />}
        sx={{mt:4}} >Submit</Button>
      </Box>
    </Container>
  );
};
export default TextFieldComp;
