import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Category } from "../types";

interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        "@media (max-width: 750px)": {
          display: "none", // Ẩn khi màn hình nhỏ hơn hoặc bằng 750px
        },
      }}
    >
      <Typography
        sx={{ fontSize: "25px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Photo Album
      </Typography>
      <Box>
        <List sx={{ padding: 0, listStyle: "none" }}>
          {categories.map((category) => (
            <ListItem
              key={category.id}
              sx={{
                padding: "12px 15px",
                cursor: "pointer",
                borderRadius: "4px",
                marginBottom: "5px",
                transition: "background-color 0.2s",
                backgroundColor:
                  category.id === selectedCategory ? "#4a90e2" : "transparent",
                color: category.id === selectedCategory ? "white" : "inherit",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
              onClick={() => onCategorySelect(category.id)}
            >
              {category.name}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
