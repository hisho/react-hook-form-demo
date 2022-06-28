```tsx
import { Button } from '@chakra-ui/react'

const NavigateExample = () => {
  return (
    <>
      <Navigate href={(path) => path.home.$url()}>
        <a>hoge</a>
      </Navigate>

      <Navigate href={pagesPath.home.$url()}>
        <a>hoge</a>
      </Navigate>

      <Navigate href={(path) => path.home.$url()}>
        <Button as={'a'}>hoge</Button>
      </Navigate>

      <Navigate href={(path) => path.home.$url()}>
        {({ isCurrent }) => <a>{isCurrent ? '現在のページ' : 'その他'}</a>}
      </Navigate>
    </>
  )
}
```
