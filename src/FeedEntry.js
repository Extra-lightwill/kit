import React from 'react';

import {
  graphql,
  createFragmentContainer
} from 'react-relay';


const FeedEntry = createFragmentContainer(
  ({ data }) => (
    <div>
      {data.repository.owner.login}/{data.repository.name}: {data.repository.stargazers_count} Stars
    </div>
  ),
  graphql`
    fragment FeedEntry on Entry {
      repository {
        owner { login }
        name
        stargazers_count
      }
      postedBy { login }
    }
  `
)

export default FeedEntry;