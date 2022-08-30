'use strict';

const {createTest} = require('@putout/test');
const plugin = require('..');
const test = createTest(__dirname, {
    '<%= pluginId %>': plugin,
});

test('<%= pluginId %>: report', (t) => {
    t.reportCode('debugger', `Unexpected 'debugger' statement`);
    t.end();
});

test('remove debugger: transformCode', (t) => {
    t.transformCode(`<%= pluginId %>`, '');
    t.end();
});

