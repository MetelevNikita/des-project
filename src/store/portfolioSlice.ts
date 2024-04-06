import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from "../app/firebaseApp";
import { collection, getDocs } from "firebase/firestore";

// types

import { PortfolioCardType } from "../components/types/types";

//


interface PortfolioSliceState {
  graphic: any,
  illustration: any,
  web: any,
}


const initialState: PortfolioSliceState = {
  graphic: [],
  illustration: [],
  web: [],
}



// get

export const getAsyncPortfolioWeb = createAsyncThunk(
  'portfolio/web',
  async () => {

    try {

      const querySnapshot = await getDocs(collection(db, 'portfolio', 'cotegory', 'web'));
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data()
      }))

      return data
    } catch (error) {
      console.log(error)
    }

  }
)


export const getAsyncPortfolioIllustration = createAsyncThunk(
  'portfolio/illustration',
  async () => {

    try {

      const querySnapshot = await getDocs(collection(db, 'portfolio', 'cotegory', 'illustration'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      return data
    } catch (error) {
      console.log(error)
    }

  }
)


export const getAsyncPortfolioGraphic = createAsyncThunk(
  'portfolio/graphic',
  async () => {

    try {

      const querySnapshot = await getDocs(collection(db, 'portfolio', 'cotegory', 'graphic'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))


      return data
    } catch (error) {
      console.log(error)
    }

  }
)


//




const PortfolioSlice = createSlice({
  name: 'portfolio',
  initialState,

  reducers: {},

  extraReducers(builder) {
    builder.addCase(getAsyncPortfolioWeb.fulfilled, (state, action) => {
      state.web = action.payload
    })

    builder.addCase(getAsyncPortfolioIllustration.fulfilled, (state, action) => {
      state.illustration = action.payload
    })

    builder.addCase(getAsyncPortfolioGraphic.fulfilled, (state, action) => {
      state.graphic = action.payload

    })

  }
})

export default PortfolioSlice.reducer;