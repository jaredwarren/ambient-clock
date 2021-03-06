/*
 * File: app/view/ChannelFormPanel.js
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

Ext.define('AmbientMixer.view.ChannelFormPanel', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.field.Text',
        'Ext.Button',
        'Ext.field.Toggle'
    ],

    config: {
        items: [
            {
                xtype: 'textfield',
                itemId: 'fileField',
                label: 'File',
                name: 'file',
                readOnly: true
            },
            {
                xtype: 'button',
                itemId: 'fileButton',
                iconCls: 'action',
                text: 'Select Sound File'
            },
            {
                xtype: 'sliderfield',
                itemId: 'volumeSlider',
                label: 'Volume',
                name: 'volume',
                value: [
                    50
                ]
            },
            {
                xtype: 'sliderfield',
                itemId: 'balanceSlider',
                label: 'Balance',
                name: 'balance',
                value: [
                    0
                ],
                increment: 0.1,
                maxValue: 1,
                minValue: -1
            },
            {
                xtype: 'togglefield',
                itemId: 'randomToggle',
                label: 'Random',
                name: 'random'
            },
            {
                xtype: 'sliderfield',
                hidden: true,
                itemId: 'randomRangeSlider',
                label: 'Random Delay',
                name: 'randomRange',
                value: [
                    1,
                    100
                ],
                maxValue: 600
            },
            {
                xtype: 'sliderfield',
                itemId: 'delaySlider',
                label: 'Delay',
                name: 'delay',
                value: [
                    1
                ],
                maxValue: 600
            },
            {
                xtype: 'button',
                itemId: 'playChannelButton',
                ui: 'action',
                iconCls: 'play',
                text: 'Play'
            },
            {
                xtype: 'button',
                itemId: 'saveButton',
                ui: 'confirm',
                iconCls: 'add',
                text: 'Save'
            },
            {
                xtype: 'button',
                itemId: 'saveButton1',
                ui: 'decline',
                iconCls: 'delete',
                text: 'Cancel'
            }
        ],
        listeners: [
            {
                fn: 'onRandomToggleChange',
                event: 'change',
                delegate: '#randomToggle'
            }
        ]
    },

    onRandomToggleChange: function(togglefield, newValue, oldValue, eOpts) {
        if(newValue){
            togglefield.up('.formpanel').down('#randomRangeSlider').show();
            togglefield.up('.formpanel').down('#delaySlider').hide();
        }
        else{
            togglefield.up('.formpanel').down('#delaySlider').show();
            togglefield.up('.formpanel').down('#randomRangeSlider').hide();
        }
    }

});