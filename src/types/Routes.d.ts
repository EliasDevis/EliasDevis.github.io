export interface Routes {
    [key: `/${string}`]: {
        name: string;
        element: string;
    }
}