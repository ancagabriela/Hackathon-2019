// pages/nannyProfile/nannyProfile.js
function resetAddTimeForm() {
  return {
    fromDate: '2019-06-22',
    fromTime: '00:00',
    toTime: '00:00'
  }
}

Page({

  /**
   * Page initial data
   */
  data: {
    name: 'N',
    phone: '00000000000',
    isMale: false,
    languages: [
      {label: 'Chinese', checked: false},
      {label: 'English', checked: false}
    ],
    availableTimes: [],
    addTimeForm: resetAddTimeForm()
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  showAddTimeModal() {
    this.setData({
      modalName:'AddAvailableTime',
      addTimeForm: resetAddTimeForm()
    });
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  saveAddTime(e) {
    this.setData({
      availableTimes: this.data.availableTimes.concat([e.detail.value])
    })
    this.hideModal();
  },
  dateTimeChange(e) {
    this.setData({
      [e.currentTarget.dataset.target]: e.detail.value
    })
  }
})