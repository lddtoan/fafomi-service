import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export interface PageWrapperProps {
  children?: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("common.title")}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </>
  );
};

export { PageWrapper };
