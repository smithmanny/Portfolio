import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media } from '../utils/utils'
import Github from '../images/github.svg'

const Posts = ({ posts, title }) => (
  <Container>
    <PostWrapper>
      <PostIcon>
        <Icon src={Github} />
      </PostIcon>
      <PostTitle to='/'>This is a test title</PostTitle>
      <PostDate>November 18, 2018</PostDate>
    </PostWrapper>

    <PostWrapper>
      <PostIcon>
        <Icon src={Github} />
      </PostIcon>
      <PostTitle>This is a test title</PostTitle>
      <PostDate>November 18, 2018</PostDate>
    </PostWrapper>

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
  color: black;
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
