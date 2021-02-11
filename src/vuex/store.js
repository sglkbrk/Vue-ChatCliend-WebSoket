import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    activeSideBar: 'chatsSidebar',
    activeChatRoom:{},
    stompClient:null,
    chatRooms:[],
    messages:{},
    template:localStorage.getItem("template")  || "dark",
    myUser:{},
    userSettingsModal:false,
    settingsModal:false,
    profileModal:false,
    profileItem:{},
    notificationData:JSON.parse(localStorage.getItem("notificationData")) || {
        notification:true,
        notificationMsg:true,
        soud:true
    },
    profilMedia:[],
  },
  mutations: {
    setActiveSideBar(state, activeSideBar) {
      state.activeSideBar = activeSideBar
    },
    setActiveChatRoom(state, activeChatRoom) {
      state.activeChatRoom = activeChatRoom
    },
    setStompClient(state, stompClient) {
      state.stompClient = stompClient
    },
    setChatRooms(state, chatRooms) {
      state.chatRooms = chatRooms
    },
    setMessages(state, messages) {
      state.messages = messages
    },
    setTemplate(state, template) {
      state.template = template
    },
    setMyUser(state, myUser) {
      state.myUser = myUser
    },
    setUserSettingsModal(state, userSettingsModal) {
      state.userSettingsModal = userSettingsModal
    },
    setProfileItem(state, profileItem) {
      state.profileItem = profileItem
    },
    setProfileModal(state, profileModal) {
      state.profileModal = profileModal
    },
    setSettingsModal(state, settingsModal) {
      state.settingsModal = settingsModal
    },
    setNotificationData(state, notificationData) {
      state.notificationData = notificationData
    },
    setProfilMedia(state, profilMedia) {
      state.profilMedia = profilMedia
    }
  },
  getters: {
    activeSideBar: state => state.activeSideBar,
    activeChatRoom: state => state.activeChatRoom,
    stompClient: state => state.stompClient,
    chatRooms: state => state.chatRooms,
    template: state => state.template,
    myUser: state => state.myUser,
    userSettingsModal: state => state.userSettingsModal,
    profileItem: state => state.profileItem,
    profileModal: state => state.profileModal,
    settingsModal: state => state.settingsModal,
    notificationData: state => state.notificationData,
    profilMedia: state => state.profilMedia,
  }
})