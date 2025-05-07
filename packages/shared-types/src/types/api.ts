export interface ApiResponse<T> {
    data: T
    message?: string
    error?: string
}

export interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    pageSize: number
    totalPages: number
}

export interface ErrorResponse {
    error: string
    message: string
    statusCode: number
}

export interface ValidationError {
    field: string
    message: string
}

export interface ValidationErrorResponse extends ErrorResponse {
    errors: ValidationError[]
} 