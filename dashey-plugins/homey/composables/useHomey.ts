// @ts-nocheck
import { AthomCloudAPI } from 'homey-api'

const cloudApi = new AthomCloudAPI({
  clientId: '5a8d4ca6eb9f7a2c9d6ccf6d',
  clientSecret: 'e3ace394af9f615857ceaa61b053f966ddcfb12a',
  redirectUrl: 'http://localhost'
})

let devices = reactive({})
let _user = null
let _homey = null
let _homeyApi = null

export const useHomey = () => {
  const loading = ref(false)
  const login = async () => {
    const loggedIn = await cloudApi.isLoggedIn()
    if (!loggedIn) {
      if (cloudApi.hasAuthorizationCode()) {
        await cloudApi.authenticateWithAuthorizationCode()
      } else {
        window.location.href = cloudApi.getLoginUrl()
        return false
      }
    }

    _user = await cloudApi.getAuthenticatedUser()
    _homey = await _user.getFirstHomey()
    _homeyApi = await _homey.authenticate()
  }

  const connect = async () => {
    await _homeyApi.connect()
  }

  const getDevices = async (): Array => {
    if (!_homeyApi) { return false }
    if (!devices.length) {
      const result = await _homeyApi.devices.getDevices()
      devices = Object.values(result)
    }
    return devices
  }

  const getDeviceById = id => {
    const found = Object.values(devices).find(device => {
      return device.id === id
    })
    return found
  }

  return { login, connect, devices, loading, getDevices, getDeviceById }
}
