import React, { Component } from 'react'

class Footer extends Component
{
    render()
    {
        return(
            <div>
                <footer id="sticky-footer"  style={{color:"white", backgroundColor:"#343F3E"}}>
                    <div class="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="/home"> MeaningfulTravel.com</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;