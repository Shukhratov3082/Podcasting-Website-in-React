import styled from "styled-components"
import { Box } from "./box"
import Icon from "./icon/box-icon.svg"


export const Boxs = () => {
    const boxData = [
        
        { icon: { Icon }, h3: "Starter Plan", p: "Lorem ipsum dolor sit amet,  consectetur adipiscing elit. uisque  ullamcorper porttitor blandit.  Praesent lorem magna, fring", b: "12$/mo" },
        { icon: { Icon }, h3: "Starter Plan", p: "Lorem ipsum dolor sit amet,  consectetur adipiscing elit. uisque  ullamcorper porttitor blandit.  Praesent lorem magna, fring", b: "17$/mo" },
        { icon: { Icon }, h3: "Premium Plan", p: "Lorem ipsum dolor sit amet,  consectetur adipiscing elit. uisque  ullamcorper porttitor blandit.  Praesent lorem magna, fring", b: "22$/mo" }
    ]
    return (
        <Boxsup>
            {
                boxData.map((box,index) => <Box key={index} icon={box.icon} h3={box.h3} p={box.p} b={box.b} />)
            }
        </Boxsup>
    )
}
const Boxsup = styled.div`
         display: grid;
         align-items: center;
        grid-template-columns: repeat(3,1fr);
        gap: 108px;
`
