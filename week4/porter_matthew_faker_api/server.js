const { faker } = require('@faker-js/faker')
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );

const newUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.number()
    }
}

const newCorp = () => {
    return {
        _id: faker.datatype.number(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (request, response) => {
    const createUser = newUser();
    response.json( createUser )
})

app.get("/api/companies/new", (request, response) => {
    const createCorp = newCorp();
    response.json( createCorp )
})


app.get("/api/user/company", (request, response) => {
    const createCorp = newCorp();
    const createUser = newUser();
    const userCompany = {
        user: createUser,
        company: createCorp
    }
    response.json(userCompany)
})








//this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

// const users = [
//     { firstName: "Sol", lastName: "Badguy"},
//     { firstName: "Ky", lastName: "Kiske"},
//     { firstName: "Leo", lastName: "Whitefang"},
//     { firstName: "Kum", lastName: "Haehyun"},
//     { firstName: "Elphelt", lastName: "Valentine"},
//     { firstName: "Ramlethal", lastName: "Valentine"}
// ]


// app.get("/api/users/:id", (request, response) => {
//     console.log(request.params);
//     console.log(request.params.id);
//     response.json(users[request.params.id])
// })

// app.post("/api/post", (request, response) => {
//     console.log(request.body);
//     users.push(request.body)
//     response.json( users )
// });





