export enum UserRole {
    NUTRITIONIST = 'NUTRITIONIST',
    CLIENT = 'CLIENT'
}

export interface User {
    id: string
    role: UserRole
    firstname: string
    lastname: string
    email: string
    languagePreference: string
    signupDate: Date
    dateOfBirth?: Date
    phone?: string
    country?: string
    state?: string
    city?: string
    nutritionistId?: string
}

export interface UserWithRelations extends User {
    nutritionist?: User
    clients?: User[]
} 