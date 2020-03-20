Ext.define('extTest.controller.List', {
    extend: 'Ext.app.Controller',
    views: ['extTest.view.main.List'],
    stores: ['Personnel'],
    models: ['Personnel'],

    init: function () {
    },

    refs: [{
        ref: 'list',
        selector: 'grid'
    },{
        ref: 'color',
        selector: 'header'
    }],

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

    deleteAll: function (button) {
        let grid = Ext.getCmp('PersonnelGrid');
        grid.store.removeAll();
    },

    deleteSelected: function(button) {
        let grid = Ext.getCmp('PersonnelGrid');
        let selection = button.up('panel').getSelection()[0];
        if (selection) {
            grid.store.remove(selection);
        }
    },

    onAdd: function(button){
        let grid = Ext.getCmp('PersonnelGrid');
        var res = new extTest.model.Personnel({
            name: '',
            phone: '',
            email: '',
            size: ''
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
        let button = Ext.get('delete_solo');
        let select = selection.getSelection()[0];
        if(select){
            button.update(`DELETE ${select.data.name}`);
        } else {
            button.update('DELETE ELEMENT')
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
            "delete all",
            "delete select",
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
        let list = this.getList();
        list.setTitle(`<div style="color: #${colorpicker.value}">${list.title}</div>`);
    }
});