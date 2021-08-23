# Quick and dirty implementation of Google APIs

- only a proof of concept (POC) retrieving access token and send it to youtube api's liveStreams

## Problem

- GET /oauthcallback?code={authorizationCode}
- Google APIs not including ?code={authorizationCode} in the url response. 😥
