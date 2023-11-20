import React, { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  Container,
  Paper,
  TextField,
  Button,
} from "@mui/material";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faAward,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/common/Navbar";
import UploadButton from "../components/common/UploadButton";


function CreatePost() {
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileUpload = (file) => {
    console.log(file);
    // Here you can handle the uploaded file (e.g., send it to a server)
    // After handling the file, you can update the upload status
    setUploadStatus('File uploaded successfully!');
  };

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
          <Box>
            <TextField
              id="outlined-multiline-static"
              label="What do you want to talk about?"
              multiline
              rows={12}
              defaultValue=""
              variant="outlined"
              fullWidth
              InputProps={{
                style: { border: "none" },
              }}
            />
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div>
              <UploadButton icon={faImage} onFileUpload={handleFileUpload} />
              <UploadButton icon={faYoutube} onFileUpload={handleFileUpload} />
              <UploadButton icon={faAward} onFileUpload={handleFileUpload} />
              <UploadButton icon={faChartColumn} onFileUpload={handleFileUpload} />
            </div>
            <Button variant="contained" color="primary">
              Post
            </Button>
          </div>
          {uploadStatus && <p>{uploadStatus}</p>}
        </Paper>
      </Box>
    </Box>
  );
}

export default CreatePost;