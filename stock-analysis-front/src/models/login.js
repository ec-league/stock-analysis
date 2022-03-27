import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { getFakeCaptcha } from '@/services/api';
import { login } from "@/services/user";
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',

  state: {
    status: undefined,
    tokenId: "",
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });

      if (response !== null && response.success === true) {
        const data = response.data;

        sessionStorage.setItem('tokenId', data.tokenId);

        console.log(localStorage);

        reloadAuthorized();

        yield put(routerRedux.push("/"));
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      const { redirect } = getPageQuery();
      // redirect
      if (window.location.pathname !== '/user/login' && !redirect) {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          })
        );
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.authority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
        currentAuthority: payload.authority,
      };
    },


  },
};
