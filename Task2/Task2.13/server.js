const fs = require('fs');
function fetchUserData(id) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log(`Fetching user ${id}...`);
            if (id > 10) {
                reject("User not found");
            } else {
                resolve({id,name:"Arun",email:"arun@mail.com"});
            }
        }, 400);
    });
}
function validateUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Validating email...");
            if (user.email.includes("@")) {
                resolve(user);
            } else {
                reject("Invalid email");
            }
        }, 200);
    });
}

function enrichUser(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Enriching user data...");
            user.role = "admin";
            user.joinedAt = new Date().toISOString();
            resolve(user);
        }, 300);
    });
}


function saveUser(user, retry = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Saving to users.json...");

            fs.writeFile('users.json', JSON.stringify(user, null, 2), (err) => {
                if (err) {
                    if (retry) {
                        console.log("Retrying save...");
                        resolve(saveUser(user, false));
                    } else {
                        reject("Save failed");
                    }
                } else {
                    resolve(user);
                }
            });
        }, 200);
    });
}


fetchUserData(5)
    .then(user => validateUser(user)
        .catch(() => {
            console.log("Recovering with default user...");
            return { id: 0, name: "Default", email: "default@mail.com" };
        })
    )
    .then(enrichUser)
    .then(saveUser)
    .then(user => {
        console.log("Done:", user);
    })
    .catch(err => console.error("Error:", err));