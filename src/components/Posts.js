import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import moment from 'moment'

import { media } from '../utils/utils'
import Github from '../images/github.svg'

const Posts = ({ posts }) => (
  <Container>
    {posts.map(post => {
      const { date, title, slug } = post.node.frontmatter
      const formattedDate = moment(date).format('MMM DD, YYYY')

      return (
        <PostWrapper key={title}>
          <PostIcon>
            <Icon src={Github} />
          </PostIcon>
          <PostTitle
            to={`/blog/${ slug }`}
            state={{
              prev: post.prev,
              next: post.next,
            }}
          >
            {title}
          </PostTitle>
          <PostDate>{formattedDate}</PostDate>
        </PostWrapper>
      )
    })}
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Icon = styled.img`
  height: 100%;
  width: 100%;
  margin: 0;
`

const PostDate = styled.h5`
  color: gray;
  flex: 35%;
  text-align: right;
  margin: 0;

  ${ media.mobile`display: none;` }
`

const PostIcon = styled.div`
  flex: 15%;
  max-width: 35px;
  max-height: 35px;
  margin-right: 15px;
`

const PostTitle = styled(Link)`
  color: ${ props => props.theme.contentColor };
  flex: 50%;
  margin: 0;
  text-shadow: none;
  background-image: none;

  ${ media.mobile`flex: 85%;` }
`

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export default Posts
