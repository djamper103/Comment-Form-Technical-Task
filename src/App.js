import React,{useState,useEffect} from 'react'
import axios from "axios"
import InputForm from "./componets/form/inputForm"
import Mapping from './componets/mapping/mapping';
import BasicPagination from "./common/pagination"
import style from "./App.module.css"


function App() {

  const [state,setState]=useState()
  const [page,setPage]=useState(1)
  const [checkPage,setCheckPage]=useState(1)
  const [pagesCount,setPagesCount]=useState(1)


  useEffect(()=>{
      if(!state){
        axios.get(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`)
        .then(respons=>{
            debugger
            setState([...respons.data.data])
            setPagesCount(respons.data.last_page)
            setCheckPage(page)
        })
      }else if(state&&page!=checkPage){
        axios.get(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`)
        .then(respons=>{
            debugger
            setState([...respons.data.data])
            setPagesCount(respons.data.last_page)
            setCheckPage(page)
        })
      }
  },[page,state])

  function onPageChange(pageCount) {
      setPage(pageCount)
  }

  function morePages() {
      setPage(page+1)
  }

  return (
    <div className={style.app}>

        <InputForm/>
        
        <Mapping state={state}/>

        <div className={style.footer}>

          {
            page>=pagesCount?null:<button onClick={()=>morePages()}>More Pages</button>
          }
        
          <BasicPagination pagesCount={pagesCount} onPageChange={onPageChange} page={page}/>

        </div>

    </div>
  );
}

export default App;
