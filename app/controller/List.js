Ext.define('extTest.controller.List', {
    extend: 'Ext.app.Controller',
    views: ['extTest.view.main.List'],
    stores: ['Personnel'],
    models: ['Personnel'],

    init: function () {
    },

    control: {
      'button[action="delete all"]': {
          click: 'f'
      },
        'button[action="delete select"]': {
        click: 'f'
      },
    },

    f: function (button) {
        let personnelStore = this.getPersonnelStore();
        personnelStore.removeAt(1);
        personnelStore.load();
        let win = button.up('panel');
        console.log(win);
        win.store.update();
        console.log(personnelStore)
    }
});