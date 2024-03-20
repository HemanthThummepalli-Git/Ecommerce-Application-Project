import React from 'react'
import { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchProducts from './SearchProducts';
function ProductsList() {

    let [List,setList]=useState([])
    let navigate=useNavigate()

    useEffect(()=>{
        fetch('http://localhost:4000/products',{method:'GET'})
        .then(res=>res.json())
        .then(ProductsArray=>setList(ProductsArray))
    })

    function CallForNavigation(userObj){

        let newurl=userObj.title.replaceAll(' ', '+')

        fetch(`http://localhost:4000/products/${newurl}`,{method:'GET'})
        .then(res=>res.json())
        navigate(`/productdisplay/${newurl}`,{state:userObj})

    }

  return (
    
    <div className='px-5'>

        <SearchProducts data={List}/>
        
        <div className="row d-flex justify-content-around" style={{marginTop:'80px'}} >
            {
                List.map(x=>
                    <div className='card col-lg-2 col-md-3 col-sm-1 p-4 shadow m-3' style={{width:'350px'}} key={x.id}>
                      <div className='d-block mx-auto p-3 rounded-3 mb-3'><img src={x.image} width={'130px'} height={'130px'} /></div>
                        <div className="card-body px-4 py-2">
                            <p className="fs-6 my-3">{x.title}</p>
                            <p className="fs-5 my-1">${x.price}</p>
                        </div>
                        <button className="btn btn-warning" onClick={()=>CallForNavigation(x)}>Details</button>
                    </div>)
            }
        </div>
        
    </div>
  )
}

export default ProductsList