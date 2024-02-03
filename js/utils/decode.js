


export async function DecodeToken(token) {

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedData = await JSON.parse(atob(base64));
    
    return decodedData;
}