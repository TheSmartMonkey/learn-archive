export interface Effect {
  item_id: number;
  id: number;
  name: string;
  type: string;
  min: number;
  max: number;
  emote: null | string;
  title: null | string;
  spell: null | string;
  spellDesc: null | string;
}

export interface Ingredient {
  item_id: number;
  id: number;
  name: string;
  picture: number;
  count: number;
}

export interface Data {
  id: number;
  official: number;
  picture: number;
  level: number;
  cloth_id: number;
  choose_effect: number;
  give_boost: number;
  cannot_fm: number;
  category_id: number;
  subcategory_id: number | null;
  name: string;
  information: null | string;
  category_name: string;
  category_type: string;
  subcategory_name: null | string;
  cloth_name: string;
  swf: number;
  harness: null | string;
  main_color1: null | string;
  main_color2: null | string;
  main_color3: null | string;
  png_color1: null | string;
  png_color2: null | string;
  png_color3: null | string;
  size: null | string;
  cameleon: number;
  slug: string;
  effects: Effect[];
  constraints: any[]; // Adjust this if you know the structure
  ingredients: Ingredient[];
  weapon: null | string;
}

export interface Json1 {
  data: Data;
}
