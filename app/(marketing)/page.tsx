'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  SimpleGrid,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiStar,
  FiShield,
  FiTool,
  FiUsers,
  FiCheckCircle,
  FiCamera,
  FiMap,
  FiLayers,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'
import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Vaulted. Wrapped.
                <Br /> Untouchable.
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Home of <Em>Exotic & Rare Vehicles</Em>
                <Br /> and some other daardie things you may get to see <Br /> Want private access?
              </FallInPlace>
            }
          >
            {/* 🚀 Mobile Image (shows only on base screen sizes) */}
            <Box
              display={{ base: 'block', lg: 'none' }}
              w="100%"
              mb={8}
            >
              <Box overflow="hidden" borderRadius="xl">
                <Image
                  src="/static/screenshots/bugatti_tourbillon.avif"
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  width={1200}
                  height={762}
                  style={{ width: '100%', height: 'auto' }}
                  quality="75"
                  priority
                />
              </Box>
            </Box>

            {/* 🎯 Socials + CTA */}
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <Link href="https://instagram.com/rdx_worx" isExternal>
                    <FaInstagram size="20" />
                  </Link>
                <FaFacebook size="20" />
                <FaTwitter size="20" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View Our Vault
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>

          {/* 💻 Desktop Image (absolute + floats right) */}
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" borderRadius="xl" height="100%">
                <Image
                  src="/static/screenshots/bugatti_tourbillon.avif"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>

        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Secure Vault Storage',
            icon: FiLock,
            description: 'State-of-the-art, climate-controlled storage designed to keep your rare vehicle safe, pristine, and protected.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Premium Detailing',
            icon: FiStar,
            description: 'From paint correction to deep interior cleaning, we deliver flawless, showroom-ready results every time.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Paint Protection Film (PPF)',
            icon: FiShield,
            description: 'Preserve your finish with high-performance PPF that shields against chips, scratches, and road debris.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Custom Vehicle Wrapping',
            icon: FiLayers,
            description: 'Elevate your car’s look with bespoke wraps in any finish—stealth, chrome, matte, or fully custom.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />

    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Vaulted with Precision">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            <Em>Secure, climate-controlled, and discreet</Em> — our vault is purpose-built to preserve rare and exotic vehicles in pristine condition.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            px="6"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="white" fontWeight="bold">
                Your car’s second home.
              </Text>
            </Box>
          </Flex>
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="Every Detail, Mastered">
        <Text color="muted" fontSize="lg">
          From paint correction to deep interior cleaning — our detailing services are tailored for concours-level care. We treat every inch with precision and pride.
        </Text>
      </HighlightsItem>



      <HighlightsTestimonialItem
        name="Private Collector"
        description="Vault Client"
        avatar="/static/images/avatar.jpg"
        gradient={['blue.300', 'blue.600']}
      >
        “RDX doesn’t just store cars. They preserve passion. I've never trusted a team more with my collection.”
      </HighlightsTestimonialItem>

      <HighlightsItem
        colSpan={[1, null, 2]}
        title="What We Offer"
      >
        <Text color="muted" fontSize="lg" mb="4">
          Services crafted for collectors, enthusiasts, and perfectionists.
        </Text>
        <Wrap>
          {[
            'Vehicle Vaulting',
            'Climate-Controlled Storage',
            'Premium Detailing',
            'Paint Correction',
            'Ceramic Coating',
            'Paint Protection Film (PPF)',
            'Color Change Wraps',
            'Stealth Finishes',
            'Chrome Delete',
            'Custom Graphics',
            'Disassembly & Reassembly',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>

  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not just storage.
          <Br /> A sanctuary for machines.
        </Heading>
      }
      description={
        <>
          RDX is where precision, protection, and passion collide. We offer
          tailored services for rare and exotic vehicles – designed for
          collectors, enthusiasts, and visionaries.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Vault Storage',
          icon: FiLock,
          description:
            '24/7 secured, climate-controlled storage to keep your vehicle protected from time and the elements.',
          variant: 'inline',
        },
        {
          title: 'Concours-Level Detailing',
          icon: FiStar,
          description:
            'Every inch matters. From paint correction to interior restoration — we bring show-quality shine.',
          variant: 'inline',
        },
        {
          title: 'Paint Protection Film',
          icon: FiShield,
          description:
            'Self-healing, high-grade PPF to shield your paint from chips, debris, and the unexpected.',
          variant: 'inline',
        },
        {
          title: 'Custom Wraps',
          icon: FiTool,
          description:
            'Bespoke color wraps, stealth finishes, chrome delete, and more — designed to turn heads.',
          variant: 'inline',
        },
        {
          title: 'Client Experience',
          icon: FiUsers,
          description:
            'From private access to concierge support, our service is as refined as the vehicles we protect.',
          variant: 'inline',
        },
        {
          title: 'Trust & Discretion',
          icon: FiCheckCircle,
          description:
            'We understand the value of trust. Our clients include collectors, athletes, and public figures.',
          variant: 'inline',
        },
        {
          title: 'Vehicle Photography',
          icon: FiCamera,
          description:
            'Capture your vehicle in its best light with professional-grade shoots available on-site.',
          variant: 'inline',
        },
        {
          title: 'Pickup & Delivery',
          icon: FiMap,
          description:
            'Enclosed transport options to deliver your car safely and securely — wherever it needs to be.',
          variant: 'inline',
        },
        {
          title: 'Value Growth Consulting',
          icon: FiTrendingUp,
          description:
            'Looking to invest in or sell a vehicle? We’ll guide you with market insight and care.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on local tax laws.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
