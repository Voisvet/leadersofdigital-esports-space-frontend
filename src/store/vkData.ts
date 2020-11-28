import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { makeAutoObservable, runInAction } from "mobx";

class VkData {
  startupParams: any = {};
  userProfile: UserInfo = {} as UserInfo;

  constructor() {
    const url = new URL(window.location.href);
    // @ts-ignore
    for (let [key, value] of url.searchParams) {
      if (key.startsWith('vk_') || key === 'sign') {
        this.startupParams[key] = value;
      }
    }
    makeAutoObservable(this);
  }

  async fetchUserProfile() {
    const user = await bridge.send('VKWebAppGetUserInfo');
    console.log(user);
    runInAction(() => (this.userProfile = user));
  }
}

export const vkData = new VkData();
