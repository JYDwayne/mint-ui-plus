import Cell from '../packages/cell';
import Toast from '../packages/toast';
import Button from '../packages/button';
import Switch from '../packages/switch';
import {App} from 'vue';

const install = function (app: App, options: Object) {
    app.component(Cell.name, Cell);
    app.component(Button.name, Button);
    app.component(Toast.name, Toast);
    app.component(Switch.name, Switch);
}

export {
    install,
    Cell,
    Toast,
    Button,
    Switch
}