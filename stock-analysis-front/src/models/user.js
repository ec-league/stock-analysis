import { currentUser, login, modifyUser, modifyUserPassword } from "@/services/user";
import { setAuthority } from "@/utils/authority";
import { message } from "antd";
import { sha256 } from "js-sha256";
import router from "umi/router";

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    status: undefined,
    password: {},
  },

  effects: {
    *fetchCurrent({ payload }, { call, put }) {
      const tokenId = sessionStorage.getItem("tokenId");

      if (!tokenId || tokenId === 'undefined') {
        router.push(`/user/login`);
        return
      }

      const response = yield call(currentUser);

      if (!response || !response.success) {
        router.push(`/user/login`);
        return
      }

      yield put({
        type: 'saveCurrentUser',
        payload: response.data,
      });
    },

    *login({ payload }, { call, put }) {

      const params = { ...payload };
      params.password = sha256(payload.password);

      const response = yield call(login, params);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });

      if (response !== null && response.success === true) {
        const user = response.data;

        sessionStorage.setItem('tokenId', user.tokenId);

        yield put({
          type: 'saveCurrentUser',
          payload: user,
        });

        yield put(router.push("/model-apply-dashboard"));
      } else if (response === null) {
        message.error("登陆失败, 请稍后再试!");
      } else {
        message.error(response.resultMsg);
      }
    },

    *setOriginPassword({ payload }, { call, put }) {
      yield put({
        type: 'saveOriginPassword',
        payload: payload,
      });
    },

    *setNewPassword({ payload }, { call, put }) {
      yield put({
        type: 'saveNewPassword',
        payload: payload,
      });
    },

    *setConfirmPassword({ payload }, { call, put }) {
      yield put({
        type: 'saveConfirmPassword',
        payload: payload,
      });
    },

    *modifyPassword({ payload }, { call, put }) {
      const originPassword = payload.originPassword;

      const newPassword = payload.newPassword;

      const confirmPassword = payload.confirmPassword;

      if (originPassword === newPassword) {
        message.error("新旧密码不能相同!");
        return;
      }

      if (confirmPassword !== newPassword) {
        message.error("新密码跟确认密码不一致!");
        return;
      }

      const params = {
        originPassword: sha256(originPassword),
        newPassword: sha256(newPassword),
        confirmPassword: sha256(confirmPassword),
      };

      const response = yield call(modifyUserPassword, params);

      if (response === null || !response.success) {
        message.error("更新密码失败, 请稍后再试!");
        return;
      }

      message.success("更新密码成功");

      sessionStorage.removeItem("tokenId");

      setAuthority("guest");

      router.push("/user/login");
    },

    * modifyUserInfo({ payload }, { call, put }) {
      const response = yield call(modifyUser, payload);

      if (response === null || !response.success) {
        message.error("更新用户信息失败, 请稍后再试!");
        return;
      }

      message.success("更新用户信息成功");
    },

    * setNewUserInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewUserInfo',
        payload: payload,
      })
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {

      setAuthority(action.payload.authority);

      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },

    saveOriginPassword(state, action) {
      const pw = state.password;

      pw.originPassword = action.payload;

      return {
        ...state,
      };
    },

    saveNewPassword(state, action) {
      const pw = state.password;

      pw.newPassword = action.payload;

      return {
        ...state,
      };
    },

    saveConfirmPassword(state, action) {
      const pw = state.password;

      pw.confirmPassword = action.payload;

      return {
        ...state,
      };
    },

    saveNewUserInfo(state, action) {
      const user = state.currentUser;

      user.email = action.payload.email;
      user.name = action.payload.name;
      user.phone = action.payload.phone;
      user.userProfile = action.payload.userProfile;
      user.address = action.payload.address;

      return {
        ...state,
      }
    },
  },
};
