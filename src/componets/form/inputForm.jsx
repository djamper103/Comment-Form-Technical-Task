import React from 'react'
import axios from "axios"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
    name: yup.string().required(),
    text: yup.string().required()
});  


export default function InputForm({}) {

    const { register, handleSubmit, formState:{ errors },reset } = useForm({
        resolver: yupResolver(schema)
    });

    function submit(data) {
        axios.post(`https://jordan.ashton.fashion/api/goods/30/comments`,{
            name:data.name,
            text:data.text
        })
        .then(respons=>{
            console.log(respons.status)
        })
        reset()
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                
                <div>

                    <h3>Name</h3>

                    <input {...register("name", { required: true })} />
                    <p>{errors.name?.message}</p>

                </div>

                <div>

                    <h3>Your text</h3>

                    <input {...register("text", { required: true })} />
                    <p>{errors.text?.message}</p>

                </div>
                
                <input type="submit"/>

            </form>

        </div>
    )
}
