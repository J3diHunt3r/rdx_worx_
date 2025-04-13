import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Link } from '@saas-ui/react'
import { Text } from '@chakra-ui/react'

// Logo component
const RDXLogo = () => (
  <Text fontWeight="bold" fontSize="xxxlg">
    RDX.
  </Text>
)

const siteConfig = {
  logo: RDXLogo,
  seo: {
    title: 'RDX',
    description: 'Let us look after you.',
    titleTemplate: 'RDX | Your Trusted Partner'
  },
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Who We are',
      },
      {
        id: 'ff',
        label: 'Founding Fathers',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/',
      },
      {
        label: 'Sign Up',
        href: '/',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://instagram.com/">Cenchy</Link>
      </>
    ),
    links: [
      {
        href: 'admin@rdx.com',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://instagram.com/rdx_worx',
        label: <FaInstagram size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
