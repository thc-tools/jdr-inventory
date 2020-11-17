export function responsify<P, R = P>(
    promise: () => Promise<P>,
    success: (p: P) => R
): Promise<{ error?: string } | R> {
    try {
        return promise()
            .then(success)
            .catch((err: Error) => {
                console.error(err);
                return { error: err.message };
            });
    } catch (err) {
        console.error(err);
        return Promise.resolve({ error: err.message });
    }
}
