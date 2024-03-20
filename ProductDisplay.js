import React from 'react'
import { useLocation } from 'react-router-dom'
import Media from 'react-media'
import SearchProducts from './SearchProducts'

function ProductDisplay() {

  let {state}=useLocation()
  let l=state.rating.rate

return (

  <div>
      <nav className="navbar navbar-light bg-black fixed-top">
        <div className="container-fluid d-flex justify-content-center gap-3">
        <div><img className="rounded-2"src="https://dynamic.brandcrowd.com/asset/logo/b8342019-d4f2-45a6-9e1f-cab7a32a25a0/logo-search-grid-1x?logoTemplateVersion=1&v=638368104991400000&text=Assemblage" width={'65px'} height={'55px'} /></div>
        <h2 className='text-light'>Assemblage</h2> 
        </div>
      </nav>

      <div className="mt-5">
          <Media queries={{ small: { maxWidth: 768 } }}>
              {
              matches => matches.small ? (
                <div className="container py-4 w-100">
              <div className="d-flex gap-4 flex-column w-100 border border-2 shadow rounded-3 p-4">
                <div className='mx-auto'>
                  <img src={state.image} width={'200px'} height={'200px'}/>
                </div>
                <div className='w-100'>
                    <p className='fs-4'>{state.title}</p>
                    <p className='fs-4'>Price: ${state.price}</p>
                    <div className='d-flex align-items-center my-3'>
                      <p className="fs-4 m-0 d-inline">Rating:</p>
                      <div className='d-flex align-items-center px-1'>
                      {
                        [...Array(Math.floor(l))].map((e, i) =><div key={i}className='px-1 d-flex'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaKhiUFuClYUFKwiS1ErATDsRAutYTMq_f8daJTxuOK_-6lqSfnBe0WegWSy4z01psEc&usqp=CAU" width={'20px'} height={'20px'} /></div>)
                      }
                      </div>
                      <p className="fs-6 d-inline m-0">{state.rating.count}</p>
                    </div>
                    <p className="fs-4">Description:</p>
                    <p className='fs-6'>{state.description}</p>
                </div>
            </div>
                </div>
                ) : (
                <div className="container p-5 w-100">
                <div className="d-flex gap-5 border border-2 shadow rounded-3 p-5">
                <div className='mx-auto'>
                  <img src={state.image} width={'350px'} height={'350px'}/>
                </div>
                <div className='w-100'>
                    <p className='fs-3'>{state.title}</p>
                    <p className='fs-3'>Price: ${state.price}</p>
                    <div className='d-flex align-items-center my-3'>
                      <p className="fs-3 m-0 d-inline">Rating:</p>
                      <div className='d-flex align-items-center px-1'>
                      {
                        [...Array(Math.floor(l))].map((e, i) =><div key={i} className='px-1 d-flex'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaKhiUFuClYUFKwiS1ErATDsRAutYTMq_f8daJTxuOK_-6lqSfnBe0WegWSy4z01psEc&usqp=CAU" width={'25px'} height={'25px'} /></div>)
                      }
                      </div>
                      <p className="fs-6 d-inline m-0">{state.rating.count} customers reviews</p>
                    </div>
                    <p className="fs-3">Description: </p>
                    <p className='fs-5'>{state.description}</p>
                </div>
            </div>
                </div>)
              }
          </Media>
       </div>
  </div>
  )
} 

export default ProductDisplay