describe('[Regression](GH-8391)', function () {
    it('Should not fail Firefox proxy-mode initialization', function () {
        return runTests('testcafe-fixtures/index.js', 'Should run a simple assertion in Firefox proxy mode', { only: 'firefox' });
    });
});
