// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let getUsers = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await new Promise(resolve => setTimeout(() => resolve(response.json())));
    return data;
};

async function getNewUsers() {
    const Users = await getUsers();
    const newUsers = Users.map(function (user){return user.name}); 
    console.log(newUsers);
  }
   
getNewUsers();