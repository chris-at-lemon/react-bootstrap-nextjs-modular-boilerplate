import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const searchHistory = atom({
  key: "searchHistory",
  default: [

  ],
  effects_UNSTABLE: [persistAtom]
});