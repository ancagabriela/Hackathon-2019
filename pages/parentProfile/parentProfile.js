// pages/parentProfile/parentProfile.js
Page({

  /**
   * Page initial data
   */
  data: {
    array: ['USA', 'China', 'Brazil', 'Japan'],
    objectArray: [
      {
        id: 0,
        name: 'USA'
      },
      {
        id: 1,
        name: 'China'
      },
      {
        id: 2,
        name: 'Brazil'
      },
      {
        id: 3,
        name: 'Japan'
      }
    ],
    index: 2,
   
  },
  bindPickerChange: function (e) {
    console.log('picker send selection modified. The carry value is ', e.detail.value)
    this.setData({
      index: e.detail.value
    })



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

  }
})