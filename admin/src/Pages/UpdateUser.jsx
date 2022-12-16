import React from 'react'
import BodyTitle from '../Components/BodyTitle/BodyTitle'

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar'
import UpdateUser from '../Components/UpdateUser/UpdateUser'


function UserUpdatePage() {
  return (
    <div>

      <Header />
      <Sidebar />
      <main id="main" className="main">
        <BodyTitle data={"Update User"} />
        <section className="section dashboard">
          <UpdateUser />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default UserUpdatePage