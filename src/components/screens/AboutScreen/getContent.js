import { CMSGraphQLClient, gql } from 'src/infra/cms/CMSGraphQLClient';

// eslint-disable-next-line import/prefer-default-export
export async function getContent() {
  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;
  const client = CMSGraphQLClient();

  const response = await client.query({ query });

  return response.data.messages;
}
