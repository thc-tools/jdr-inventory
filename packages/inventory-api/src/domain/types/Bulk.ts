type BulkType = "L" | number;

export class Bulk {
    readonly value: BulkType;

    private constructor(bulk: BulkType) {
        this.value = bulk;
    }

    static create(bulk: BulkType): Bulk {
        if (typeof bulk === "number" && bulk < 0) {
            throw new Error("Bulk must be positive");
        }

        return new Bulk(bulk);
    }
}
