import { observable, autorun } from 'mobx';

class TodoStore {
 @observable todos = ['milk buy', 'eggs buy'];
 @observable filter = ""
}

var store = window.store = new TodoStore;

export default store;

autorun(()=> {
    console.log(store.filter)
    console.log(store.todos[0])
})