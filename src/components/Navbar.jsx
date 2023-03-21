import React, { Component } from 'react'
import './Navbar.css'

const NavBtn = (props) => {
    // Hover: md:hover:before:content-[""] md:hover:before:absolute md:hover:before:w-[2rem] md:hover:before:bg-red-400 md:hover:before:h-[2px] md:hover:bottom-4

    return (
        <a href='/' 
        className={props.id == 1 ? 'link link-active' : 'link'}
        >
            {props.txt}
        </a>
    )
}

class Navbar extends Component {
    state = { 
        clicked: false,
        data: [[1, 'Home'], [2, 'Projects'], [3, 'Resume'], [4, 'Contact']]
    }

    handleBtn = () => {
        this.setState({
            clicked : !this.state.clicked
        })
    }

    render(){
        return (
            <>
                <header className={this.state.clicked ? 'nav-header nav-header-active' : 'nav-header'}>
                    <h1 className='sm:text-2xl sm:ml-3 sm:font-bold sm:h-max sm:flex sm:items-center sm:cursor-pointer'>Portfolio</h1>

                    <nav className={this.state.clicked ? 'nav-link nav-link-active' : 'nav-link'}>
                        {   
                            this.state.data.map((data) => <NavBtn key={data[0]} id={data[0]} txt={data[1]} />)
                        }
                    </nav>

                    <button className={this.state.clicked ? 'nav-btn nav-btn-active' : 'nav-btn'} onClick={this.handleBtn}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </button>
                </header>
            </>
        )
    }
}

export default Navbar