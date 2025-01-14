import http from "./httpServices";

export function getOTP(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOTP(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function logoutApi(data) {
  return http.post("/user/logout", data).then(({ data }) => data.data);
}

export function getUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function changeUserStatusApi({ userId, data }) {
  // data => {status:0, 1, 2}
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}
