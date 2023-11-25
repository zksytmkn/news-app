import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { Clip } from '../types/clip';

const storage = createJSONStorage<any>(() => AsyncStorage);

export const clipAtom = atomWithStorage<Clip>('clip', [], storage);
