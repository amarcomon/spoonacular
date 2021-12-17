export interface IRecipes {
  recipes: Array<IRecipe>
}

export interface IRecipe {
  aggregateLikes: number;
  cheap: boolean;
  creditsText: string;
  dairyFree: boolean;
  extendedIngredients: Array<ExtendedIngredients>;
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  license: string;
  lowFodmap: boolean;
  pricePerServing: number;
  sourceName: string;
  spoonacularScore: number;
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
  analyzedInstructions: Array<Instructions>;
  cuisines: Array<string>; // Se setean a tipo string por defecto al no tener datos
  diets: Array<string>; // Se setean a tipo string por defecto al no tener datos
  dishTypes: Array<string>; // Se setean a tipo string por defecto al no tener datos
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  occasions: Array<string>; // Se setean a tipo string por defecto al no tener datos
  originalId: number;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  summary: string;
  title: string;
}

interface ExtendedIngredients {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: Measures;
  meta: Array<string>;
  metaInformation: Array<string>;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  originalString: string;
  unit: string;
}

interface Measures {
  metric: Units;
  us: Units;
}

interface Units {
  amount: number;
  unitLong: string;
  unitShort: string;
}

interface Instructions {
  name: string;
  steps: Array<Step>;
}

interface Step {
  equipment: Array<string>;
  ingredients: Array<Ingredient>;
  number: number;
  step: string;
}

interface Ingredient {
  id: number;
  image: string;
  localizedName: string;
  name: string;
}
