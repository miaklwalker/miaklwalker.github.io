export default class VisibilityFilters {
    constructor() {
        this.filters = document.createElement('span');
    }
    getFilters() {
        if (this.filters.classList.length === 0) {
            return ('AllVisible');
        }
        return [...this.filters.classList];
    }
    toggleFilter(name) {
        this.filters.classList.toggle(name);
    }
}
//# sourceMappingURL=visibilityFilter.js.map