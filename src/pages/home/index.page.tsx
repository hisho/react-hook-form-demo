import type { NextPageWithLayout } from 'next'

const Home: NextPageWithLayout = () => {
  return <>index page</>
}

Home.getLayout = (page) => {
  return <>{page}</>
}

export default Home
