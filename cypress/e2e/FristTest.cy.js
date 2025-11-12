it.only('Visit and login', function() {  // Visit OrangeHRM demo site

cy.clearCookies();
cy.clearLocalStorage();
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.wait(3000); // Wait for 3 seconds

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin'); // Enter username
cy.wait(3000); // Wait for 2 seconds
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123'); // Enter password
cy.wait(3000); // Wait for 2 seconds
cy.get('.oxd-button').click(); // Click login button
cy.wait(5000); // Wait for 5 seconds to ensure login is complete

//add employee
cy.get(':nth-child(1) > .oxd-main-menu-item').click(); // Click on PIM module
cy.wait(3000); // Wait for 3 seconds
cy.get('.orangehrm-header-container > .oxd-button').click(); // Click on Add Employee button
cy.wait(3000); // Wait for 3 seconds
cy.get('.oxd-autocomplete-text-input > input').type('a'); // Enter first name
cy.wait(3000); // Wait for 3 seconds
cy.get('.oxd-autocomplete-dropdown > :nth-child(1) > span').click(); // Select first name from dropdown
cy.wait(3000); // Wait for 3 seconds
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click(); // Click on location dropdown
cy.wait(3000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click(); // Select location
cy.wait(3000);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rakan'); // Enter last name
cy.wait(3000); // Wait for 3 seconds
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click(); // Click on job title dropdown
cy.wait(3000);
cy.get('.oxd-select-dropdown > :nth-child(2)').click(); // Select job title
cy.wait(3000);
cy.get('.oxd-button--secondary').click();
cy.wait(3000); // Wait for 10 seconds to ensure employee is added
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rakan12345'); // Enter password
cy.wait(3000); // Wait for 3 seconds
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rakan12345'); // Confirm password
cy.wait(3000); // Wait for 3 seconds
cy.get('.oxd-button--secondary').click(); // Click save button
cy.wait(10000); // Wait for 10 seconds to ensure employee is saved  

//delete employee
// cy.get(':nth-child(2) > .oxd-input').type('Rakan');
// cy.get('.oxd-form-actions > .oxd-button--secondary').click();
// cy.wait(3000); // Wait for 3 seconds
// cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click(); // Click delete button
// cy.wait(3000); // Wait for 3 seconds
// cy.get('.oxd-button--label-danger').click(); // Confirm delete
// cy.wait(5000); // Wait for 10 seconds to ensure employee is deleted    

// assertion
        cy.get('.oxd-table-body').should('contain', 'Rakan').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Rakan')
            .scrollIntoView({ duration: 300 })
            .should('exist')
            .within(() => {
                // checkbox click
                cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                    .click({ force: true });
                // click trash
                cy.get(':nth-child(1) > .oxd-icon')
                    .should('be.visible')
                    .click({ force: true, multiple: true });
            });
        cy.wait(1000);
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete

// /// upload file in job title
// cy.get(':nth-child(1) > .oxd-main-menu-item').click(); // Click on PIM module
// cy.wait(3000); // Wait for 3 seconds
// cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click(); // Click on Job Titles
// cy.wait(3000);
// cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click(); // Click on Job Titles
// cy.wait(3000);
// cy.get('.oxd-button').click(); // Click on Add button
// cy.wait(3000);
// cy.get(':nth-child(2) > .oxd-input').type('QA'); // Enter Job Title Name
// cy.wait(3000);
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Software Testing'); // Enter Job Title
// cy.wait(3000);
// // //////// Upload file/////
// cy.log('Uploading file');
// cy.get('[type="file"]').selectFile('cypress/fixtures/RakanCV-QA.pdf', { force: true}); // Upload file from
// cy.wait(5000); // Wait for 5 seconds to ensure file is uploaded

// cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('QA Job Description'); // Enter Job Description
// cy.wait(3000);
// cy.get('.oxd-button--secondary').click(); // Click on Save button
// cy.wait(10000); // Wait for 10 seconds to ensure job title is added

// // assertion
//         cy.get('.oxd-table-body').should('contain', 'QA').then(() => cy.log('Job title verified'));
//         cy.wait(4000);
//         // First find the exact row containing your job title and scrollview
//         cy.contains('.oxd-table-row', 'QA')
//             .scrollIntoView({ duration: 300 })
//             .should('exist')
//             .within(() => {
//                 // checkbox click
//                 cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
//                     .click({ force: true });
//                 // click trash
//                 cy.get(':nth-child(1) > .oxd-icon')
//                     .should('be.visible')
//                     .click({ force: true, multiple: true });
//             });
//         cy.wait(1000);// Wait for 1 second
//         cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete


// //add info//////
// cy.get(':nth-child(6) > .oxd-main-menu-item').click(); // Click on My Info module
// cy.wait(30000); // Wait for 3 seconds
// cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear(''); // Clear First Name field
// cy.wait(3000);
// cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Rakan'); // Enter First Name
// cy.wait(3000);
// cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear(''); // Clear Last Name field
// cy.wait(3000);
// cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('khaled'); // Enter Last Name
// cy.wait(3000);
// cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear(); // Clear Middle Name field
// cy.wait(3000);
// cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Alshehri'); // Enter Middle Name
// cy.wait(3000);

});

