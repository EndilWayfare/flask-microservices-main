import { Selector } from 'testcafe';


const TEST_URL = process.env.TEST_URL;


fixture('/').page(`${TEST_URL}/`);

test(`users should be able to view the '/' page`, async (t) => {

    await t
        .navigateTo(TEST_URL)
        .expect(Selector('H1').withText('All Users').exists).ok()

})

test(`users should be able to navigate to the '/about' page from '/' page`, async(t) => {

    await t
        .navigateTo(TEST_URL)
        .click(Selector('.nav li a').withText('About'))
        .expect(Selector('H1').withText('About').exists).ok()

})
