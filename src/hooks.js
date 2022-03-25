export function getSession(event) {
    const acceptedLanguage = event.request.headers["accept-language"]?.split(',')[0];
    return { acceptedLanguage };
}