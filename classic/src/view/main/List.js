/**
 * This view is an example list of people.
 */
Ext.define('extTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    alias: 'view.list',
    requires: [
        'extTest.store.Personnel',
    ],

    store: {
        type: 'personnel'
    },

    title: 'TEST#1',

    defaults:{
        height: 400
    },

    columns: [
        { text: 'Name', dataIndex: 'name', editor: 'textfield' },
        { text: 'Email', dataIndex: 'email', editor: 'textfield', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', editor: 'textfield', flex: 1},
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
                editable: false
            },

            renderer: function (value, metaData) {
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
            action: 'delete all'
        },
        {
            xtype: 'button',
            text: 'DELETE',
            action: "delete select"
        },
        { xtype:'tbseparator' },
        {
            xtype: 'button',
            text: 'ADD'
        },
        {
            xtype: 'button',
            text: 'SUBMIT'
        },
        {
            xtype: 'button',
            text: 'CANCEL'
        },
        {
            xtype: 'button',
            text: 'REFRESH'
        },
        { xtype:'tbspacer', flex: 1 },
        {
            xtype: 'checkbox',
            label: 'Read only',
            boxLabel: 'Read Only'
        },
        { xtype:'tbspacer', flex: 1 },
        {
            xtype: 'button',
            text: 'OPTION',
            arrowAlign: 'right',
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
                                    xtype: 'button',
                                    text: 'fff'
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
                                height: 150,
                                width: 400,
                                layout: 'fit',
                                modal: true,
                                items: [{
                                    xtype: 'button',
                                    text: 'fff'
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
        displayInfo: false,

    },

    selModel: 'rowmodel',
    plugins: [
        {
            ptype: 'rowediting',
            clicksToEdit: 2
        }
    ],

    listeners: {
    }
});
