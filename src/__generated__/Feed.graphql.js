/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Feed.graphql
 * @generated SignedSource<<b447e9d0217b14bedb20181b9f14cbcc>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Feed = {|
  +repository: {|
    +owner: ?{|
      +login: string;
    |};
    +name: string;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Feed",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Repository",
      "name": "repository",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "User",
          "name": "owner",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "login",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FeedEntry",
      "args": null
    }
  ],
  "type": "Entry"
};

module.exports = fragment;
