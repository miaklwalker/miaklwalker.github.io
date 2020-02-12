"use strict";
//
//
//
// class Component{
//     el:HTMLElement;
//     constructor(el:HTMLElement){
//         this.el = el;
//     }
// }
//
// interface components {
//     [index:string]:any;
//     state:State,
//     id:string&number,
//     component:Component,
// }
//
// export default class Mediator {
//     components:any[];
//     private state: State;
//     constructor(){
//         this.components = [];
//         this.state = new State({
//             components:this.components,
//             AllVisible:true,
//             SelectVisible:[],
//         })
//     }
//     addComponent(components:HTMLElement,id:string&number){
//         const componentToAdd = {component:new Component(components),id,state:new State({})}
//     }
//     addComponentState(compId:string&number,stateProperty:string,startingValue:boolean|string|number){
//         let componentToUpdate = this.components.filter(({id})=>id===compId)[0] as components;
//         componentToUpdate.state.addProperty(stateProperty,startingValue)
//     }
//     registerListener(){}
// }
//# sourceMappingURL=observer.js.map