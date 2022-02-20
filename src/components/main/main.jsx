import styled from "styled-components"
import { Boxs } from "./boxs"
import b2Image from "./icon/b2Image.png"
import box3top from "./icon/box3top.png"
import box3bottom1 from "./icon/box3bottom1.png"
import box3bottom2 from "./icon/box3bottom2.png"

export default function Main() {

    return (
        <Section>
            <div className="box">
                <Boxs />
            </div>
            <div className="box2">
                <div className="b2Left">
                    <h4>Listen from one of <br /> the best singers</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> uisque ullamcorper porttitor blandit. Praesent lorem <br /> magna, fring</p>
                    <button>Talk to us</button>
                </div>
                <div className="b2Right"></div>
            </div>
            <div className="box3">
                <div className="top">
                    <h4>Hear what others say</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                    <img src={box3top} alt="" />
                </div>
                <div className="bottom">
                    <div>
                        <h4>Listen on desktop or mobile</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                    </div>
                    <div className="b3img">
                        <img className="img1" src={box3bottom1} alt="" />
                        <img className="img2" src={box3bottom2} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    )
}




const Section = styled.div`
        width: 100%;
    .box{
        width: 100%;
        height: 681px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #080024;
    }
    .box2{
        height: 680px;
        display: flex;
        .b2Left{
            width: 50%;
            padding: 232px 219px 225px 97px;
            background: #11024B;
            color: white;
            h4{
                font-size: 48px;
                line-height: 45px;
            }
            p{
                margin:11px 0 22px;
                font-family: SF Pro Display;
                font-size: 16px;
                line-height: 19px;
            }
            button{
                padding: 11px 34px;
                background: #3531A9;
                border-radius: 5px;
                color: white;
                border: 0;

            }
        }
        .b2Right{
            width: 50%;
            height: 100%;
            background-image: url(${b2Image});
            background-position: center;
            background-size: cover;
        }
    }
    .box3{
        width: 100%;
        height: 100%;
        .top{
            color: white;
            background: #080024;
            text-align: center;
            padding:113px 449px 0 449px;
            h4{
                font-size: 48px;
            }
            p{
                margin: 7px 0 66px;
                font-size: 16px;
                line-height: 19px;
            }
        }
        .bottom{
            display: flex;
            gap: 100px;
            color: white;
            background: #080024;
            padding:113px 80px 95px 80px;
            div{
                width: 50%;
                padding: 215px 0 0 0;
                    h4{
                        margin-top: 10px;
                        font-size: 48px;
                    }
                    p{
                        font-size: 16px;
                        line-height: 19px;
                    }
             }
           .b3img{
               width: 50%;
               height: 100%;
               position: relative;
               padding: 111px 0 0 0;
                    .img1{
                        position: relative;
                        bottom: -5px;
                        right: 11%;
                        z-index: 2;
                     }
                    .img2{
                        position: absolute;
                        bottom: 90px;
                        right: 0;
                    }
           }
        }
    }
`
