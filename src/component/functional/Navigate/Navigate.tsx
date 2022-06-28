import { PagesPath, pagesPath } from '@src/lib/pathpida/$path'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import type { UrlObject } from 'url'
import { runIfFn } from '@chakra-ui/utils'
import { MaybeRenderProp } from '@chakra-ui/react-utils'

type NavigateProps = Omit<LinkProps, 'href' | 'passHref' | 'locale'> & {
  children: MaybeRenderProp<{ isCurrent: boolean }>
  href: ((path: PagesPath) => UrlObject) | UrlObject
}

/**
 * ページ遷移するためのリンクを表示するコンポーネント
 * @see https://nextjs.org/docs/api-reference/next/link
 * @see https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx
 */
export const Navigate = memo(({ children, href, ...props }: NavigateProps) => {
  const { pathname } = useRouter()
  const currentPathname =
    typeof href === 'function' ? href(pagesPath).pathname : href.pathname
  const isCurrent = pathname === currentPathname
  const state = { isCurrent }
  return (
    <Link
      passHref
      href={typeof href === 'function' ? href(pagesPath) : href}
      {...props}
    >
      {runIfFn(children, state)}
    </Link>
  )
})
