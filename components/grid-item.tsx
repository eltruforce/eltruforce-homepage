import { Global } from '@emotion/react'
import { Box, Image, Text } from '@mantine/core'
import Link from 'next/link'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" sx={theme => ({ textAlign: 'center' })}>
    <Box sx={{ cursor: 'pointer' }}>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <Box component="a" href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </Box>
      <Text size={14}>{children}</Text>
    </Box>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" sx={theme => ({ textAlign: 'center' })}>
    <Link
      href={`/works/${id}`}
      scroll={false}
      style={{
        color: 'inherit',
        textDecoration: 'inherit'
      }}
      passHref
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <div>
        <Text mt={8} size={20}>
          {title}
        </Text>
      </div>
      <Text size={14}>{children}</Text>
    </Link>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
