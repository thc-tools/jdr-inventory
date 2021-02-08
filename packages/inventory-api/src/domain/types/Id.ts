export class Id {
    readonly value: string;

    private constructor(id: string) {
        this.value = id;
    }

    static create(id: string): Id {
        if (id.length === 0) {
            throw new Error("Id must be non null");
        }

        return new Id(id);
    }
}
