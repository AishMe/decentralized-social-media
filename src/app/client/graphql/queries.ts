import { createClient } from "urql";

export const APIURL = "https://api.lens.dev"
export const LENS_HUB_CONTRACT_ADDRESS = "0xE5ecd226b3032910CEaa43ba92EE8232f8237553"

export const urlClient = createClient({
    url: APIURL,
    exchanges: [],
})


export const fetchAccountRecommendations = `
query {
  mlAccountRecommendations(
    request: {
      account: "0x1234…"

      # optional, shuffle the results
      # shuffle: Boolean
    }
  ) {
    items {
      address
      username {
        value
      }
      metadata {
        name
        picture
      }
    }
    pageInfo {
      prev
      next
    }
  }
}`

export const fetchPostsForYou = `
    query {
    mlPostsForYou(
        request: {
        # accounts addresses
        account: "0x1234…"

        # optional, shuffle the results
        # shuffle: Boolean
        }
    ) {
        items {
        ...PostForYou
        }
        pageInfo {
        prev
        next
        }
    }
    }
`

export const fetchPostsToExplore = `
    query {
    mlPostsExplore(
        request: {
        # optional filter
        # filter: {
        #   since: number
        # }
        }
    ) {
        items {
        ...Post
        }
        pageInfo {
        prev
        next
        }
    }
    }
`