import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'


const Product = ({product}) => {

  
  // const [ test, setTest ] = React.useState()

  // async function showData(){
  //   const data =  await axios.get('http://localhost:5000/api/v1/products')
  //   setTest(data)
  // }

  // React.useEffect( () => {
  //   showData()
  // }, [test] )

  // console.log(test)

  return (
    <Link className='productCard' to={product._id}>
      <img src={'https://media.istockphoto.com/id/1142212002/photo/front-of-men-cut-black-t-shirt-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=VZARRRO1PwMYKV9cHquulb69QwbxSEFA5S76-axY27c='} alt='t-shirt'/>
        <p>{product.name}</p>
        
        <div>
            <ReactStars
                edit={false}
                value={3}
                count={5}
                size={window.innerWidth < 600 ? 20: 25}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700" /> 

                <span className='productCardSpan'>[50 rating]</span>
        </div>
        <span>{product.price}</span>
    </Link>
  )
}

export default Product