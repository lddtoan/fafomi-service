import {
  Anchor,
  Button,
  Card,
  CardSection,
  Center,
  Group,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { IconAt, IconLock } from "@tabler/icons";
import { PageWrapper } from "components/page-wrapper";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { routes } from "shared/routes";
import { LoginForm } from "shared/types/forms";
import * as yup from "yup";

const Login = () => {
  const { t } = useTranslation();

  const schema = useMemo(() => {
    return yup.object().shape({
      email: yup
        .string()
        .email(t("page.login.emailInvalid"))
        .required(t("page.login.required")),
      password: yup.string().required(t("page.login.required")),
    });
  }, [t]);

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = useCallback((values: LoginForm) => {
    console.log(values);
  }, []);

  return (
    <PageWrapper>
      <Center style={{ width: "100%", height: "100vh" }}>
        <Card
          component="form"
          shadow="sm"
          radius="md"
          style={{ width: "512px" }}
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <CardSection inheritPadding py="xs">
            <Text weight={500} size="lg">
              {t("page.login.login")}
            </Text>
          </CardSection>
          <CardSection withBorder inheritPadding p="md">
            <Stack>
              <TextInput
                {...form.getInputProps("email")}
                icon={<IconAt />}
                placeholder={t("page.login.email")}
              />
              <TextInput
                {...form.getInputProps("password")}
                icon={<IconLock />}
                placeholder={t("page.login.password")}
                type="password"
              />
            </Stack>
          </CardSection>
          <CardSection inheritPadding p="md">
            <Group position="apart">
              <Link href={routes.page.forgotPassword} passHref>
                <Anchor component="a">{t("page.login.forgotPassword")}</Anchor>
              </Link>
              <Button type="submit">{t("page.login.login")}</Button>
            </Group>
          </CardSection>
        </Card>
      </Center>
    </PageWrapper>
  );
};

export default Login;
