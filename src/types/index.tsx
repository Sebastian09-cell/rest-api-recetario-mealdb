export type Category = {
  strCategory: string;
};
export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string | number;
  strCountry: string;
};
export type Searchform = {
  search: string;
};

export type MealDetails = {
  [key: string]: string;
};
