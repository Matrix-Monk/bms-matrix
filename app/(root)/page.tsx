import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = { firstName: "Gopal", lastName: "Kumar", email: "gopal@gmail.com"};

  return (
      <section className='home'> 
          <div className='home-content'>
              <header className='home-header'>
                  <HeaderBox
                      type="greeting"
                      title="Welcome"
                      user={loggedIn ?.firstName || 'Guest'}
                      subtext= "Accces and manage your account and transactions efficently"
                  />

                  <TotalBalanceBox
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={1250.35}
                  />
              </header>
              RECENT TRANSACTIONS
          </div>

          <RightSidebar user ={loggedIn} transactions = {[]} banks={[{currentBalance: 123.12}, {currentBalance:321.21}]} />

    </section>
  )
}

export default Home
