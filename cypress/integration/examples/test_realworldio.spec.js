describe('Test on demo.realworld.io', ()=>{

    const randomWaitTime = Math.floor((Math.random() * 10) + 1500);
    
    it('Visiting website and login',()=>{
        cy.viewport('macbook-11')
        cy.wait(randomWaitTime);
        cy.clearCookies();
        cy.visit('demo.realworld.io')
        cy.wait(randomWaitTime);
        cy.contains('Sign in').click()
        cy.get('input[placeholder*="Email"]').type('mawt@gmail.com')
        cy.wait(3020)
        cy.get('input[placeholder*="Password"]').type('mawt12345')
        cy.get('button[class*="btn btn-lg btn-primary pull-xs-right ng-binding"]').click()
        cy.wait(2000)
    })

    it('Exploring global feed ..',()=>{
        cy.contains('Global Feed').click()
        cy.wait(randomWaitTime);
        cy.get('article-list button').then(listOfbuttons => {
            var i;
            for (i = 0;i<5;i++){
                listOfbuttons[i].click()
            }
        })
        cy.wait(randomWaitTime);
    })

    it('Create an article .. ',()=>{
        cy.wait(3000)
        //cy.get('a[ui-sref*="app.editor"]').click()
        cy.visit('http://demo.realworld.io/#/editor/')
        cy.wait(3000)
        cy.get('input[placeholder*="Article Title"]').type('Tentang Judul')
        cy.get('input[placeholder*="What\'s this article about?"]').type('Membahas sebuah judul')
        cy.get('input[placeholder*="Write your article (in markdown)"]').type('Sebenarnya apasih judul, apa guna judul?')
        cy.get('input[placeholder*="Enter tags"]').type('title{enter}judul{enter}philosophy{enter}')
        cy.contains('Publish Article').click()

    })

    it('Find setting and then log out ..', ()=>{
        cy.get('a[href*="#/settings"]').click()
        cy.contains('Or click here to logout').click()
    })
})