export interface DayNutrient {
  day_calories: number;
  day_carbs: number;
  day_protein: number;
  day_fat: number;
}

export interface ChatInferDto {
  message: string;
  dayNutrient: DayNutrient;
}

export interface ChatDto {
  id?: number;
  userId: number;
  type: string;
  message: string;
  createdAt?: string;
}
