import React, { Component } from 'react';

class IndexNavbar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{ backgroundColor: 'green' }}>
                    <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="#">
                            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                        </a>
                    </nav>
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8" style={{ backgroundColor: 'red' }}>
                </div>
            </div>
        );
    }
}

export default IndexNavbar;