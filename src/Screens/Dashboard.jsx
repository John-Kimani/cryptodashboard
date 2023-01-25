import React from 'react';
import './dashboard.css';
import NavbarComponent from '../Components/Nav/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import ConnectWallet from '../Components/ConnectWallet/ConnectWallet';
import Community from '../Components/Community/Community';
import Chart from '../Components/Chart/Chart';
import TokenTable from '../Components/TokenTable/TokenTable';


function Dashboard() {
  return (
    <main className="Dashboard">
        <NavbarComponent />
        <section className="components">
          <div className="row">
            <div className="col-md-1 col-lg-1">
              <Sidebar />
            </div>

            <div className="col-md-4 col-lg-4">
              <ConnectWallet />
              <div className="row mt-5 mb-5"></div>
              <Community />
            </div>

            <div className="col-md-6 col-lg-6">
              <Chart />
              <div className="row mt-3 mb-3"></div>
              <TokenTable />
            </div>
          </div>
        </section>
    </main>
  )
}

export default Dashboard