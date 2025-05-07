export enum FoodCategory {
    GRAINS = 'GRAINS',
    PROTEINS = 'PROTEINS',
    FATS = 'FATS',
    SIMPLE_SUGARS = 'SIMPLE_SUGARS',
    FRUITS = 'FRUITS',
    VEGETABLES = 'VEGETABLES',
    DAIRY = 'DAIRY'
}

export interface FoodItem {
    _id: string
    type: 'foodItem'
    name: {
        en: string
        fa: string
    }
    category1: FoodCategory
    category2?: FoodCategory
    unit: string
    unitReferenceValue: number
    caloriesPerReference: number
    created_at: Date
    updated_at: Date
}

export interface ConsumedFood {
    _id: string
    type: 'consumedFood'
    date: Date
    meal: 'BREAKFAST' | 'LUNCH' | 'DINNER' | 'SNACK'
    foodItemId: string
    quantity: number
    description?: string
    created_at: Date
    updated_at: Date
    mediaFileIds?: string[]
} 