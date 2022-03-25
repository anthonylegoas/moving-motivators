export function getSession(event) {
    const acceptedLanguage = event.request.headers.get("accept-language").split(',')[0];
    return { acceptedLanguage };
}