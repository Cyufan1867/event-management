import request from '@/utils/request'
// 用户注册服务
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })
// 用户登录服务
export const userLoginService = ({ username, password }) =>
  request.post('api/login', { username, password })
// 获取用户信息服务
export const userGetInfoService = () => request.get('/my/userinfo')
// 更新用户信息服务
export const userUpdateInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })
