/**
 ** Module : EXT-Test
 ** @bugsounet
 ** ©03-2023
 ** support: https://forum.bugsounet.fr
 **/

Module.register("EXT-Test", {
  defaults: {
    debug: true
  },

  getDom: function() {
    var dom = document.createElement("div")
    dom.style.display = 'none'
    return dom
  },

  notificationReceived: function(noti, payload,sender) {
    switch(noti) {
      case "GW_READY":
        if (sender == "Gateway") this.sendSocketNotification("INIT")
        break
    }
  }
})
