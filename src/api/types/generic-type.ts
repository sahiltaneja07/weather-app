export interface DataState<T> {
    data: T | null;
    error: string;
    isLoading: boolean;
}

export interface DataProps<T> {
    data: T
}
