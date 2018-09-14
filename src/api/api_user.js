/**
 * Created by jianglu on 2018/9/5.
 * 用户相关api
 */
import * as API from '/'
import { Autocomplete } from 'element-ui';

export default {
  //登录
  // login: params => {
  //   return API.POST('/api/v1/users/login', params)
  // },
  // //登出
  // logout: params => {
  //   return API.GET('/api/v1/users/logout', params)
  // },

  test: params => {
    return API.GET('/api/check_is_user/', params)
  },
  // 自主推荐
  autocomplete: params => {
    return API.GET('/api/get_coffee_by_cls/', params)
  },

  // 选择推荐
  selectgeneration: params => {
    return API.GET('/api/get_select_coffee/', params)
  },

  // 咖啡因热量排行
  hotone: params => {
    return API.GET('/api/calories_sorted_list/', params)
  },
  // 卡路里热量排行
  hottwo: params => {
    return API.GET('api/caffeeine_sorted_list/', params)
  },
  // 咖啡选择热量展示
  hotradar: params => {
    return API.GET('api/analyse_cofee/', params)
  },

  // 咖啡销量占比
  hotoccupy: params => {
    return API.GET('api/name_sorted_pie/', params)
  },

  // 咖啡销量前三月
  hotmonth: params => {
    return API.GET('api/type_total_stacked/', params)
  },

  // 年龄层次
  agenum: params => {
    return API.GET('api/age_favorite/', params)
  },
  // 男性用户占比
  mannum: params => {
    return API.GET('api/get_sex_rate_by_cls/', params)
  },
  // 女性用户占比
  // womannum: params => {
  //   return API.GET('api/age_favorite/', params)
  // },
  area: params => {
    return API.GET('api/area_total_map/', params)
  }
}