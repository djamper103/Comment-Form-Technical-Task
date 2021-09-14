import React,{useState,useEffect} from 'react'
import axios from "axios"
import BasicPagination from "../../common/pagination"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
    name: yup.string().required(),
    text: yup.string().required()
});

export default function InputForm() {

    const [state,setState]=useState()
    const [page,setPage]=useState(1)
    const [pagesCount,setPagesCount]=useState(1)

    const [name,setName]=useState("")
    const [text,setText]=useState("")

    const { register, handleSubmit, formState:{ errors },reset } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(()=>{
        axios.get(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`)
        .then(respons=>{
            setState([...respons.data.data])
            setPagesCount(respons.data.last_page)
        })
    },[page,state])

    function onPageChange(pageCount) {
        setPage(pageCount)
    }

    function morePages() {
        setPage(page+1)
    }

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

            <div>
                {
                    state?state.length>0?state.map(item=>(
                        <div key={item.id}>
                            <div>Name: {item.name}</div>
                            <div>Text: {item.text}</div>
                        </div>
                    )):"Data has not been loaded yet":"Data has not been loaded yet"
                }
            </div>

                {
                    page>=pagesCount?"Вам уже хватит ,Страниц нет ":<button onClick={()=>morePages()}>More Pages</button>
                }
            <BasicPagination pagesCount={pagesCount} onPageChange={onPageChange} page={page}/>
        </div>
    )
}
