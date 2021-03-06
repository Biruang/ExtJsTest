/**
 * This view is an example list of people.
 */


Ext.define('extTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    id: 'PersonnelGrid',
    xtype: 'mainlist',
    alias: 'view.list',
    enablePaging: true,
    reference: 'grid',
    requires: [
        'extTest.store.Personnel',
    ],

    // init: function(){
    //     this.store = this.store.load({
    //         params: {
    //             start: 0,
    //             limit: 6
    //         }
    //     })
    // },

    store: 'personelStore',

    title: 'TEST#1',

    defaults:{
        height: 400,
        overflow: null,
    },

    columns: [
        { text: 'Name', dataIndex: 'name', editor: 'textfield' },
        {
            text: 'Email',
            dataIndex: 'email',
            editor:
                {
                    xtype: 'textfield',
                    validator: function(value){
                        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
                    }
                },
            flex: 1 },
        {
            text: 'Phone',
            dataIndex: 'phone',
            filter:{
                type: 'list',
            },
            editor: {
                xtype: 'textfield',
                validator: function (value) {
                    return(/^\+?([0-9]{3})\)?[-]+?([0-9]{3})[-]+?([0-9]{4})$/.test(value))
                }
            },
            flex: 1
        },
        {
            text: 'Size',
            dataIndex: 'size',
            flex: 1,
            editor: {
                xtype: 'combobox',
                //TODO: replace to actual store
                store:[
                    "M", "L"
                ],
                allowBlank: true,
                editable: false
            },
            filter: {
              type: 'list',
              options: ['L','M']
            },

            renderer: function (value, metaData) {
                if(value === null) {
                    metaData.tdAttr = 'bgcolor="red"';
                    return
                }

                switch (value.toLowerCase()) {
                    case 'm': {
                        metaData.tdAttr = 'bgcolor="green"';
                        break;
                    }
                    case 'l':{
                        metaData.tdAttr = 'bgcolor="blue"';
                        break;
                    }
                    default:{
                        metaData.tdAttr = 'bgcolor="red"'
                    }
                }
            }
        }
    ],

    tbar:[
        {
            xtype: 'button',
            text: 'DELETE ALL',
            action: 'delete',
            id: 'delete'
        },
        {
            xtype: 'button',
            text: 'RESET SELECTION',
            action: 'reset'
        },
        { xtype:'tbseparator' },
        {
            xtype: 'button',
            text: 'ADD',
            action: 'add'
        },
        {
            xtype: 'button',
            text: 'SUBMIT',
            action: 'submit',
            bind:{
                disabled: '{isDisabled}'
            }
        },
        {
            xtype: 'button',
            text: 'CANCEL',
            action: 'cancel',
            bind: {
                disabled: '{isDisabled}'
            }
        },
        {
            xtype: 'button',
            text: 'REFRESH',
            action: 'refresh'
        },
        { xtype:'tbspacer', flex: 1 },
        {
            xtype: 'checkbox',
            label: 'Read only',
            boxLabel: 'Read Only',
            action: 'readonly'
        },
        { xtype:'tbspacer', flex: 1 },
        {
            xtype: 'button',
            text: 'OPTION',
            arrowAlign: 'right',
            action:"options",
            menu:[
                {
                    text: 'Change Title Name',
                    listeners: {
                        click: function () {
                            Ext.create('Ext.window.Window', {
                                title: 'Change Title Name',
                                height: 150,
                                width: 400,
                                layout: 'fit',
                                modal: true,
                                items: [{
                                    xtype: 'textfield',
                                    fieldLabel: "Name title"
                                }],
                                buttons: [{
                                    action: 'change_title_name',
                                    text: "Save"
                                }]
                            }).show();
                        }
                    }
                },
                {
                    text: 'Change Title Color',
                    listeners: {
                        click: function () {
                            Ext.create('Ext.window.Window', {
                                title: 'Change Title Color',
                                height: 200,
                                width: 400,
                                layout: 'fit',
                                modal: true,
                                items: [{
                                    xtype: 'colorpicker',
                                }],
                                buttons:[{
                                    action: 'change_title_color',
                                    text: "Save"
                                }]
                            }).show();
                        }
                    }
                }
            ]
        },
    ],

    bbar:{
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: 'personelStore'
    },

    plugins: [
        {
            ptype: 'rowediting',
            clicksToEdit: 2
        },
        {
            ptype: 'gridfilters'
        }
    ],

    listeners: {
    }
});
