import axios from "axios"
import { base_api } from '../../Api/Product_api'
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../FireBase"

export const Product_addAsync = (data) => {
    return async dispatch => {
        dispatch(loading())

        // await setDoc(doc(db, "students", "2"), data);
        await addDoc(collection(db, "Product"), data);
        dispatch(get_dataAsync(data))

        // axios.post(base_api + '/Product', data).then((res)=>{
        //     // console.log("res",res);
        //     dispatch(get_dataAsync(res.data));
        // }).catch((err)=>{
        //     console.log("ewrr",err);
        // })
    }
}

const loading = () => {
    return {
        type: "Loading"
    }
}

export const allData = (data) => {
    return {
        type: "AllData",
        payload: data
    }
}

export const    get_dataAsync = () => {
    return async dispatch => {
        dispatch(loading())

        let fire_data = [];

        const querySnapshot = await getDocs(collection(db, "Product"));
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());

            let get_firebase = {...doc.data(),id: doc.id};
            fire_data = [...fire_data,get_firebase];

            dispatch(allData(fire_data));
        });


        // axios.get(base_api + '/Product').then((res)=>{
        //     console.log("res",res.data);
        //     dispatch(allData(res.data))
        // }).catch((err)=>{
        //     console.log("ewrr",err);
        // })
    }
}