// let users = []; // Khởi tạo mảng users

// while (true) {
//   let id = prompt("Nhập ID:");
//   let userName = prompt("Nhập tên người dùng:");
//   let email = prompt("Nhập email:");
//   let password = prompt("Nhập mật khẩu:");

//   // Validate dữ liệu
//   if (
//     id.trim() === "" ||
//     userName.trim() === "" ||
//     email.trim() === "" ||
//     password.trim() === ""
//   ) {
//     alert("Tên, email và mật khẩu không được để trống. Vui lòng nhập lại.");
//     continue;
//   }
//   if (userName.length < 3) {
//     alert("Tên người dùng không được ngắn hơn 3 ký tự. Vui lòng nhập lại.");
//     continue;
//   }
//   if (!validateEmail(email)) {
//     alert("Email không đúng định dạng. Vui lòng nhập lại.");
//     continue;
//   }
//   if (password.length < 8) {
//     alert("Mật khẩu phải có ít nhất 8 ký tự. Vui lòng nhập lại.");
//     continue;
//   }

//   // Nếu dữ liệu hợp lệ, thêm đối tượng user vào mảng
//   users.push({ id: id, userName: userName, email: email, password: password });

//   // Hỏi người dùng có muốn dừng hay không
//   let stop = prompt("Bạn có muốn nhập thêm người dùng không? (yes/no)");
//   if (stop.toLowerCase() !== "yes") {
//     break;
//   }
// }

// // Hàm validateEmail để kiểm tra định dạng email
// function validateEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }

// // Hiển thị thông tin người dùng sau khi nhập
// console.log("Danh sách người dùng:");
// console.log(users);
let info = [];
let validate = true;
let sto = "yes";

while (sto !== "no") {
  let name1 = prompt("Nhap ten");
  let email = prompt("Nhap email");
  let pass = prompt("Nhap mat khau");

  if (name1 === "" || email === "" || pass === "") {
    alert("Tên, email và mật khẩu không được để trống");
  } else if (name1.length <= 3) {
    alert("Tên không được ngắn hơn 3 ký tự");
    validate = false;
  } else if (!email.endsWith("@gmail.com")) {
    alert("Email không đúng định dạng");
    validate = false;
  } else if (pass.length <= 8) {
    alert("Mật khẩu tối thiểu 8 ký tự");
    validate = false;
  } else {
    info.push({ name: name1, email: email, pass: pass });
    console.log(info);
    sto = prompt("Bạn còn muốn nhập thêm nữa không?");
  }
}
