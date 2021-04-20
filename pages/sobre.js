import AboutScreen, { getContent } from 'src/components/screens/AboutScreen';
import websitePageHOC from 'src/components/wrappers/WebSitePage/hoc';

export async function getStaticProps({ preview }) {
  const messages = await getContent({ preview });

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
