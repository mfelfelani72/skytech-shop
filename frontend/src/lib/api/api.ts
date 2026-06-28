const API_URL =
    process.env.NEXT_PUBLIC_API_URL;



export async function api(
    url: string,
    options: any = {}
) {

    const token =
        localStorage.getItem("token");


    return fetch(
        API_URL + url,
        {

            ...options,

            headers: {
                "Content-Type":
                    "application/json",

                Authorization:
                    token
                        ? `Bearer ${token}`
                        : null

            }

        });

}