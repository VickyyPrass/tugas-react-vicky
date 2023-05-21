// file ini berisi semua aksi yang di pisah dari dispatch secara terpisah
// file ini juga disebut sebagai pilot

import * as counter from "./constans";

export const penambahan = (value) => {
    return {
        type: counter.tambah,
        value: value,
    };
};

export const pengurangan = (value) => {
    return {
        type: counter.kurang,
        value: value,
    };
};

export const cekPengurangan = (value) => {
    return (dispatch, getState) => {
        if (getState().counter.count > 0) {
            dispatch(pengurangan(value));
        }
    };
};
