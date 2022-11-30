import React from 'react'

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Misión TIC |
                    Universidad del Norte | Grupo 15
                </p>
            </div>
        </div>

    );
}