/*
 * File: app/model/Channel.js
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

Ext.define('AmbientMixer.model.Channel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'file',
                type: 'string'
            },
            {
                defaultValue: 50,
                name: 'volume',
                type: 'int'
            },
            {
                defaultValue: 50,
                name: 'balance',
                type: 'int'
            },
            {
                defaultValue: [
                    0,
                    100
                ],
                name: 'randomRange',
                type: 'auto'
            },
            {
                defaultValue: 0,
                name: 'delay',
                type: 'int'
            },
            {
                defaultValue: false,
                name: 'random',
                type: 'boolean'
            }
        ]
    }
});