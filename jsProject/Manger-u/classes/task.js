export default class Task {
    constructor(type, description, status) {
        this.id = Math.floor(Math.random() * 1000);
        this.description = description;
        this.status = status
    }
    get(p) {
        return this[p];
    }
    set(p, val) {
        this[p] = val;
    }
}