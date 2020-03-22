const jsdom = require('jsdom');
const { JSDOM } = jsdom;

JSDOM.fromFile('test.svg', {
    contentType: 'image/svg+xml',
}).then(dom => {
    
    console.log(dom.serialize());
});
