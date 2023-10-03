import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'


const Product = ({product}) => {

  const options = {
    value: product.rating,
    readOnly: true,
    precision: 0.5,
  };

  
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
        <ReactStars {...options} />{" "}<span className='productCardSpan'>{product.numOfReviews}</span>
        </div>
        <span>{`₹ ${product.price}`}</span>
    </Link>
  )
}

export default Product