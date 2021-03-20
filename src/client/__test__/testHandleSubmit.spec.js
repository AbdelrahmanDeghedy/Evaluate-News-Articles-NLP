const formHandler = require('../js/formHandler');

test('test handleSumit function', () => {
    // test handle submit function if it is defined
    expect(formHandler.handleSubmit).toBeDefined();
})