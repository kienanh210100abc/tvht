import React from "react";
import { Category } from "../types";
import { Box, Button, Typography } from "@mui/material";

interface MobileHeaderProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  menuOpen,
  toggleMenu,
}) => {
  const currentCategory =
    categories.find((cat) => cat.id === selectedCategory)?.name || "";

  return (
    <Box
      sx={{
        display: "block",
        height: "60px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "0 15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          Photo Album
        </Typography>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#4a90e2",
              color: "white",
              padding: "8px 15px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}
            onClick={toggleMenu}
          >
            {currentCategory} ▼
          </Button>
          {menuOpen && (
            <Box
              sx={{
                position: "absolute",
                right: "0",
                top: " 100%",
                backgroundColor: "white",
                minWidth: "150px",
                boxShadow: " 0 8px 16px rgba(0, 0, 0, 0.2)",
                zIndex: "1",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {categories.map((category) => (
                <Box
                key={category.id}
                sx={{
                  padding: "12px 15px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  backgroundColor: category.id === selectedCategory ? "#e6f0ff" : "transparent",
                  color: category.id === selectedCategory ? "#4a90e2" : "inherit",
                  "&:hover": {
                    backgroundColor: "#f1f1f1",
                  },
                }}
                onClick={() => onCategorySelect(category.id)}
              >
                {category.name}
              </Box>
              
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MobileHeader;
