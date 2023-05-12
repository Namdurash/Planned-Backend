export const userCreateParser = (rawUser) => {
    const parsedUser = Object.assign({}, rawUser);

    for (let key in rawUser) {
        if (isNaN(rawUser[key])) {
            parsedUser[key] = rawUser[key];
        }
        if (!isNaN(rawUser[key])) {
            parsedUser[key] = Number(rawUser[key])
        }
    }

    return parsedUser;
}