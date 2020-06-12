import React from "react";
import Nav from "./Nav";

function withLayout(Page) {
  return () => {
    return (
        <>
        <header>
          {/* Fixed navbar */}
          <Nav />
        </header>
        {/* Begin page content */}
        <main role='main' className='flex-shrink-0'>
          <Page />
        </main>
        <footer className='footer mt-auto py-3 bg-dark text-white'>
          <div className='container'>&copy; Diego Palma 2020</div>
        </footer>
      </>
    );
  };
}

export default withLayout;