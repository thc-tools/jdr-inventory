export class Name {
    readonly value: string;

    private constructor(name: string) {
        this.value = name;
    }

    static create(name: string): Name {
        if (name.length === 0) {
            throw new Error("Named must be non null");
        }

        return new Name(name);
    }
}
