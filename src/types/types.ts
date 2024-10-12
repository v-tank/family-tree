export enum Relationship {
  Client = "Client",
  Spouse = "Spouse",
  Child = "Child",
}

export interface Individual {
  name?: string;
  relationship?: string;
}

export interface TreeProps {
  tree: FamilyTreeProps;
}

export interface FamilyTreeProps {
  client: Individual;
  spouse?: Individual;
  children?: Individual[];
}
