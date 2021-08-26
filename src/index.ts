import Cell from '../packages/cell';
import Toast from '../packages/toast';
import Button from '../packages/button';
import {App} from 'vue';

const install = function (app: App, options: Object) {
    app.component(Cell.name, Cell);
    app.component(Button.name, Button);
    app.component(Toast.name, Toast);
}

export {
    install,
    Cell,
    Toast,
    Button
}