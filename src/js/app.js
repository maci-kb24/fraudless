
// import { createClient } from 'contentful/contentful.node'
import contentful from 'contentful'
const contentfulClient = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'kpk57xpn8htk',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '6czHtPGbjD9XQVYEHp3zGju6de9EysxBcJviqwUVcmI',
})
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
client
  .getEntry('w6JXJw47cP03mWWp')
  .then((entry) => console.log(entry))
  .catch((err) => console.log(err))