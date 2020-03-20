Ext.define('extTest.controller.List', {
    extend: 'Ext.app.Controller',
    views: ['extTest.view.main.List'],
    stores: ['Personnel'],
    models: ['Personnel'],


    control: {
        'panel':{
            selectionchange: 'onSelect',
        },
        'button[action="delete"]': {
            click: 'onDelete'
        },
        'button[action="reset"]':{
            click: 'onReset'
        },
        'button[action="add"]':{
            click: 'onAdd'
        },
        'button[action="submit"]':{
            click: 'onSubmit'
        },
        'button[action="cancel"]':{
            click: 'onCancel'
        },
        'button[action="refresh"]':{
            click: 'onRefresh'
        },
        'checkbox[action="readonly"]': {
            change: 'readOnly'
        },
        'button[action="change_title_name"]': {
            click: 'onChangeTitleName'
        },
        'button[action="change_title_color"]': {
            click: 'onChangeTitleColor'
        }
    },

    onDelete: function (button) {
        let grid = Ext.getCmp('PersonnelGrid');
        let selection = grid.getSelection();
        if(selection.length){
            grid.store.remove(selection);
        } else {
            grid.store.removeAll();
        }

    },

    onReset: function (button){
        let grid =  Ext.getCmp('PersonnelGrid');
        grid.setSelection(null)
    },

    onAdd: function(button){
        let grid = Ext.getCmp('PersonnelGrid');
        var res = new extTest.model.Personnel({
            name: null,
            phone: null,
            email: null,
            size: null
        });
        var edit = grid.findPlugin('rowediting');

        edit.cancelEdit();
        grid.store.insert(0, res);
        edit.startEdit(0)
    },

    onSubmit: function(button){
        let grid = Ext.getCmp('PersonnelGrid');
        grid.store.commitChanges();
    },

    onSelect: function (selection) {
        let button = Ext.getCmp('delete');
        let select = selection.getSelection()[0];
        if(select){
            button.update(`DELETE ${select.data.name}`);
        } else {
            button.update('DELETE ALL')
        }
    },

    onCancel: function (button){
        let grid = Ext.getCmp('PersonnelGrid');
        grid.store.rejectChanges()
    },

    onRefresh: function (button) {
        let grid = Ext.getCmp('PersonnelGrid');
        grid.store.load()
    },

    readOnly: function (checkbox) {
        let grid = checkbox.up('grid');

        let selectors = [
            "delete",
            "reset",
            "add",
            "submit",
            "cancel",
            "refresh",
            "options"
        ];

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
    },

    onChangeTitleName: function (button) {
        let textfield = button.up('window').down('textfield');
        this.getList().setTitle(textfield.value);
    },

    onChangeTitleColor: function (button) {
        let colorpicker = button.up('window').down('colorpicker');
        Ext.getCmp('PersonnelGrid').header.title.setStyle({'color': `#${colorpicker.value}`});
    }
});