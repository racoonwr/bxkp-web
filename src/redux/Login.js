// 登录成功的事件
export const loginSuccessCreator = (userName) => {
  return {type: 'LOGIN_SUCCESS', payload: userName};
};

const tmp = window.localStorage.getItem('loginReduxState');
var initState;

if (tmp) {
  initState = JSON.parse(tmp);
  if ((new Date().getTime() - initState.loginTime)/1000 > 60*30){ //半小时
    window.localStorage.removeItem('loginReduxState');
    initState = {
      login: false,  // 是否已登录
      userName: '未登录', // 登录后的用户名
    };
  }else{
    initState.loginTime = new Date().getTime();
  }
} else {
  initState = {
    login: false,  // 是否已登录
    userName: '未登录', // 登录后的用户名
  };
}

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      window.localStorage.removeItem('loginReduxState');
      delete state.login;
      delete state.userName;
      const tmp = {...state, login: true, userName: action.payload, loginTime: new Date().getTime()};
      console.log(JSON.stringify(tmp))
      window.localStorage.setItem('loginReduxState', JSON.stringify(tmp));
      return tmp;
    default:
      return state;
  }
};

export default {initState, reducer};
