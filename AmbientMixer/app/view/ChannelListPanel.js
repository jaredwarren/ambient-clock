/*
 * File: app/view/ChannelListPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AmbientMixer.view.ChannelListPanel', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'button',
                iconCls: 'add',
                text: 'Add Channel'
            },
            {
                xtype: 'list',
                itemId: 'channelList',
                itemTpl: [
                    '<div>List Item {string}</div>'
                ],
                store: 'Channels'
            }
        ]
    }

});