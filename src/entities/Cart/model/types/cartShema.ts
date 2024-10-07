import { Product } from "../../../../app/types/product";

export interface CartSchema {
    data: Product[];
    isLoading: boolean;
    error: string | undefined
}