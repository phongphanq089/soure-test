import settingSaga from "@saga/settingSaga";
import { all } from "redux-saga/effects";

// Combine sagas
export function* rootSaga() {
    yield all( [
        settingSaga(),
    ] );
}