import { useState, useEffect } from "react";
import Router from "next/router";
import Meta from "../components/meta/Meta";
import Layout from "../components/layout/Layout";
import Main from "../components/main/Main";
import { Octokit } from "octokit";
import { SyncLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function HomePage({ commits }) {
  const [loading, setLoading] = useState(false);
  const { commits: storeCommits } = useSelector((store) => store.commits);

  if (storeCommits.length > 0) {
    commits = [...storeCommits];
  }

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Meta />
      <Layout>
        {loading ? (
          <SyncLoader color="#0062fe" size="15px" margin="8px" />
        ) : (
          <Main commits={commits} />
        )}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_AUTH_TOKEN,
  });

  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/commits?per_page=100",
    {
      owner: "facebook",
      repo: "react",
    }
  );

  const commits = response.data.map(({ sha, author, commit }) => {
    return {
      id: sha,
      username: author.login,
      image_url: author.avatar_url,
      profile_url: author.html_url,
      name: commit.author.name,
      email: commit.author.email,
      date: commit.author.date,
      message: commit.message,
    };
  });

  return {
    props: {
      commits,
    },
  };
};
