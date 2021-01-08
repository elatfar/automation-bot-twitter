describe('Twitter robot', () => {

    const randomWaitTime = Math.floor((Math.random() * 10) + 1500);
    const password = Cypress.env('password');
    const username = Cypress.env('username');
    const random_tweet = 'sepercik cinta di jiwa';

        it('Visiting website ', () => {
          cy.wait(randomWaitTime);
          cy.clearCookies();
          cy.wait(randomWaitTime);
          cy.visit('https://twitter.com/login');
        });

        it('log in', () => {
            cy.get('input[name*="session[username_or_email]"]').eq(0).type(username);
            cy.wait(randomWaitTime);
            cy.get('input[name*="session[password]"]').eq(0).type(password);
            cy.wait(randomWaitTime);
            cy.get('div[data-testid*="LoginForm_Login_Button"]').eq(0).click();
        });

        it('Let s search something and love it.. ',()=>{
            // cy.server();
            // cy.route('GET','**/search?**').as
            cy.get('a[data-testid*="AppTabBar_Explore_Link"]').eq(0).click();
            cy.wait(randomWaitTime+15000);
            cy.get('input[data-testid*="SearchBox_Search_Input"]').eq(0).type('love{enter}');
            cy.wait(randomWaitTime+15000);
            cy.get('div[data-testid*="like"]').click()
        });

        it.skip('Tweet', () =>{
            cy.get('a[data-testid*="SideNav_NewTweet_Button"]').eq(0).click();
            cy.wait(randomWaitTime);
            cy.get('div[aria-label*="Tweet text"]').eq(0).type(random_tweet);
            cy.wait(randomWaitTime);
            cy.get('div[data-testid*="tweetButton"]').eq(0).click();
        })

        it('log out', () =>{
            cy.get('div[data-testid*="SideNav_AccountSwitcher_Button"]').eq(0).click();
            cy.wait(randomWaitTime);
            cy.get('a[data-testid*="AccountSwitcher_Logout_Button"]').eq(0).click()
            cy.wait(randomWaitTime);
            cy.get('div[data-testid*="confirmationSheetConfirm"]').eq(0).click();
        })




});