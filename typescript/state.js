export default class State {
    constructor(state = {}) {
        this.state = state;
        this.history = [];
    }
    set currentState(state) {
        this.history.push(this.state);
        this.state = Object.assign(Object.assign({}, this.state), state);
    }
    get currentState() {
        return this.state;
    }
    addProperty(property, value) {
        this.state.event = `Property : ${property} , was added`;
        this.state[property] = value;
        Object.defineProperty(this.state, property, { writable: true });
        this.currentState = this.currentState;
    }
}
;
//# sourceMappingURL=state.js.map