import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@mui/material/Button';

function UploadButton({ icon, onFileUpload }) {
  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileUpload(file);
  };

  return (
    <>
      <Button variant="none" color="normal" sx={{ m: 0, p:0 }} onClick={handleButtonClick}>
        <FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />
      </Button>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="/*"
      />
    </>
  );
}

export default UploadButton;
