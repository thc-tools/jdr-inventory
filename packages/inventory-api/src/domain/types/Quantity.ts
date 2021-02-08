export class Quantity {
    readonly value: number;

    private constructor(quantity: number) {
        this.value = quantity;
    }

    static create(quantity: number): Quantity {
        if (quantity < 0) {
            throw new Error("Quantity must be positive");
        }

        return new Quantity(quantity);
    }
}
