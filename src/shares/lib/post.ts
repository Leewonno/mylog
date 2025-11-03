export interface TypedResponse<T> extends Response {
    json(): Promise<T>;
}

export default async function postData<TData extends object, TResponse>(
    url: string,
    data: TData
): Promise<TypedResponse<TResponse>> {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return res as TypedResponse<TResponse>;
}