export default class VisibilityFilters {
    filters:HTMLSpanElement;
    constructor(){
        this.filters = document.createElement('span');
    }
    getFilters(){
        if(this.filters.classList.length === 0 ){
            return ('AllVisible');
        }
        return [...this.filters.classList] as string[];
    }
    toggleFilter(name:string){
        this.filters.classList.toggle(name);
    }
}