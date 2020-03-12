/**
 * This view is an example list of people.
 */
Ext.define('extTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'extTest.store.Personnel'
    ],

    title: 'TEST#1',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        {
            text: 'Size',
            dataIndex: 'size',
            flex: 1,
            // xtype: 'templatecolumn',
            // tpl: new Ext.XTemplate(
            //     "<tpl if='size == \"M\"'><div style='background-color: red'>{size}</div></tpl>",
            //     "<tpl if='size == \"L\"'><div style='background-color: green'>{size}</div></tpl>"
            // )
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

    listeners: {
        select: 'onItemSelected'
    }
});
