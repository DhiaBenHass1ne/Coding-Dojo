// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const User = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        number: faker.phone.number(),
        _id: faker.string.uuid(),
    };
    return User;
};
const createCompany = () => {
    const Company = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address:{city : faker.location.city(),
                street: faker.location.street(),
            state: faker.location.state(),
        zipCode:faker.location.zipCode(),
    country:faker.location.country()} 

    };
    return Company;
};
    
app.get("/api/users/new", (req, res) => res.json( createUser() ))
app.get("/api/companies/new", (req, res) => res.json( createCompany() ))
app.get("/api/user/company", (req, res) => {
    const combinedData = {
        user: createUser(),
        company: createCompany()
    };
    res.json(combinedData);
});
app.listen( port, () => console.log(`Listening on port: ${port} ✔✔✔`) );