import React from "react";
import {
  Typography,
  Box,
  Divider,
  Container,
  Paper,
  TextField,
} from "@mui/material";
import Attachments from "../components/Post/Attachments";
import Navbar from "../components/common/Navbar";

function CreatePost() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ p: 3, mt: "10vh" }}>
        <Typography
          sx={{
            color: "#000",
            fontFamily: "Montserrat",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "normal",
          }}
        >
          Create a Post
        </Typography>
        <Paper
          sx={{
            my: 5,
            p: 3,
            backgroundColor: "white",
            borderRadius: "2",
            width: "702px",
            height: "400px",
            flexShrink: "0",
          }}
          elevation={1}
        >
          <TextField label="Enter Text" variant="outlined" sx={{ml:-1.5,width:"680px", display:"flex", border:"none"}}></TextField>
        </Paper>
      </Box>
    </Box>
  );
}

export default CreatePost;
