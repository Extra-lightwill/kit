import React from 'react';

import {
  graphql,
  createFragmentContainer
} from 'react-relay';

import FeedEntry from './FeedEntry';

const Feed = createFragmentContainer(
  ({ data }) => (
    <ol>
      {data.map(entry => (
        <li key={`${entry.repository.owner.login}/${entry.repository.name}`}>
          <FeedEntry data={entry} />
        </li>
      ))}
    </ol>
  ),
  graphql`
    fragment Feed on Entry @relay(plural: true) {
      repository {
        owner { login }
        name
      }
      ...FeedEntry
    }
  `
)

export default Feed;