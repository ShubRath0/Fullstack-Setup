export interface ApiResposne<T> {
    status: number;
    success: boolean;
    data: T;
}