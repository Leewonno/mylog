export default async function getData(url: string) {
    const res = await fetch(url, {
        // cache: "no-store",
    });
    const result = await res.json();
    return result
}