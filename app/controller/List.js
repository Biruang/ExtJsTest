Ext.define('extTest.controller.List', {
    extend: 'Ext.app.Controller',
    views: ['extTest.view.main.List'],
    stores: ['Personnel'],
    models: ['Personnel'],

    init: function () {
    },

    control: {
        'panel':{
            selectionchange: 'onSelect'
        },
        'button[action="delete all"]': {
            click: 'deleteAll'
        },
        'button[action="delete select"]': {
            click: 'deleteSelected'
        },
        'button[action="add"]':{
            click: 'onAdd'
        },
        'button[action="refresh"]':{
            click: 'onRefresh'
        },
        'checkbox[action="readonly"]': {
            change: 'readOnly'
        },
        'button[action="change_title_name"]': {
            click: 'onChangeTitleName'
        }
    },

    deleteAll: function (button) {
        let store = button.up('panel').store;
        store.removeAll();
        console.log(store)
    },

    deleteSelected: function(button) {
        let store = button.up('panel').store;
        let selection = button.up('panel').getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
    },

    onAdd: function(button){
        let store = button.up('panel').store;
        var res = new extTest.model.Personnel({
            name: '',
            phone: '',
            email: '',
            size: ''
        });
        var edit = button.up('grid').findPlugin('rowediting');

        edit.cancelEdit();
        store.insert(0, res);
        edit.startEdit(0)
    },

    onSelect: function (selection) {
        let button = Ext.get('delete_solo');
        let select = selection.getSelection()[0];
        if(select){
            button.update(`DELETE ${select.data.name}`);
        } else {
            button.update('DELETE ELEMENT')
        }
    },

    onRefresh: function (button) {
        let store = button.up('panel').store;
        store.load()
    },

    readOnly: function (checkbox) {
        let grid = checkbox.up('grid');

        let selectors = [
            "delete all",
            "delete select",
            "add",
            "submit",
            "cancel",
            "refresh",
            "options"
        ];

        let delAll = grid.down('button[action="delete all"]');

        if(checkbox.value){
            selectors.forEach(function(selector) {
                grid.down(`button[action=${selector}]`).disable();
            });
            grid.findPlugin('rowediting').disable();
        } else {
            selectors.forEach(function(selector) {
                grid.down(`button[action=${selector}]`).enable();
            });
            grid.findPlugin('rowediting').enable();
        }

        console.log(checkbox.up('grid').down('button'))
    },

    onChangeTitleName: function (button) {
        let grid = button.up('grid')
        let d = button.up('body').down('grid');
        let textfield = button.up('window').down('textfield');
        debugger
        console.log(grid);
        grid.setTitle(textfield.value);
    }
});