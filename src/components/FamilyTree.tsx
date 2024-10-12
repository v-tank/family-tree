import React from "react";
import { Person } from "./Person";
import { TreeProps } from "../types/types";

const HorizontalLineForSpouse = () => (
  <div className="spouse-connector">
    <div className="horizontal-line"></div>
    <span className="heart">❤️</span>
  </div>
);

const VerticalLine = () => <div className="vertical-line"></div>;

const HorizontalLineForChild = () => (
  <div className="horizontal-line-children"></div>
);

export const FamilyTree: React.FC<TreeProps> = ({ tree }) => {
  const client = tree?.client;
  const spouse = tree?.spouse;
  const children = tree?.children;

  return (
    <div className="family-tree">
      <div className="family-tree-row">
        <Person name={client?.name} relationship={client?.relationship} />

        {spouse && (
          <>
            <HorizontalLineForSpouse />
            <Person name={spouse?.name} relationship={spouse?.relationship} />
          </>
        )}
      </div>

      {children && children?.length > 0 && (
        <div className="parent-children-connector">
          <VerticalLine />
        </div>
      )}

      <div className="children-row">
        {children?.map((child, index) => (
          <div key={index} className="child-container">
            <HorizontalLineForChild />

            <Person name={child.name} relationship={child.relationship} />
          </div>
        ))}
      </div>
    </div>
  );
};
