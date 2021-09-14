import React from "react";
import Pagination from "@material-ui/lab/Pagination";


let BasicPagination=({onPageChange,pagesCount,page})=>{

    return (
        <div style={{margin:"40px"}}>
            <Pagination count={pagesCount} page={page} color="secondary" variant="outlined" shape="rounded" siblingCount={2}
                        onChange={(event, page) => { onPageChange(page)}}/>
        </div>
    );
}
export default  BasicPagination