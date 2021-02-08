export class Level {
    readonly value: number;

    private constructor(level: number) {
        this.value = level;
    }

    static create(level: number): Level {
        if (level < 0) {
            throw new Error("Level must be positive");
        }

        return new Level(level);
    }
}
