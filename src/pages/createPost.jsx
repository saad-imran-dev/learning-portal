import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
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
  const [postId, setPostId] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");

  const handlePostClick = async () => {
    try {
      // First API call to create a post
      const response = await axios.post(
        "https://localhost:7039/Post/CreatePost",
        {
          title: title,
          content: content,
          courseId: courseId,
        },
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjE5IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidGVhY2hlciIsImV4cCI6MTcwMDc0NzgyOX0.klVEeF_NkcaVJqZ514wsNryHg2WpBzdIJLE3uJvvgKxU7tuWYMcNY9z7haHo6NRpNAvCUa0wj9gDghV5qTuAfQ",
          },
        }
      );

      // Extract postId from the first API response
      const createdPostId = response.data.postId;
      console.log(createdPostId);
      // Update postId using setPostId
      setPostId(response.data.postId);
      console.log("Post id: ",postId);
      console.log("Post created successfully!");

      // Call the second API to upload files using the postId obtained from the first API response
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await axios.post(
          `https://localhost:7039/Attachment/Store/${createdPostId}`,
          formData,
          {
            headers: {
              Authorization:
                "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjE5IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidGVhY2hlciIsImV4cCI6MTcwMDc0NzgyOX0.klVEeF_NkcaVJqZ514wsNryHg2WpBzdIJLE3uJvvgKxU7tuWYMcNY9z7haHo6NRpNAvCUa0wj9gDghV5qTuAfQ",
            },
          }
        );

        console.log("Files uploaded successfully:", uploadResponse);
      }
    } catch (error) {
      console.error("Failed to create post or upload files!", error);
    }
  };

  const handleCourseSelection = (event) => {
    setCourseId(event.target.value);
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
            width: "100%",
            height: "500px",
            flexShrink: "0",
          }}
          elevation={1}
        >
          <Box>
            <TextField
              label="Title"
              defaultValue=""
              variant="outlined"
              onChange={(event) => setTitle(event.target.value)}
              sx={{
                width:"600px",
                mr:"20px"
              }}
            >
              </TextField>
            <Select
              value={courseId}
              onChange={handleCourseSelection}
              displayEmpty
              sx={{ ariaLabel: "Without label", mb: "20px", width:"265px" }}
            >
              <MenuItem value="">
                <em>Select Course</em>
              </MenuItem>
              <MenuItem value={1}>IPT</MenuItem>
              <MenuItem value={2}>PPIT</MenuItem>
              <MenuItem value={3}>IS</MenuItem>
              <MenuItem value={4}>RS</MenuItem>
            </Select>
            <TextField
              id="outlined-multiline-static"
              label="What is your post about?"
              multiline
              rows={12}
              defaultValue=""
              variant="outlined"
              fullWidth
              InputProps={{
                style: { border: "none" },
              }}
              onChange={(event) => setContent(event.target.value)}
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
              <UploadButton
                icon={faImage}
                onPostIdUpdate={setPostId}
                onFileSelect={setFile}
              />
              <UploadButton
                icon={faYoutube}
                onPostIdUpdate={setPostId}
                onFileSelect={setFile}
              />
              <UploadButton
                icon={faAward}
                onPostIdUpdate={setPostId}
                onFileSelect={setFile}
              />
              <UploadButton
                icon={faChartColumn}
                onPostIdUpdate={setPostId}
                onFileSelect={setFile}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePostClick}
            >
              Post
            </Button>
          </div>
        </Paper>
      </Box>
    </Box>
  );
}
export default CreatePost;
