export default {
  //返回页面宽度
  getBodyWidth(state) {
    return state.bodyWidth;
  },
  //是否显示弹窗
  getCenterDialogVisible(state) {
    return state.centerDialogVisible;
  },
  //显示什么弹窗
  getModalStatus(state) {
    return state.modalStatus;
  },
  getNavBarActive(state) {
    return state.navBarActive;
  },
  //返回footer宽度
  getFooterWidth(state) {
    return state.footerWidth;
  },
  //返回素材请求分类
  getResourcesCate(state) {
    return state.resourcesCate;
  },
  //返回搜索字段
  getSearchVal(state){
    return state.searchVal;
  }
}
