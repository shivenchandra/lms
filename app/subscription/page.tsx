import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Subscription = () => {
  return (
    <main className="p-10 flex justify-center">
      <PricingTable 
        appearance={{
          // 1. Force the colors via variables to ensure they apply
          variables: {
            colorPrimary: '#FE5933',
            colorTextOnPrimaryBackground: 'white',
          },
          // 2. If variables don't work, manually target the buttons
          elements: {
            pricingTableItemButton: 'bg-[#FE5933] text-white hover:bg-orange-600 border-none'
          }
        }}
      />
    </main>
  )
}

export default Subscription