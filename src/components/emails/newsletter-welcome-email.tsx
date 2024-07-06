import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface NewsletterWelcomeEmailProps {
  firstName?: string
  fromEmail: string
  token: string
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? ""

// For previewing we need to put images in the .react-email/public folder
// In production we need to put images in the root public folder
const newsletterImages = [
  {
    src: `${baseUrl}/images/newsletter/skater-one.webp`,
    alt: "Skateboarder flying high",
    credit: "ALLAN FRANCA CARMO",
    creditUrl:
      "https://www.pexels.com/photo/time-lapse-photography-of-man-doing-skateboard-trick-3133685/",
    description: `Skateboarding is a sport that has been around for decades. It's not just about the tricks, but also about the culture and community that surrounds it. So we decided to create a newsletter to share our passion with others who love skateboarding as much as we do!`,
  },
  {
    src: `${baseUrl}/images/newsletter/skater-two.webp`,
    alt: "Skateboarder landing on half pipe",
    credit: "cottonbro studio",
    creditUrl:
      "https://www.pexels.com/photo/skateboarder-jumping-a-skateboard-5037502/",
    description: `${`We'll`} be keeping you up to date with the latest skateboarding news, events, and more. Stay up to date with the latest trends and tricks. Stay tuned for more!`,
  },
]

export default function NewsletterWelcomeEmail({
  firstName = "there",
  fromEmail,
  token,
}: NewsletterWelcomeEmailProps) {
  const previewText = `Привет ${firstName}, добро пожаловать в Ortodok!`

  return (
    <Html>
      <Head>
        <title>Ortodok</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto bg-zinc-50 font-sans">
          <Container className="mx-auto my-[40px] max-w-2xl rounded p-4">
            <Section className="mt-4">
              <Heading className="text-center text-2xl font-semibold text-zinc-950">
                Ortodok
              </Heading>
              <Hr className="my-4" />
              <Heading className="text-center text-3xl font-semibold text-zinc-800">
                Добро пожаловать в Ortodok!
              </Heading>
              <Text className="mb-0 mt-6 text-center text-base">
                {`Мы`} так рады, что {`вы`} здесь. {`Мы`} рады поделиться с вами
                нашей страстью к здоровью
              </Text>
              <Text className="m-0 text-center text-base">
                {`Мы будем`} отправлять вам новостную рассылку каждый месяц.
              </Text>
            </Section>
            <Section className="mt-6">
              {newsletterImages.map((item) => (
                <Row key={item.alt} className="mt-10">
                  <Img
                    src={item.src}
                    alt={item.alt}
                    height={424}
                    className="aspect-video w-full object-cover"
                  />
                  <Text className="mb-0 mt-2 text-center text-zinc-400">
                  Фото автора{" "}
                    <Link
                      href={item.creditUrl}
                      className="text-blue-500 underline"
                    >
                      {item.credit}
                    </Link>
                  </Text>
                  <Text className="mb-0 mt-4 text-center text-base">
                    {item.description}
                  </Text>
                </Row>
              ))}
            </Section>
            <Section className="mt-4 text-center text-zinc-400">
              <Text className="my-4">
              {"Мы"} с нетерпением ждем встречи с вами! Если у вас возникнут какие-либо вопросы, 
              пожалуйста, {"не стесняйтесь"} обращайтесь к нам по адресу{" "}
                <Link
                  href={`mailto:${fromEmail}`}
                  className="text-blue-500 underline"
                >
                  {fromEmail}
                </Link>
              </Text>
              <Text className="mb-0 mt-4">
                @ Ortodok {new Date().getFullYear()}
              </Text>
              <Text className="m-0">
              Если вы больше не хотите получать эти электронные письма, вы можете{" "}
              <Link
                  href={`${baseUrl}/email-preferences?token=${token}`}
                  className="text-blue-500 underline"
                >
                  отписаться от рассылки
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
