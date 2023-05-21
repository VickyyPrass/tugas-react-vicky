import { useDispatch, useSelector } from "react-redux";
import {
    cekPengurangan,
    penambahan,
} from "../app/features/CounterFeatures/actions";

const Counter = () => {
    // state.counter berasar dari store variabel  rootReducer
    let { count } = useSelector((state) => state.counter);
    // dispatch merupakan sebuah alat/function untuk mengirim pilot yang ditangkap oleh store dan diteruskan ke reducer untuk mengtrigger semua action yang ada untuk mengoperasikan state yang ada
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(cekPengurangan(1))}>-</button>
            <span> {count} </span>
            <button onClick={() => dispatch(penambahan(1))}>+</button>
        </div>
    );
};

export default Counter;
