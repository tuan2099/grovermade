import React , {useEffect , useState , useMemo } from 'react';
import {withStyles} from '@mui/styles';
import styles from './style';
import { useParams } from 'react-router-dom';
import {useDispatch ,useSelector} from 'react-redux'
import Productdetail2 from './productdetail2'
import {productsdetail} from '../../redux/productDetailSlice'


 const Productdetail = (props) => {


  const {ProductID} = useParams();
  const dispatch = useDispatch();
  const productlisst = useSelector((state) => state.productdetail);

    
  



      

      useEffect(() => {
          async function getProduct() {
              try{
                const res = await fetch(`https://data-grovermade.herokuapp.com/api/data/${ProductID}`)
                const data = await res.json()

                // setProductdetail(data)
                dispatch(productsdetail(data));

              } catch (error){
                  console.log(error)
              }
          }
          getProduct()
         
      } ,[ProductID, dispatch])

      
            
  return <>

            
            {[productlisst.productnewarr].map((product) =>{
              
              return < Productdetail2 key={product} product = {product}></Productdetail2>
            })} 

            {/* < Productdetail2  product = {productlisst}></Productdetail2> */}

        </>
};

export default withStyles(styles) (Productdetail);
