export const pagesPath = {
  "form_context": {
    "page1": {
      $url: (url?: { hash?: string }) => ({ pathname: '/form-context/page1' as const, hash: url?.hash })
    },
    "page2": {
      $url: (url?: { hash?: string }) => ({ pathname: '/form-context/page2' as const, hash: url?.hash })
    },
    "page3": {
      $url: (url?: { hash?: string }) => ({ pathname: '/form-context/page3' as const, hash: url?.hash })
    }
  },
  "home": {
    $url: (url?: { hash?: string }) => ({ pathname: '/home' as const, hash: url?.hash })
  },
  "use_field_array": {
    $url: (url?: { hash?: string }) => ({ pathname: '/use-field-array' as const, hash: url?.hash })
  }
}

export type PagesPath = typeof pagesPath
