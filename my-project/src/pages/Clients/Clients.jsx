import React, { Suspense } from 'react'
import Loader from '../../components/Loader/Loader'
// import Card from './components/Card'

const Card=React.lazy(()=>import('./components/Card'))

const Clients = () => {
  const data=[
    { "name": "AbbVie" },
    { "name": "Allergan" },
    { "name": "Belkyra Quiz Module" },
    { "name": "Berlin Chemie" },
    { "name": "Calcium" },
    { "name": "CSL Behring" },
    { "name": "ECIR" },
    { "name": "Fresenius Kabi" },
    { "name": "Internal" },
    { "name": "Luminology" },
    { "name": "Merck" },
    { "name": "NHSc" },
    { "name": "Novartis" },
    { "name": "OM Pharma" },
    { "name": "PTC" },
    { "name": "Real Chemistry" },
    { "name": "Recordati" },
    { "name": "Stemline" },
    { "name": "Takeda_US" },
    { "name": "Training" }
]

  return (
    <div className='w-full'>


      <Suspense fallback={<Loader line={10} />}>

        <Card data={data} />
      </Suspense>
    </div>
  )
}

export default Clients