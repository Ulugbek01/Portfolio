import { Carousel, Col, Row } from 'antd';
import React, { useRef } from 'react'
import { Container, HeroSection } from './style';
import myImg from '../../../assets/imgs/my-img.png';
import {ReactComponent as ArrowLeft} from '../../../assets/icons/left-arrow.svg';
import {ReactComponent as ArrowRight} from '../../../assets/icons/right-arrow.svg';

export const Hero = () => {
  const slider = useRef();
  return (
    <HeroSection>
      <Container>
        <HeroSection.IconWrapper position="left" onClick={()=> slider.current?.next()}>
          <ArrowLeft/>
        </HeroSection.IconWrapper>
        <HeroSection.IconWrapper position="right" onClick={()=> slider.current?.prev()}>
          <ArrowRight/>
        </HeroSection.IconWrapper>
        <Carousel autoplay ref={slider}>
          <div>
            <Row justify='space-around'>
              <Col md={24} lg={12}>
                <HeroSection.Title>Hi, I'm Ulug'bek!</HeroSection.Title>
                <HeroSection.Discr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </HeroSection.Discr>
              </Col>
              <Col md={24} lg={8}>
                <HeroSection.Img src={myImg} alt="my-img"/>
              </Col>
            </Row>
          </div>

          <div>
            <Row justify='space-around'>
              <Col md={24} lg={12}>
                <HeroSection.Title>Hi, I'm Ulug'bek!</HeroSection.Title>
                <HeroSection.Discr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </HeroSection.Discr>
              </Col>
              <Col md={24} lg={8}>
                <HeroSection.Img src={myImg} alt="my-img"/>
              </Col>
            </Row>
          </div>

          <div>
            <Row justify='space-around'>
              <Col md={24} lg={12}>
                <HeroSection.Title>Hi, I'm Ulug'bek!</HeroSection.Title>
                <HeroSection.Discr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </HeroSection.Discr>
              </Col>
              <Col md={24} lg={8}>
                <HeroSection.Img src={myImg} alt="my-img"/>
              </Col>
            </Row>
          </div>
        </Carousel>
      </Container>
    </HeroSection>
  )
}

export default Hero;