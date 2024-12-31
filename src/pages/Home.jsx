import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import IntroLogo from "../images/intrologo.png";
// import products from "../ProductData/Data.json";
import ProductCard from "../components/ProductCard";
import fruitsImg from "../images/fruits.png";
import cerealsMilletImg from "../images/cereals_millet.png";
import seedsImg from "../images/seeds.png";
import beveragesImg from "../images/beverages.png";

import PeopleImage from "../images/people.png";
import Background from "../images/Experience.png";
import Team from "../images/team.png";
import TeamSection from "../images/TeamSection.png";
import FooterImage from "../images/Footer.png";

const products = [
  {
    id: "1",
    title: "Fruits",
    image: fruitsImg,
  },
  {
    id: "2",
    title: "Cereals and Millet",
    image: cerealsMilletImg,
  },
  {
    id: "3",
    title: "Seeds",
    image: seedsImg,
  },
  {
    id: "4",
    title: "Beverages",
    image: beveragesImg,
  },
];

const MainContainer = styled.div`
    background-color: #ADE8F4;
    min-height: 100vh; /* Adjust the height dynamically based on content */
    padding-top: 80px; /* Adjust padding to accommodate Navbar height */
`;

const NavbarWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Ensure Navbar stays above other content */
`;

const SubMain = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
    
const Intro = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;    
    width: 80%;
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
`;

const LogoDiv  = styled.div`
    width: 80%;
    height: 100%;
`;

const Logo = styled.img`

`;

const Heading = styled.h1`
    color: #023E8A;
    font-weight: 1000;
    font-size: 58.32999px;
    font-family: 'Source Serif 4', sans-serif;
    margin-bottom: 0px;
    padding-bottom: 0px;
`;

const SubHeading = styled.h2`
    color: #023E8A;
    
    font-size: 30px;
    font-family: 'Source Serif 4', sans-serif;
    
    margin-top: 0px;
    padding-top: 0px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    justify-content: left;
`;

const Head = styled.h3`
    color: #0077B6;
    font-family: 'Source Serif 4', sans-serif;
    font-size: 35px;
    margin-bottom: 0px;
`;

const SubContent = styled.p`
    color: #0096C7;
    font-family: 'Source Serif 4', sans-serif;
    font-size: 30px;
`;

const Button = styled.button`
    background-color: #03045E;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 15px 40px;
    text-align: center;
    font-family: 'Source Serif 4', sans-serif;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    
    &:hover {
        background-color: #023E8A;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

`;

const Products = styled.div`
    width: 100%;
    height: 100%;
    background-color: #03045E;
    padding-bottom: 60px;
`;

const ProdHead = styled.h2`
    color: #fff;
    font-weight: 1000;
    font-size: 58.32999px;
    font-family: 'Saira Condensed', sans-serif;
    text-align: center;
    margin-bottom: 0px;
    padding-bottom: 0px;
`;

const Catalogue = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const About = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 50px 50px 0 50px;
    padding: 50px 20px 0 20px;
`;

const Left = styled.div`
    
`;

const Right = styled.div``;

const ImageP = styled.img`
    height: 80%;
    width: auto;

`;

const First = styled.div`
    font-weight: bold;
    font-size: 70px;
    font-family: 'Saira Condensed', sans-serif;
    color: #023E8A;
`;

const Second = styled.div`
    font-weight: bold;
    margin-top: 0px;
    padding-top: 0px;
    padding-left: 80px;
    font-size: 55px;
    font-family: 'Saira Condensed', sans-serif;
    color: #0077B6;
`;

const SubContentP = styled.p`
    color: #000;
    font-family: 'Saira Condensed', sans-serif;
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 10px;
`;

const ContentP = styled.p`
    color: #000;
    font-family: 'Source Serif 4', sans-serif;
    font-size: 20px;
    width: 90%;
    font-weight: 100 !important;
`;

const Numbers = styled.div`
    margin: 0;
    padding: 0;
    background-color: #023E8A;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    width: 100%;
    height: auto; 
`;


const Number = styled.img`
    width: 100%;
    height: auto;
`;

const Work = styled.div`
  height: auto;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`;

const WorkRight = styled.div`
    flex: 1;
  display: flex;
  justify-content: center;

`;

const WorkLeft = styled.div`
    flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 100%;

`;

const WorkHeading = styled.div`
font-weight: bold;
  font-size: 50px;
  font-family: 'Saira Condensed', sans-serif;
  color: #0077B6;
  margin-bottom: 20px;
`;

const WorkContent = styled.div`
    font-size: 20px;
  font-family: 'Source Serif 4', sans-serif;
  color: #000;
  line-height: 1.6;
`;

const WorkImage = styled.img`
    max-width: 90%;
  height: auto;
  border-radius: 10px;
`;

const Teams = styled.div`
    margin: 0;
    padding: 0;
    background-color: #023E8A;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    width: 100%;
    height: auto; 
`;


const TeamsImg = styled.img`
    width: 100%;
    height: auto;
`;


const Footer = styled.div`
    margin: 0;
    padding: 0;
    background-color: #023E8A;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    width: 100%;
    height: auto; 
`;


const FooterImg = styled.img`
    width: 100%;
    height: auto;
`;

const Home = () => {
  return (
    <MainContainer>
          <NavbarWrapper>
            <Navbar />
        </NavbarWrapper>
        <br /><br /><br />
        <SubMain>
            <Intro>
                <Info>
                    <Heading>Saidnya Foods and Beverages</Heading>
                    <SubHeading>Pvt. Ltd.</SubHeading>
                    <br /><br />
                    <Content>
                        <Head>
                        Trading Food, Trading Trust
                        </Head>
                        <SubContent>
                        Enhance your lifestyle with our 
                        premium-quality products, 
                        trusted by customers worldwide 
                        for freshness and excellence
                        </SubContent>
                    </Content>
                    <br /><br />
                    <Button>Know More</Button>
                </Info>
                <LogoDiv>
                <Logo src={IntroLogo} alt="Logo"></Logo>
                </LogoDiv>
            </Intro>
            <Products>
                <ProdHead>Products</ProdHead>
                <br /><br />
                <Catalogue>
                    {products.map((product)=> (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                description={product.description}
                            />
                        ))}
                </Catalogue>
            </Products>
            <About>
                <Left>
                    <ImageP src={PeopleImage} alt="About"></ImageP>
                </Left>
                <Right>
                    <First>About</First>
                    <Second>Saidnya F & B</Second>
                    <SubContentP>Trading Food Trading Trust.</SubContentP>
                    <ContentP>At Saidnya Foods & Beverages, we ensure quality and freshness 
                        by partnering with trusted farmers and suppliers. 
                        From farm to table, we prioritize transparency, reliability, 
                        and efficiency at every step.</ContentP>
                </Right>
            </About>
            <Numbers>
                <Number src={Background} alt="Numbers"></Number>
            </Numbers>
            <Work>
                <WorkLeft>
                <WorkHeading>Introducing Our Work</WorkHeading>
                <WorkContent>Discover the essence of quality 
                    with Saidnya Foods & Beverages—where trusted farmers 
                    and suppliers bring you the freshest, finest 
                    products straight to your table.</WorkContent>
                    </WorkLeft>
                <WorkRight>
                    <WorkImage src={Team} alt="Work"></WorkImage>
                </WorkRight>
            </Work>
            <Teams>
                <TeamsImg src={TeamSection} alt="Teams"></TeamsImg>
            </Teams>
            <Footer>
                <FooterImg src={FooterImage} alt="Teams"></FooterImg>
            </Footer>
        </SubMain>
    </MainContainer>
  )
};

export default Home;