import axiosClient from '@configs/axios';
import { selectorSetting } from '@slices/setting';
import { all, call, select, takeLatest } from 'redux-saga/effects';

// worker saga
function* setOptionSaga( ) {
    try {
        // get the updated setting from the state
        const setting = yield select( selectorSetting );
        try {
            const { data } = yield axiosClient.post( '@/settings/update', { setting: JSON.stringify( setting ) } );
            console.log( data ); // log dữ liệu trả về từ server
        } catch ( error ) {
            console.error( error );
        }        
    } catch ( error ) {
        // xử lý lỗi
        console.log( 'fetchSettingData error:', error );
    }
}

// watcher saga
export function* setOptionWatcher() {
    yield takeLatest( 'setting/setOption', setOptionSaga );
}

// export default saga
export default function* settingSaga() {
    yield all( [ call( setOptionWatcher ) ] );
}