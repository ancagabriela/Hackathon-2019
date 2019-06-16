// pages/Babysitter Notification/babysitterNotifications.js
Page({
  showNotificationsModal : function(e){
    this.setData(
      {
        modalName: 'DialogModal1',
        modalNotification : this.data.notifications[e.currentTarget.dataset.index]
      }
    )
  },

  /**
   * Page initial data
   */
  data: {
    notifications: [{
      date: '15-06-2019',
      time: '12:00 - 14:00',
      address: "Shanghai, Jing'An, hengfeng road 200",
      review : 4
    }, {
        date: '16-06-2019',
        time: '15:00 - 17:30',
        address: "Shanghai, Xuhui, Yishan road 200",
        review: 5
      },
      {
        date: '20-06-2019',
        time: '17:30 - 19:30',
        address: "Shanghai, Xuhui, panyu road 1191 ",
        review: 5
      },
    ]
  },
  showModal(e) {
    this.setData(
      {
        modalName: e.currentTarget.dataset.target
      }
    )

  },
  hideModal(e) {
    this.setData({
      modalName: null
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