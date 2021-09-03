import * as types from './ActionTypes';

// export default function name() {
//     return {
//         type: types.NAME
//     };
// }

export  function submitValue(submitVal) {
    return {
        type: types.SUBMIT_VALUE,
        submitVal,
    }
}