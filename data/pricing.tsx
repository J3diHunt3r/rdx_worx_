import { HStack, Text, Button, Box, VStack, Heading } from '@chakra-ui/react'

export default {
  title: 'Exclusive Pricing Plans',
  description:
    'Gain exclusive access to RDX’s world-class services. Designed for collectors and enthusiasts who demand the best.',
  plans: [
    {
      id: 'vault',
      title: 'Vault Access',
      description: 'Secure, climate-controlled storage with 24/7 monitoring.',
      price: 'Contact us for pricing',
      isRecommended: false,
      features: [
        {
          title: 'Bespoke Vaulting',
        },
        {
          title: 'Climate-Controlled & Secure',
        },
        {
          title: '24/7 Monitoring',
        },
        {
          title: 'Tailored Storage Conditions',
        },
        {
          title: 'Exclusive Client Portal Access',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'detail-ppf-wrap',
      title: 'Premium Detailing & Protection',
      description: 'Transform your vehicle with premium detailing, PPF, and wraps.',
      price: (
        <HStack>
          <Text>From </Text>
          <Text fontWeight="bold">€2,499,-</Text>
        </HStack>
      ),
      isRecommended: true,
      features: [
        {
          title: 'Full Detailing & Restoration',
        },
        {
          title: 'Paint Protection Film (PPF)',
        },
        {
          title: 'Custom Vehicle Wraps',
        },
        {
          title: 'Concours-Level Finish',
        },
        {
          title: 'Expert Team of Technicians',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'premium-access',
      title: 'Ultimate RDX Access',
      description: 'For the true connoisseur of fine vehicles—experience the best.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €10,000,-
          </Text>
          <Text fontWeight="bold">€7,500,-</Text>
        </HStack>
      ),
      isRecommended: false,
      features: [
        {
          title: 'Unlimited Vault Access',
        },
        {
          title: 'Unlimited Detailing & PPF',
        },
        {
          title: 'Private Appointments and Viewings',
        },
        {
          title: 'Exclusive Limited Edition Services',
        },
        {
          title: 'Priority Scheduling for All Services',
        },
      ],
      action: {
        href: '#',
      },
    },
  ],
}
