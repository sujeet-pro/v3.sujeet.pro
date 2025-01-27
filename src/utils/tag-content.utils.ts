import { getCollection, type CollectionEntry } from 'astro:content'
import { getBlogs } from './blog-content.utils'
import { getReviews } from './review-content.utils'

export type TagDetails = {
  tag: CollectionEntry<'tag'>
  count: number
  blogs: CollectionEntry<'blog'>[]
  reviews: CollectionEntry<'review'>[]
}

export type TagWithCountOptions = {
  countBlog: boolean
  countReview: boolean
}

export async function getTagsWithCount(option: TagWithCountOptions) {
  const tags = await getCollection('tag')
  const allResults: TagDetails[] = []
  for (const tag of tags) {
    const result: TagDetails = {
      tag,
      count: 0,
      blogs: [],
      reviews: []
    }
    if (option.countBlog) {
      const blogs = await getBlogs({ onlyTag: tag.id })
      result.blogs = blogs
      result.count += blogs.length
    }
    if (option.countReview) {
      const reviews = await getReviews({ onlyTag: tag.id })
      result.reviews = reviews
      result.count += reviews.length
    }
    if (result.count > 0) {
      allResults.push(result)
    }
  }
  return allResults.sort((a, b) => {
    const diff = b.count - a.count
    if (diff !== 0) {
      return diff
    }
    return a.tag.data.name.localeCompare(b.tag.data.name)
  })
}
