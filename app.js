// --- Define Data Store

Ext.define('Repository', {
    extend: 'Ext.data.Store',
    alias: 'store.repository',
        
    proxy: {
        type: 'ajax',
        url: 'https://api.github.com/users/x-formation/repos'
    }
});
Ext.define('Contributors', {
    extend: 'Ext.data.Store',
    alias: 'store.contributors',
        
    proxy: {
        type: 'ajax',
        url: 'contributors.json'
    }
});
//----------------------------------------------------
Ext.application({
    name: 'aaa',

    launch: function() {
        Ext.Viewport.add({
            xtype: 'tabpanel',

            items: [{
                title: 'Repository',
                xtype: 'grid',
                store: {
                    type: 'repository',
                    autoLoad: true,
                    sorters: ['forks_count', 'id', 'name', 'description'],
                },
				
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    flex: 1
                }, {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1
                }, {
                    text: 'Description',
                    dataIndex: 'description',
                    flex: 1
                },
				 {
                    text: 'Forks',
                    dataIndex: 'forks_count',
                    flex: 1
                }
				]
            }
			,{
                title: 'Contributors',
                xtype: 'grid',
                grouped: true,
                listeners: {
                    itemtap: 'onPopupForm'
                },
                store: {
                    type: 'contributors',
                    autoLoad: true,
                    sorters: ['contributions', 'name', 'description'],
                },
                columns: [{
                    text: 'ID',
                    dataIndex: 'nickname',
                    flex: 1
                }, {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1
                }, {
                    text: 'Contributions',
                    dataIndex: 'contributions',
                    flex: 1
                }]
            }]
        });
    }
});
