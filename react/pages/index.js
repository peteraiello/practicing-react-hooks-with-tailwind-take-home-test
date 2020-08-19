import Head from 'next/head'
import React, { useState } from 'react';
import Footer from '../components/Footer'
import ProductHeader from '../components/ProductHeader'
import ProductGallery from '../components/ProductGallery'
import ProductDescription from '../components/ProductDescription'
import FormOption from '../components/FormOption'
import ProductSpecifications from '../components/ProductSpecifications'

export default function Home() {

  let price = 1799;
  
  const [ampPrice, setPrice] = useState({
      price: numberWithCommas(price),
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

  const [costState3, setCost3] = useState({
    cost: 0
  });

  let totalGroup3 = costState3.cost;

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function updatePrice() {
    setPrice({ price: numberWithCommas(price + totalGroup1 + totalGroup2 + totalGroup3) }) 
  }

  const clickHandler1 = (id, cost) => {
    setActive1({ active: id })
    setCost1({ cost: cost })
    totalGroup1 = cost;
    updatePrice();
    event.preventDefault();
  }

  const clickHandler2 = (id, cost) => {
    setActive2({ active: id })
    setCost2({ cost: cost })
    totalGroup2 = cost;
    updatePrice();
    event.preventDefault();
  }

  const clickHandler3 = (id, cost) => {
    setActive3({ active: id })
    setCost3({ cost: cost })
    totalGroup3 = cost;
    updatePrice();
    event.preventDefault();
  }

  const buttonGroup1 = [
    { id: 0, title: 'Profiler Head', content: 'Compact amplifier head, perfect for a speaker cabinet or desk.', cost: 0 },
    { id: 1, title: 'Profiler Rack', content: '3U rackmount version of the classic profiling amplifier', cost: 0 },
  ];

  const buttonGroup2 = [
    { id: 0, title: 'None', content: 'Use in the studio or with your own power amp.', cost: 0 },
    { id: 1, title: 'Powered', content: 'Built-in 600W solid state power amp.', cost: 449 },
  ];

  const buttonGroup3 = [
    { id: 0, title: 'None', content: ' ', cost: 0 },
    { id: 1, title: 'Profiler Remote Foot Controller', content: ' ', cost: 449 },
  ];

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div className="container px-4 mb-32 lg:mb-40 mx-auto">

        <div className="grid grid-cols-2 gap-6">

          <div className="col-span-2">

            <ProductHeader />

          </div>

          <div className="col-span-2 lg:col-span-1">

            <ProductGallery />

          </div>

          <div className="col-span-2 lg:col-span-1">

            <ProductDescription price={ ampPrice.price } />
            
            <div className="container mb-10">
              <section className="form-group">
                <h3 className="text-2xl">Form Factor</h3>
                  <ul className="lg:flex flex-col lg:flex-row gap-4">
                      { buttonGroup1.map((buttons1, index) => 
                      <li key={index} className="my-4">
                          <FormOption id={ buttons1.id } title={buttons1.title} content={buttons1.content} cost={ buttons1.cost } label={ index} activeButton={ active1.active } click={ clickHandler1 }
                          ></FormOption>
                      </li>
                      )}
                  </ul>
              </section>
              <section className="form-group">
                <h3 className="text-2xl">Power Amp</h3>
                  <ul className="gap-4">
                      { buttonGroup2.map((buttons2, index) => 
                      <li key={index} className="my-4">
                          <FormOption id={ buttons2.id } title={buttons2.title} content={buttons2.content} cost={ buttons2.cost } label={ index } activeButton={ active2.active } click={ clickHandler2 }
                          ></FormOption>
                      </li>
                      )}
                  </ul>
              </section>
              <section className="form-group">
                <h3 className="text-2xl">Form Controller</h3>
                  <ul>
                      { buttonGroup3.map((buttons3, index) => 
                      <li key={index} className="my-4">
                          <FormOption id={ buttons3.id } title={buttons3.title} content={buttons3.content} cost={ buttons3.cost } label={ index } activeButton={ active3.active } click={ clickHandler3 }
                          ></FormOption>
                      </li>
                      )}
                  </ul>
              </section>
            </div>

            <ProductSpecifications />
         
          </div>

        </div>

      </div>

      <Footer price= { ampPrice.price }/>
      
    </div>
  )
}
