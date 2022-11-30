import React from 'react'

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4></h4>
                        <h1 className="list-unstyled">
                            
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4></h4>
                        <ui className="list-unstyled">
                            
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4></h4>
                        <ui className="list-unstyled">
                            
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Misión TIC |
                        Universidad del Norte | Grupo 15
                    </p>
                </div>
            </div>
        </div>
    );
}