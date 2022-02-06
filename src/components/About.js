import React from 'react'
import pic1 from '../images/pic01.jpeg'
import Container from './StyledComponents/ContainerStyled'
import HeaderTwo from './StyledComponents/H2Styled'
import Image from './StyledComponents/ImageStyled'
import{FlexDiv, FlexElement} from './StyledComponents/FlexStyles'

export default function About(){
    return(
        <div>
            <Container id='aboutIntro'>
                <FlexDiv className='flexContainer'>
                    <FlexElement>
                        <HeaderTwo style={{padding: '30% 30%'}}>OUR STORY</HeaderTwo>
                    </FlexElement>
                    <FlexElement>
                        <Image src={pic1} alt='fruit stand' />
                    </FlexElement>
                </FlexDiv>
                <h3 style={{color: '#073421'}}>
                    Faucibus a pellentesque sit amet porttitor eget. Blandit volutpat
                    maecenas volutpat blandit. Justo eget magna fermentum iaculis eu non
                    diam phasellus. Ipsum suspendisse ultrices gravida dictum fusce ut
                    placerat orci nulla. Sit amet justo donec enim diam vulputate ut
                    pharetra.
                </h3>
                <p>
                    Amet venenatis urna cursus eget. Duis ut diam quam nulla porttitor
                    massa id. Tellus integer feugiat scelerisque varius. Purus sit amet
                    volutpat consequat mauris nunc congue. Aliquet risus feugiat in ante
                    metus dictum. Et netus et malesuada fames ac turpis egestas integer
                    eget. Ultrices neque ornare aenean euismod elementum nisi quis.
                    Feugiat in fermentum posuere urna nec tincidunt praesent semper.
                    Egestas egestas fringilla phasellus faucibus scelerisque eleifend
                    donec. Faucibus et molestie ac feugiat sed lectus. Mattis enim ut
                    tellus elementum sagittis vitae et leo duis.
                </p>
            </Container>
        </div>
    )
}