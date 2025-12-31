import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companions.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async() => {
    const companion = await getAllCompanions({ limit:3 })
    const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        {companion.map((companion) => (
          <CompanionCard 
            key={companion.id}
            {...companion}
            color = {getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className='home-section'>
        <CompanionList
            title="Recent Completed Sessions"
            companions={recentSessionsCompanions}
            classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page