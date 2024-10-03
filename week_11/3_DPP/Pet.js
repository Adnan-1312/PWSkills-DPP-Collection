class Pet {
    #health;

    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.#health = 100;
    }

    feed() {
        this.#health = Math.min(this.#health + 10, 100);
    }

    play() {
        this.#health = Math.max(this.#health - 10, 0);
    }

    getHealth() {
        return this.#health;
    }

    static info() {
        return "Pets need regular feeding and playing to stay healthy.";
    }
}

export default Pet;
