const noti = document.getElementById("noti");

function login() {
  const loginButton = document.getElementById("login-button");
  const app = document.getElementById("app");

  // Thay đổi text sau khi đăng nhập thành công
  noti.innerHTML = "Chào mừng bạn đến với hệ thống của chúng tôi";

  //   Xoá button đăng nhập
  loginButton.remove();

  //   Tạo button đăng xuất
  const logoutButton = document.createElement("button");
  logoutButton.innerHTML = "Đăng xuất";

  // Thêm vào trong DOM tree
  app.appendChild(logoutButton);

  // Thêm một cái cờ để đánh dấu đã đăng nhập rồi
  const isAuthenticated = true;
  localStorage.setItem("isAuthenticated", isAuthenticated);
}

function initApp() {
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

  // Render nội dung phù hợp với trạng thái đăng nhập
  if (isAuthenticated === true) {
    // Chào mừng đến với hệ thống
    // In button Đăng xuất
    const notiElement = document.createElement("p");
    notiElement.innerText = "Chào mừng đến với hệ thống";
    notiElement.id = "noti";
    app.appendChild(notiElement);

    const logoutButton = document.createElement("button");
    logoutButton.innerText = "Đăng xuất";
    logoutButton.id = "logout-button";
    app.appendChild(logoutButton);
  } else {
    // Mời bạn đăng nhập vào hệ thống
    // In button Đăng nhập
    // Chào mừng đến với hệ thống
    // In button Đăng xuất
    const notiElement = document.createElement("p");
    notiElement.innerText = "Mời bạn đăng nhập vào hệ thống";
    notiElement.id = "noti";
    app.appendChild(notiElement);

    const login = document.createElement("button");
    login.innerText = "Đăng nhập";
    login.id = "login-button";
    app.appendChild(login);
  }
}
initApp();
