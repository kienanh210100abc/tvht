import React, { useState } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import MobileHeader from "./component/MobileHeader";
import MediaViewer from "./component/MediaViewer";
import { categories } from "./data/photo";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const currentCategory =
    categories.find((cat: { id: any }) => cat.id === selectedCategory) ||
    categories[0];

  return (
    <div className="app">
      <div className="mobile-header">
        <MobileHeader
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
      <div className="desktop-layout">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <main className="content">
          <MediaViewer
            mediaItems={currentCategory.media}
            categoryName={currentCategory.name}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
