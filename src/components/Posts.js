import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media } from '../utils/utils'
import Github from '../images/github.svg'

const Posts = ({ posts }) => (
  <Container>
    {posts.map(({ node: { frontmatter: { date, title, slug } } }) => (
      <PostWrapper key={title}>
        <PostIcon>
          <Icon src={Github} />
        </PostIcon>
        <PostTitle to={`/${ slug }`}>{title}</PostTitle>
        <PostDate>{date}</PostDate>
      </PostWrapper>
    ))}
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