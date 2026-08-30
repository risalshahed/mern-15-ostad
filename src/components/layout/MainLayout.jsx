import Footer from "./Footer.jsx"
import Header from "./Header.jsx"

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen mb-0">
      <Header />
      {/* Main Content */}
      <main>
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;