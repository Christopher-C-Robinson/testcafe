import { Selector } from 'testcafe';

fixture('GH-8391 - Firefox proxy mode should initialize scripts')
    .page`http://localhost:3000/fixtures/regression/gh-8391/pages/index.html`;

test('Should run a simple assertion in Firefox proxy mode', async t => {
    await t.expect(Selector('#status').innerText).eql('ok');
});
