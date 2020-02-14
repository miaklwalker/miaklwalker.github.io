export default class VisibilityFilters {
    filters:HTMLSpanElement;
    constructor(){
        this.filters = document.createElement('span') as HTMLSpanElement;
    }
    getFilters(){
        if(this.filters.classList.length === 0 ){
            return ('AllVisible');
        }
        return [...this.filters.classList];
    }
    toggleFilter(name:string){
        this.filters.classList.toggle(name);
    }
}