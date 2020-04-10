export type BlogPostType = {
  id: string
  frontmatter?: {
    title?: string | null
    published?: boolean | null
    description?: string | null
    slug?: string | null
    date?: Date
  } | null
}
