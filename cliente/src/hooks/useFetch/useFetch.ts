import { useEffect, useState } from "react";

type Data<T> = T|null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>
    loading: boolean
    error: ErrorType
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, settData] = useState<Data<T>>(null)
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
        let controller = new AbortController
        const fetchData = async () => {
            try {
                const response = await fetch(url, controller)
                if (!response.ok) {
                    throw new Error('Error en la petición')
                }

                const jsonData: T = await response.json()
                settData(jsonData)
                setError(null)
            } catch (e) {
                setError(e as Error)
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { data, loading, error }
}