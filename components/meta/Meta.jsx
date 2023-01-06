import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Luka Dušak" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Commits Calendar",
  keywords: "commits, events, calendar",
  description: "Manage your commit events in this calendar",
};

export default Meta;
