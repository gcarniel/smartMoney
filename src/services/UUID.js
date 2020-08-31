//gera id aleatorios com base na data e hora: yarn add uuid

// import { v1 as uuidv1 } from 'uuid';
 
// export const getUUID = () => {
//   return uuidv1();
// };


import 'react-native-get-random-values';
import {v1 as uuidv1} from 'uuid';

export const getUUID = () => {
  return uuidv1();
};