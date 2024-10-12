import React from "react";
import { FamilyTreeProps, Relationship } from "./types/types";
import { FamilyTree } from "./components/FamilyTree";
import "./App.css";

// Render the component
const App: React.FC = () => {
  const familyTree: FamilyTreeProps = {
    client: { name: "John", relationship: Relationship.Client },
    spouse: { name: "Samantha", relationship: Relationship.Spouse },
    children: [
      { name: "Olivia 1", relationship: Relationship.Child },
      { name: "Jackson 1", relationship: Relationship.Child },
      { name: "Shaun 1", relationship: Relationship.Child },
      { name: "Cody 1", relationship: Relationship.Child },
      { name: "Ruby 1", relationship: Relationship.Child },
    ],
  };

  return (
    <div className="app">
      <FamilyTree tree={familyTree} />
    </div>
  );
};

export default App;
