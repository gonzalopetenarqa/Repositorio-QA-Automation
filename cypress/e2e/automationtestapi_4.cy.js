describe('api testing',()=>{
    const newUser = {
        name: 'Gonzalo', // Ajusta este valor según lo necesites
        jobs: 'guitarrista',
        email: 'gonzalo@example.com' // Ajusta este valor según lo necesites
      };

    it('Validar crear nuevo usuario',()=>{
        cy.request({
            method:'POST',
            url:'https://67529803d1983b9597b6a368.mockapi.io/users',
            body: newUser
        }).then((postResponse) => {
            expect(postResponse.status).to.eq(201);
            expect(postResponse.body).to.have.property('name', newUser.name);
            expect(postResponse.body).to.have.property('jobs', newUser.jobs);
            expect(postResponse.body).to.have.property('email', newUser.email);
        
           
            cy.request({
                method:'GET',
                url:`https://67529803d1983b9597b6a368.mockapi.io/users/${postResponse.body.id}`
            }).then((getResponse)=>{
                expect(getResponse.status).to.eq(200);
                expect(getResponse.body).to.have.property('id', postResponse.body.id);
                expect(getResponse.body).to.have.property('name', newUser.name);
                expect(getResponse.body).to.have.property('jobs', newUser.jobs);
                expect(getResponse.body).to.have.property('email', newUser.email);


            cy.request({
                method:'DELETE',
                url:`https://67529803d1983b9597b6a368.mockapi.io/users/${postResponse.body.id}`
            }).then((deleteReponse)=>{
                expect(deleteReponse.status).to.eq(200);

            })
            });
        });   
    });
});



