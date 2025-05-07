import { FoodCategory } from './food'

export interface CategoryBudget {
    category: FoodCategory
    dailyBudget: number
}

export interface Diet {
    _id: string
    type: 'diet'
    startDate: Date
    endDate: Date
    dailyCaloriesBudget: number
    isActive: boolean
    created_at: Date
    updated_at: Date
    budgets: CategoryBudget[]
}

export interface DietProgress {
    date: Date
    consumedCalories: number
    categoryConsumption: {
        [key in FoodCategory]?: number
    }
    remainingCalories: number
    categoryRemaining: {
        [key in FoodCategory]?: number
    }
} 