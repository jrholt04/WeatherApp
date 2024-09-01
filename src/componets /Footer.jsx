import { useState } from 'react'
import githubLogo from '/Users/jacksonholt/Developer/minimalPortfolio/public/assets/github.svg'


function Footer() {
    return (
        <div className='py-5 text-center'>
            <p className='test-sm mt-2 opacity-50'>
                &copy; {new Date().getFullYear()} Jackson Holt. All rights reserved
            </p>   
        </div>
    )
}
export default Footer; 