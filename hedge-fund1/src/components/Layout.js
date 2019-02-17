import Header from './Header'
import NavbarGeneral from './NavbarGeneral'
import Footer from './Footer'
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <NavbarGeneral />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;