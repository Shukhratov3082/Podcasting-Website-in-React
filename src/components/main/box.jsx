import styled from "styled-components"
export const Box = (props) => {
    return (
        <Boxin>
            <img src={props.icon} alt="" />
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
            <b>{props.b}</b>
        </Boxin>
    )
}

const Boxin = styled.div`
            width: 275px;
            height: 344px;
            border-radius: 20px;
            text-align: center;
            padding: 56px 19px 34px 19px;
            color: white;
            background: linear-gradient(180deg, #3531A9 0%, #4303A4 100%);
            h3{
                margin: 12px 0 10px 0;
                font-size: 30px;
            }
            p{
                font-size: 16px;
                margin-bottom: 34px;
            }
            b{
                margin-bottom: 34px;
                font-size: 36px;
                
            }

    
`