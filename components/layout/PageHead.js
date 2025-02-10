import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "ЗӨВ ШАН ХХК"}</title>
      </Head>
    </>
  );
};

export default PageHead;
