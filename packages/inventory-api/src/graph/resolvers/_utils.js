export function responsify(promise, success) {
    try {
        return promise()
            .then(success)
            .catch((err) => {
                console.error(err);
                return { error: err.message };
            });
    } catch (err) {
        console.error(err);
        return Promise.resolve({ error: err.message });
    }
}
