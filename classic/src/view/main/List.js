/**
 * This view is an example list of people.
 */
Ext.define('extTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'extTest.store.Personnel',
    ],

    store: {
        type: 'personnel'
    },

    title: 'TEST#1',

    columns: [
        { text: 'Name',  dataIndex: 'name', editor: 'textfield' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1},
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
            text: 'DELETE ALL'
        },
        {
            xtype: 'button',
            text: 'DELETE'
        },
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
        {
            xtype: 'checkbox',
            label: 'Read only'
        },
        {
            xtype: 'button',
            text: 'OPTION',
            arrowAlign: 'right',
            menu:[
                {
                    text: 'Change Title Name',
                },
                {
                    text: 'Change Title Color'
                }
            ]
        },
    ],

    bbar:{
        xtype: 'pagingtoolbar',
        displayInfo: true,

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
