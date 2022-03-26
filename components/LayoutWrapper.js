import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './CustomFooter.js'
import Header from './Header'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </SectionContainer>
  )
}

export default LayoutWrapper
