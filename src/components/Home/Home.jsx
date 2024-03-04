import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function Home() {
  return(
    <div className="flex flex-col justify-center items-center bg-slate-200 h-[100vh]">
    <div className="flex w-[75%]  flex-col items-center justify-center">
        <h1 className="text-center">Enter Synptoms</h1>
        <TextField fullWidth label="synptoms" id="fullWidth" />
        <div className="m-5">
        <Button  variant="contained">Predict</Button>
        </div>
    </div>
    <div className="m-5">
       <h2 className="text-center">You may have diabetes as predicted deasease</h2>
    </div>
    <div className="flex w-[80%] flex-col items-center justify-center"></div>
</div>
  )
}