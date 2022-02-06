import React from 'react'
import banner from '../images/banner.jpg'
import Banner from './StyledComponents/BannerStyled'
import HeaderTwo from './StyledComponents/H2Styled'
import StyledLink from './StyledComponents/LinkStyled'
import Section from './StyledComponents/SectionStyled'
import {FlexDiv, FlexElement} from './StyledComponents/FlexStyles'
import Image from './StyledComponents/ImageStyled'
import pic4 from '../images/pic04.jpeg'

export default function Home(){
    return(
        <div className='homePage'>
            <Banner src={banner} alt='banner of fruit' />
            <Section className='smallIntro'>
                <HeaderTwo>African Marketplace</HeaderTwo>
                <p>
                    Sauti Africa empowers small business owners, particularly women, to
                    improve their business and economic opportunities to grow out of
                    poverty.
                </p>
                <StyledLink to='/About'>Learn More</StyledLink>
            </Section>
            <Section id='one'>
                <FlexDiv>
                    <FlexElement>
                        <HeaderTwo style={{padding: '22%'}}>
                            Why we build technologies for women in trade
                        </HeaderTwo>
                    </FlexElement>
                    <FlexElement>
                        <Image src={pic4} alt='fruit stand' />
                    </FlexElement>
                </FlexDiv>
                <p>
                    Using technology to empower women-led businesses has ripple effects
                    that can help create lasting change for households, communities, and
                    market systems. That’s why we put women as traders, producers, and
                    customers at the centre of our products, services and delivery models.
                </p>
                <ul>
                    <li>Trade & Market Information</li>
                    <li>Research & Engagement</li>
                    <li>Leveraging Technology</li>
                </ul>
            </Section>
        </div>
    )
}