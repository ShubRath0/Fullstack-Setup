export interface ApiResponse<T> {
    status: number;
    success: boolean;
    message: string;
    timestamp: string;
    fieldErrors: FieldError[],
    data: T;
}

export interface FieldError {
    field: string;
    message: string;
}