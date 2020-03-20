Ext.define('extTest.store.Personnel', {
    storeId: 'personelStore',
    extend: 'Ext.data.Store',
    model: 'extTest.model.Personnel',
    alias: 'store.personnel',
    autoLoad: true,
    pageSize: 10,

    fields: [
        'name', 'email', 'phone', "size"
    ],

    name: '#TEST1',



    proxy: {
        type: 'memory',
        // url: 'data.json',
        enablePaging: true,
        // reader: {
        //     type: 'json',
        //     rootProperty: 'items'
        // }
        data: [
                { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", size: "M" },
                { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", size: "L" },
                { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", size: "L" },
                { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", size: "M" },
                { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", size: "M" },
                { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", size: "L" },
                { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", size: null },
                { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", size: null },
                { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", size: "M" },
                { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", size: "L" },
                { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", size: "L" },
                { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", size: "M" },
                { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", size: "M" },
                { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", size: "L" },
                { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", size: null },
                { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", size: null },

            ],
    }
});
