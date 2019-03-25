const baseApiUrl = 'https://api.nytimes.com/svc/topstories/v2/';
const apiKey = 'PIV10Jkip7NsXXYPBxfLAf89TC2fWiAc';

export function apiUrl(url) {
    return `${baseApiUrl}${url}.json?api-key= ${apiKey}`;
}