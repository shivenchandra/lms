import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id='123' 
        name='Neura the Brain Explorer'
        topic ="Neural Networks of Brain"
        subject = "Science"
        duration = {45}
        color = "#ffda6e"
        />
        <CompanionCard 
        id='456' 
        name='Countsy the Number Wizard'
        topic ="Derivatives and Integrals"
        subject = "Mathematics"
        duration = {30}
        color = "#e5d0ff"
        />
        <CompanionCard 
        id='789' 
        name='Verba the Vocalulary Builder'
        topic ="English Literature"
        subject = "Language"
        duration = {30}
        color = "#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionList
            title="Recent Completed Sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page