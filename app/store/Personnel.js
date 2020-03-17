Ext.define('extTest.store.Personnel', {
    extend: 'Ext.data.Store',
    model: 'extTest.model.Personnel',
    alias: 'store.personnel',
    autoLoad: true,

    fields: [
        'name', 'email', 'phone', "size"
    ],

    name: '#TEST1',

    data: { items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", size: "M" },
            { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", size: "L" },
            { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", size: "L" },
            { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", size: "M" },
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", size: "M" },
            { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", size: "L" },
            { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", size: "" },
            { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", size: "" }
        ],
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
