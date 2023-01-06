import Layout from "../../components/layout/Layout";
import Meta from "../../components/meta/Meta";
import Details from "../../components/details/Details";
import { Octokit } from "octokit";
import { useSelector } from "react-redux";

const DetailsPage = ({ commit }) => {
  const { commits } = useSelector((store) => store.commits);

  if (!commit.message) {
    commit = commits.find((elem) => elem.id === commit.id);
  }

  return (
    <>
      <Meta title={`commit by ${commit.username}`} />
      <Layout>
        <Details commit={commit} />
      </Layout>
    </>
  );
};

export default DetailsPage;

export const getServerSideProps = async (context) => {
  const { commitId } = context.params;

  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_AUTH_TOKEN,
  });

  let commit = {
    id: commitId,
  };

  try {
    const {
      data: { sha, author, commit: responseCommit },
    } = await octokit.request("GET /repos/{owner}/{repo}/commits/{ref}", {
      owner: "facebook",
      repo: "react",
      ref: commitId,
    });

    commit = {
      id: sha,
      username: author.login,
      image_url: author.avatar_url,
      profile_url: author.html_url,
      name: responseCommit.author.name,
      email: responseCommit.author.email,
      date: responseCommit.author.date,
      message: responseCommit.message,
    };
  } catch (error) {
    console.log(`Commit with ID ${commitId} is not found -> it is local data.`);
  }

  return {
    props: {
      commit,
    },
  };
};
