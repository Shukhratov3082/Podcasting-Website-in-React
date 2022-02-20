import styled from "styled-components"
import hedDumaloq from "../header/icon/hed-dumaloq.svg"

export default function Fot() {
    return (
        <Foter>
            <div className="center">
                <div>
                    <b>Navigation</b>
                    <p>Home</p>
                    <p>Articles</p>
                    <p>Blog</p>
                </div>
                <div>
                    <b>Our socials</b>
                    <p>Instagram</p>
                    <p>Spotify</p>
                    <p>Facebook</p>
                </div>
                <div className="center-image">
                    <h2>Podcaster</h2>
                </div>
                <div>
                    <b>Usefull links</b>
                    <p>Privacy policy</p>
                    <p>Terms  conditions</p>
                    <p>Exchange and return policy</p>
                </div>
                <div>
                    <b>Information</b>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Blogs</p>
                    <p>FAQ</p>
                </div>

            </div>
            <div className="fotBottom">
                <p>copyright 2021 all rights reserved</p>
            </div>
        </Foter>
    )
}

const Foter = styled.div`
width: 100%;
height: 100%;

    color: white;
  .center{
    display: flex;
    justify-content: space-between;
    background: #11024B;
    padding: 159px 108px 126px 108px;
  

    div{
        display: flex;
        flex-direction: column;
        gap: 21px;
        b{
            font-size: 19px;
            color:#3531A9;
        }
        p{
            font-size: 19px;
        }
    }
    .center-image{
        width: 175px;
        height: 90px;
        margin: auto  158px auto 290px;
        background-image: url(${hedDumaloq});
        background-position: right;
        background-size: contain;
        background-repeat: no-repeat;
        h2{
                font-size: 56px;
                font-family: 'Caveat', cursive;
         }
    }
  }
    .fotBottom{
        width: 100%;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #09002B;
        font-size: 12px;
    }

`