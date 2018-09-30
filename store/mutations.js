export default {
  //页面宽度的更改
  updateBodyWidth(state, bodyWidth) {
    state.bodyWidth = bodyWidth;
  },
  //首页弹窗状态更改
  updateCenterDialogVisible(state, centerDialogVisible) {
    state.centerDialogVisible = centerDialogVisible;
  },
  //首页模态框类型
  updatemodalStatus(state, modalStatus) {
    state.modalStatus = modalStatus;
  },
  //顶部栏选择页面
  updateNavBarActive(state, navBarActive) {
    state.navBarActive = navBarActive;
  },
  //列表详情projectId
  updateProjectId(state, projectId) {
    state.projectId = projectId;
  },
  //列表详情projectId
  updateFooterWidth(state, footerWidth) {
    state.footerWidth = footerWidth;
  },
  //素材请求分类
  updateResourcesCate(state, resourcesCate) {
    state.resourcesCate = resourcesCate;
  },
  //搜索字段
  updateSearchVal(state, searchVal) {
    state.searchVal = searchVal;
  },
}
