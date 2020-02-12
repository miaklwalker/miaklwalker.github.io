interface state{
    [index:string]:string|number|[]|{}|undefined,
    event?:string|number
}
export default class State {
    state:state;
    history:any[];
    constructor(state:state = {}){
        this.state = state;
        this.history = [];
    }
    set currentState(state:{}){
        this.history.push(this.state);
        this.state = {...this.state,...state};
    }
    get currentState(){
        return this.state;
    }
    addProperty(property:string,value:string|boolean|number){
        this.state.event = `Property : ${property} , was added`;
        this.state[property]=value;
        Object.defineProperty(this.state,property,{writable:true});
        this.currentState = this.currentState;
    }
};