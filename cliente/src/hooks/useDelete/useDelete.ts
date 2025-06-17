import { useState } from "react";

export const useDelete = <T,>() => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const deleteData = async (url: string) => {
        setLoading(true);
        setError(null);
        
        try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json() as T;
        } catch (err) {
        setError(err as Error);
        throw err;
        } finally {
        setLoading(false);
        }
    };

    return { deleteData, loading, error };
};