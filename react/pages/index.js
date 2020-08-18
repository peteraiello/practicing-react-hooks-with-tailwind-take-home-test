import Head from 'next/head'
import React, { useState } from 'react';
import Footer from '../components/footer'
import Product from '../components/product'
import ProductGallery from '../components/productGallery'
import ProductDescription from '../components/productDescription'
import FormOption from '../components/FormOption'
import ProductSpecifications from '../components/productSpecifications'

export default function Home() {

  let price = 1799;
  
  const [ampPrice, setPrice] = useState({
      price: price,
  });

  const [active1, setActive1] = useState({
    active: 0
  })

  const [active2, setActive2] = useState({
    active: 0
  })

  const [active3, setActive3] = useState({
    active: 0
  })

  const [costState1, setCost1] = useState({
    cost: 0
  })

  let totalGroup1 = costState1.cost;

  const [costState2, setCost2] = useState({
    cost: 0
  });

  let totalGroup2 = costState2.cost;

  function myCalc() {
    setPrice({ price: price + totalGroup1 + totalGroup2 }) 
  }

  const clickHandler1 = (id, cost) => {
    setActive1({ active: id })
    setCost1({ cost: cost })
    totalGroup1 = cost;
    myCalc();
    event.preventDefault();
  }

  const clickHandler2 = (id, cost) => {
    setActive2({ active: id })
    setCost2({ cost: cost })
    totalGroup2 = cost;
    myCalc();
    event.preventDefault();
  }

  const clickHandler3 = (id) => {
    setActive3({ active: id })
    event.preventDefault();
  }

  const buttonGroup1 = [
    {id: 0, title: 'None', content: 'Use in the studio or with your own power amp.', cost: 0 },
    {id: 1, title: 'Powered', content: 'Built-in 600W solid state power amp.', cost: 449 },
  ];

  const buttonGroup2 = [
    {id: 0, title: 'None', content: ' ', cost: 0 },
    {id: 1, title: 'Profiler Remote Foot Controller', content: ' ', cost: 449 },
  ];

  const buttonGroup3 = [
    {id: 0, title: 'Profiler Head', content: 'Compact amplifier head, perfect for a speaker cabinet or desk.', cost: 0 },
    {id: 1, title: 'Profiler Rack', content: '3U rackmount version of the classic profiling amplifier', cost: 0 },
  ];

  return (
    <div>

      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div className="container px-4 mb-32 lg:mb-40 mx-auto">

        <div className="grid grid-cols-2 gap-6">

          <div className="col-span-2">

            <Product />

          </div>

          <div className="col-span-2 lg:col-span-1">

            <ProductGallery />

          </div>

          <div className="col-span-2 lg:col-span-1">

            <ProductDescription price={ ampPrice.price } />
            
            <div className="container mb-10">

              <h3 className="text-2xl">Form Factor</h3>
              <ul>
                  { buttonGroup3.map((buttons3, index) => 
                  <li key={index}>
                      <FormOption id={ buttons3.id } title={buttons3.title} content={buttons3.content} cost={ buttons3.cost } label={ index } activeButton={ active3.active } click={ clickHandler3 }
                      ></FormOption>
                  </li>
                  )}
              </ul>
              <h3 className="text-2xl">Power Amp</h3>
              <ul>
                  { buttonGroup1.map((buttons1, index) => 
                  <li key={index}>
                      <FormOption id={ buttons1.id } title={buttons1.title} content={buttons1.content} cost={ buttons1.cost } label={ index} activeButton={ active1.active } click={ clickHandler1 }
                      ></FormOption>
                  </li>
                  )}
              </ul>
              <h3>Foot Controller</h3>
              <ul>
                  { buttonGroup2.map((buttons2, index) => 
                  <li key={index}>
                      <FormOption id={ buttons2.id } title={buttons2.title} content={buttons2.content} cost={ buttons2.cost } label={ index } activeButton={ active2.active } click={ clickHandler2 }
                      ></FormOption>
                  </li>
                  )}
              </ul>
            
            </div>

            <ProductSpecifications />
         
          </div>

        </div>

      </div>

      <Footer price= { ampPrice.price }/>
      
    </div>
  )
}