import type {
  InferGetServerSidePropsType,
  NextPage,
  NextPageWithLayout,
} from 'next'
import { InferGetStaticPropsType } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'

declare module 'next' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement, pageProps: P) => ReactElement
  }
  /**
   * @see https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-with-typescript
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type NextSGPageWithLayout<P = {}, IP = P> = NextPageWithLayout<
    InferGetStaticPropsType<P>,
    IP
  >
  /**
   * @see https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript
   */
  type NextSSRPageWithLayout<
    // eslint-disable-next-line @typescript-eslint/ban-types
    P = {},
    IP = P
  > = NextPageWithLayout<InferGetServerSidePropsType<P>, IP>
}

declare module 'next/app' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type AppPropsWithLayout<P = {}> = AppProps<P> & {
    Component: NextPageWithLayout<P>
  }
}
