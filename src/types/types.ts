export type Author = {
  name: string;
  url?: string;
  institution?: string;
  notes?: string[];
  // When true, force this author onto a new row in the author list.
  newRow?: boolean;
};

export type Affiliation = {
  name: string;
  logo: string;
  url?: string;
  // Optional Tailwind size classes for the logo image (e.g., to shrink a
  // logo that reads too large). Defaults to "max-h-9 max-w-full".
  imgClass?: string;
};

export type Link = {
  url: string;
  name: string;
  icon?: string;
};

export type Note = {
  symbol: string;
  text: string;
};
