import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { MediaItem } from '../types';

interface MediaViewerProps {
  mediaItems: MediaItem[];
  categoryName: string;
}

const MediaViewer: React.FC<MediaViewerProps> = ({ mediaItems, categoryName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === mediaItems.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSpecific = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = mediaItems[currentIndex];

  // Render media content theo type (image/video)
  const renderMediaContent = () => {
    if (currentItem.type === 'image') {
      return (
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          src={currentItem.src}
          alt={currentItem.alt}
        />
      );
    } else if (currentItem.type === 'video') {
      return (
        <video
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "black",
          }}
          src={currentItem.src}
          controls
          poster={currentItem.thumbnail}
          preload="metadata"
        />
      );
    }
    return null; // Fallback cho các loại không xác định
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        overflowY:"auto"
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          marginTop: "50px",
          "@media (max-width: 750px)": {
            marginTop: "15px",
          },
        }}
      >
        {categoryName}
      </Typography>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Button onClick={goToPrevious}>&#10094;</Button>
        <Box
          sx={{
            width: "80vh",
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderMediaContent()}
        </Box>
        <Button onClick={goToNext}>&#10095;</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {mediaItems.map((item, index) => (
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius:   "50%", // Hình vuông cho video, tròn cho ảnh
              backgroundColor: index === currentIndex ? "#FFD700" : "#ccc",
              margin: "0 5px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            key={item.id}
            onClick={() => goToSpecific(index)}
          ></Box>
        ))}
      </Box>
      <Typography
        sx={{
          fontSize: "18px",
          marginBottom: "15px",
          fontStyle: "italic",
          color: "#666",
        }}
      >
        {currentItem.alt}
      </Typography>
    </Box>
  );
};

export default MediaViewer;