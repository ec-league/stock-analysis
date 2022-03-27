import { modifyUserAuthority, queryUserById, queryUserList, register, invalidateUser } from "@/services/user";
import { message } from "antd";
import { sha256 } from "js-sha256";

export default {
  namespace: 'user_manage',

  state: {
    data: [],
    user: {},
    newUser: {},
  },

  effects: {
    *queryUserList({ payload }, { call, put }) {
      const response = yield call(queryUserList, payload);
      if (!response || !response.success) {
        message.error("查询用户列表失败!");
        return;
      }

      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },

    *queryById({ payload }, { call, put }) {
      const response = yield call(queryUserById, payload);

      if (!response || !response.success) {
        message.error("查询用户列表失败!");
        return;
      }

      yield put({
        type: 'queryUserById',
        payload: response.data,
      });
    },

    *modifyUser({ payload }, { call, put }) {
      const response = yield call(modifyUserAuthority, payload);

      if (!response || !response.success) {
        message.error("查询用户列表失败!");
        return;
      }

      message.success("修改用户成功!");
    },

    *addUser({ payload }, { call, put }) {

      const password = payload.password;

      const confirmPassword = payload.confirmPassword;

      if (password !== confirmPassword) {
        message.error("新增用户的两个密码不一致!");
        return;
      }

      const params = {
        ...payload,
        password: sha256(password),
      };

      const response = yield call(register, params);

      if (!response || !response.success) {
        message.error("新建用户失败!");
        return;
      }

      message.success("新增用户成功!");
    },

    *setUserAuthority({ payload }, { call, put }) {
      yield put({
        type: 'saveUserAuthority',
        payload: payload,
      });
    },

    *setNewUserInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewUserInfo',
        payload: payload,
      });
    },

    *setNewUserAuthority({ payload }, { call, put }) {
      yield put({
        type: 'saveUserAuthority',
        payload: payload,
      });
    },

    * invalidate({ payload }, { call, put }) {
      const response = yield call(invalidateUser, payload);

      if (response === null || !response.success) {
        message.error("更新用户状态失败, 请稍后再试!");
        return;
      }

      message.success("操作成功");

      const responseNew = yield call(queryUserList, payload);
      if (!responseNew || !responseNew.success) {
        message.error("查询用户列表失败!");
        return;
      }

      yield put({
        type: 'queryList',
        payload: Array.isArray(responseNew.data) ? responseNew.data : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    queryUserById(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },

    saveUserAuthority(state, action) {
      const user = state.user;
      user.authority = action.payload;
      return {
        ...state,
      };
    },

    saveNewUserInfo(state, action) {
      const s = state;
      s.newUser = {
        ...action.payload,
      };

      return {
        ...state,
      };
    }
  },
};
