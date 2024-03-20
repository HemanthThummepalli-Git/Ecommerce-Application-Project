import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Media from 'react-media'

function SearchProducts(props) {

    let navigate=useNavigate()
    let ProductsTitles=[]


    for(let i=0;i<props.data.length;i++){
      ProductsTitles.push(props.data[i].title)
    }
    

    const [searchItem, setSearchItem] = useState('')
    const [suggest, setSuggest] = useState([]) 
  
    const handleChange = (event) => {
      const input = event.target.value
      setSearchItem(input)
  
      const filtered = ProductsTitles.filter(
        (item) => (item).toLowerCase().includes(input.toLowerCase())
      )

      setSuggest(filtered)
    }
  
    const handleSelected = (x) => {
      let nl=String(x).replaceAll(' ', '+')
      fetch(`http://localhost:4000/products?title=${nl}`,{method:'GET'})
      .then(res=>res.json())
      .then(Obj=>navigate(`/productdisplay/${nl}`,{state:Obj[0]}))
      setSuggest([])
    }

  return (
<div>
  <Media queries={{ small: { maxWidth: 768 } }}>
    {
    matches => matches.small ? ( 
      <nav className="navbar navbar-light bg-black fixed-top">
      <div className="container-fluid d-flex justify-content-between">

        <div><img className='rounded-4' src="https://dynamic.brandcrowd.com/asset/logo/b8342019-d4f2-45a6-9e1f-cab7a32a25a0/logo-search-grid-1x?logoTemplateVersion=1&v=638368104991400000&text=Assemblage" width={'65px'} height={'55px'}/></div>
          <div>
            <div style={{ position: 'relative' }}>
              <input type="text" value={searchItem} onChange={handleChange}  placeholder="Search"  className='form-control'/>
              {suggest.length > 0 && (
                <div
                  style={{position: 'absolute',width:'210px'}} className='border border-1 bg-light rounded-bottom-3'>
                  <ul style={{ listStyleType: 'none'}} className='p-0'>
                    {
                      suggest.map((item, i) => (
                      <li key={i} style={{ cursor: 'pointer' }} onClick={() => handleSelected(item)} className='px-3 py-2'> {item} </li>
                    ))}
                  </ul>
                </div>
              )}
             
            </div>
          </div>
        </div>

      </nav> ) : (
      <nav className="navbar navbar-light bg-black fixed-top">
      <div className="container-fluid">
        <div className='d-flex gap-3 align-items-center'>
          <div><img className='rounded-4' src="https://dynamic.brandcrowd.com/asset/logo/b8342019-d4f2-45a6-9e1f-cab7a32a25a0/logo-search-grid-1x?logoTemplateVersion=1&v=638368104991400000&text=Assemblage" width={'65px'} height={'55px'}/></div>
          <h2 className='text-light'>Assemblage</h2>
        </div>
        <div className="d-flex">
          <div>
            <div style={{ position: 'relative' }}>
              <input type="text" value={searchItem} onChange={handleChange} placeholder="Search" className='form-control' style={{width:'350px'}}/>
              {suggest.length > 0 && (
                <div
                  style={{position: 'absolute',width:'350px'}} className='border border-1 bg-light rounded-bottom-3'>
                  <ul style={{ listStyleType: 'none'}} className='p-0'>
                    {suggest.map((item, i) => (
                      <li key={i} style={{ cursor: 'pointer' }} onClick={() => handleSelected(item)} className='px-3 py-2'> {item} </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* <button className="btn btn-outline-warning">Search</button> */}
        </div>
      </div>
      </nav>)
    }
  </Media>
</div>

  )
}

export default SearchProducts