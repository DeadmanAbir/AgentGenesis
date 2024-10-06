export interface Publication {
  descriptionSEO?: string;
  preferences?: {
    navbarItems?: Array<{
      id: string;
      label: string;
      url: string;
    }>;
  };
  title?: string;
}
