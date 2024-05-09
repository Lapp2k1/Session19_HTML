let userChoice = prompt("Nhập 1,2,3:");
const users = [];
switch (userChoice) {
  case 1:
    const switchFn = true;
    let choose1;
    do {
      choose1 = prompt(" 1. A: Add user", "  2. E: Exit ");
      choose1 = choose1.toLowerCase();
      switch (choose1) {
        case "a":
          addUser();
          break;
        case "e":
          console.log(users);
          break;
      }
    } while (choose1.toLowerCase() !== "e");

    function addUser() {
      let id = 1;
      if (users.length > 0) {
        id = users[users.length - 1].id + 1;
      }
      const user = {
        id,
        name: "",
        email: "",
        password: "",
      };
      let name, email, password;

      do {
        name = prompt("Enter name: ");
      } while (!isNaN(name) || name.length < 3);

      do {
        email = prompt("Enter email: ");
      } while (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email));

      do {
        password = prompt("Enter password: ");
      } while (password.length < 8);

      user.name = name;
      user.email = email;
      user.password = password;

      users.push(user);
    }
    break;
  case 2:
    const users = [];

    let choose;
    do {
      choose = prompt("  1. R: Register", " 2. L: Login", "3. E: Exit");
      choose = choose.toLowerCase();
      switch (choose) {
        case "r":
          register();
          break;
        case "l":
          login();
          break;
        case "e":
          console.log(users);
          break;
      }
    } while (choose.toLowerCase() !== "e");

    function register() {
      let id = 1;
      if (users.length > 0) {
        id = users[users.length - 1].id + 1;
      }
      const user = {
        id,
        name: "",
        email: "",
        password: "",
      };
      let name, email, password;

      do {
        name = prompt("Enter name register: ");
      } while (!isNaN(name) || name.length < 3);

      do {
        email = prompt("Enter email register: ");
      } while (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email));

      do {
        password = prompt("Enter password register: ");
      } while (password.length < 8);

      user.name = name;
      user.email = email;
      user.password = password;

      users.push(user);
    }

    function login() {
      let emailLogin, passwordLogin;
      emailLogin = prompt("Enter email login: ");
      passwordLogin = prompt("Enter password login: ");

      const findUser = users.find(
        (user) => user.email === emailLogin && user.password === passwordLogin
      );

      if (!findUser) {
        console.log("Fail");
      } else {
        console.log("Success");
      }
    }
    break;
  case 3:
    break;

  default:
    break;
}
