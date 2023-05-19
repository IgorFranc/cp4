import React from "react";
import { Container,Logo,ContainerIcons} from "./styles";
import { BsSearch, BsBag} from "react-icons/bs";

function Header(){
return(
    <Container>
        <Logo src="https://img.freepik.com/vetores-premium/cadeira-logo_535345-1665.jpg?w=2000"/>
        <ContainerIcons> 
            <BsSearch size={25}/>
            <BsBag size={25} />

        </ContainerIcons>
    </Container>
);
}
export default Header;

