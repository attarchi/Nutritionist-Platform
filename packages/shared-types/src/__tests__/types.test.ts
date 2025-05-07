import { UserRole, User, FoodItem, Diet, ApiResponse, FoodCategory } from '../index'

describe('Type Definitions', () => {
    describe('User Types', () => {
        it('should allow valid user role values', () => {
            const validRoles: UserRole[] = [UserRole.NUTRITIONIST, UserRole.CLIENT]
            expect(validRoles).toBeDefined()
        })

        it('should allow valid user object structure', () => {
            const user: User = {
                id: '123',
                role: UserRole.CLIENT,
                firstname: 'John',
                lastname: 'Doe',
                email: 'john@example.com',
                languagePreference: 'en',
                signupDate: new Date(),
                dateOfBirth: new Date('1990-01-01'),
                phone: '+1234567890',
                country: 'USA',
                state: 'CA',
                city: 'San Francisco',
                nutritionistId: '456'
            }
            expect(user).toBeDefined()
        })
    })

    describe('Food Types', () => {
        it('should allow valid food item structure', () => {
            const foodItem: FoodItem = {
                _id: 'food-123',
                type: 'foodItem',
                name: {
                    en: 'Apple',
                    fa: 'سیب'
                },
                category1: FoodCategory.FRUITS,
                unit: 'gram',
                unitReferenceValue: 100,
                caloriesPerReference: 52,
                created_at: new Date(),
                updated_at: new Date()
            }
            expect(foodItem).toBeDefined()
        })
    })

    describe('Diet Types', () => {
        it('should allow valid diet structure', () => {
            const diet: Diet = {
                _id: 'diet-123',
                type: 'diet',
                startDate: new Date(),
                endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                dailyCaloriesBudget: 2000,
                isActive: true,
                created_at: new Date(),
                updated_at: new Date(),
                budgets: [
                    {
                        category: FoodCategory.FRUITS,
                        dailyBudget: 300
                    },
                    {
                        category: FoodCategory.VEGETABLES,
                        dailyBudget: 400
                    }
                ]
            }
            expect(diet).toBeDefined()
        })
    })

    describe('API Types', () => {
        it('should allow valid API response structure', () => {
            const response: ApiResponse<User> = {
                data: {
                    id: '123',
                    role: UserRole.CLIENT,
                    firstname: 'John',
                    lastname: 'Doe',
                    email: 'john@example.com',
                    languagePreference: 'en',
                    signupDate: new Date()
                },
                message: 'User retrieved successfully'
            }
            expect(response).toBeDefined()
        })
    })
}) 